"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { ProductsGrid } from "./ProductsGrid";
import { API_URL } from "@/config/config";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"; // make sure your Sheet component is imported

const fetcher = (url) => fetch(url).then((res) => res.json());

export function ProductFilters({ categories = [], brands = [], slug, initialProducts = [] }) {
  console.log(initialProducts);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Sheet open state (mobile)
  const [open, setOpen] = useState(false);

  // Initialize from URL
  useEffect(() => {
    const urlCategories = searchParams.get("categories")?.split(",") || [];
    const urlBrands = searchParams.get("brands")?.split(",") || [];
    const minPrice = parseInt(searchParams.get("minPrice") || "0");
    const maxPrice = parseInt(searchParams.get("maxPrice") || "1000");

    setSelectedCategories(urlCategories);
    setSelectedBrands(urlBrands);
    setPriceRange([minPrice, maxPrice]);
  }, [searchParams]);

  // Construct API URL
  const filterParams = new URLSearchParams();
  if (selectedCategories.length) filterParams.set("categories", selectedCategories.join(","));
  if (selectedBrands.length) filterParams.set("brands", selectedBrands.join(","));
  if (priceRange[0] !== 0) filterParams.set("minPrice", priceRange[0]);
  if (priceRange[1] !== 1000) filterParams.set("maxPrice", priceRange[1]);

  const apiUrl = `${API_URL}/category/${slug}?${filterParams.toString()}`;
  const { data: filteredProducts } = useSWR(apiUrl, fetcher, {
    fallbackData: initialProducts,
    revalidateOnFocus: true,
  });

  const updateURL = (newCategories, newBrands, newPriceRange) => {
    const params = new URLSearchParams();
    if (newCategories.length) params.set("categories", newCategories.join(","));
    if (newBrands.length) params.set("brands", newBrands.join(","));
    if (newPriceRange[0] !== 0) params.set("minPrice", newPriceRange[0]);
    if (newPriceRange[1] !== 1000) params.set("maxPrice", newPriceRange[1]);

    router.push(`/category/${slug}?${params.toString()}`);
  };

  const handleCategoryChange = (category, checked) => {
    const updated = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updated);
    updateURL(updated, selectedBrands, priceRange);
  };

  const handleBrandChange = (brand, checked) => {
    const updated = checked
      ? [...selectedBrands, brand]
      : selectedBrands.filter((b) => b !== brand);
    setSelectedBrands(updated);
    updateURL(selectedCategories, updated, priceRange);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
    updateURL(selectedCategories, selectedBrands, range);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
    router.push(`/category/${slug}`);
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Price */}
      <div>
        <h3 className="text-sm font-medium mb-2">Price Range</h3>
        <Slider value={priceRange} onValueChange={handlePriceChange} min={0} max={1000} step={10} />
        <div className="flex justify-between text-sm mt-1">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium mb-2">Categories</h3>
        {categories.map((cat) => (
          <div key={cat.id || cat.name} className="flex items-center space-x-2">
            <Checkbox
              id={cat.id || cat.name}
              checked={selectedCategories.includes(cat.name)}
              onCheckedChange={(checked) => handleCategoryChange(cat.name, checked)}
            />
            <Label htmlFor={cat.id || cat.name}>{cat.name}</Label>
          </div>
        ))}
      </div>

      {/* Brands */}
      <div>
        <h3 className="text-sm font-medium mb-2">Brands</h3>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox
              id={brand}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={(checked) => handleBrandChange(brand, checked)}
            />
            <Label htmlFor={brand}>{brand}</Label>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4" onClick={clearFilters}>
        Clear all
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-6">
     
      <div className="hidden md:block w-64">
        <Card className="p-6 bg-white border-neutral-200">
          <FiltersContent />
        </Card>
      </div>

      {/* Mobile Filters */}
      <div className="block md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>Filters</Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] max-w-sm">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetClose asChild>
                <Button variant="ghost" className="ml-auto">Close</Button>
              </SheetClose>
            </SheetHeader>
            <FiltersContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        <ProductsGrid products={filteredProducts.products || []} />
      </div>
    </div>
  );
}
