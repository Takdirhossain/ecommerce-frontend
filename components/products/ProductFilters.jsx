"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"

const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty"]
const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony", "Canon"]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])

  // initialize from URL params
  useEffect(() => {
    const urlCategories = searchParams.get("categories")?.split(",") || []
    const urlBrands = searchParams.get("brands")?.split(",") || []
    const minPrice = parseInt(searchParams.get("minPrice") || "0")
    const maxPrice = parseInt(searchParams.get("maxPrice") || "1000")

    setSelectedCategories(urlCategories)
    setSelectedBrands(urlBrands)
    setPriceRange([minPrice, maxPrice])
  }, [searchParams])

  const updateParams = (newCategories, newBrands, newPriceRange) => {
    const params = new URLSearchParams()
    if (newCategories.length) params.set("categories", newCategories.join(","))
    if (newBrands.length) params.set("brands", newBrands.join(","))
    if (newPriceRange[0] !== 0) params.set("minPrice", newPriceRange[0])
    if (newPriceRange[1] !== 1000) params.set("maxPrice", newPriceRange[1])

    router.push(`/products?${params.toString()}`)
  }

  const handleCategoryChange = (category, checked) => {
    const updated = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category)
    setSelectedCategories(updated)
    updateParams(updated, selectedBrands, priceRange)
  }

  const handleBrandChange = (brand, checked) => {
    const updated = checked ? [...selectedBrands, brand] : selectedBrands.filter((b) => b !== brand)
    setSelectedBrands(updated)
    updateParams(selectedCategories, updated, priceRange)
  }

  const handlePriceChange = (range) => {
    setPriceRange(range)
    updateParams(selectedCategories, selectedBrands, range)
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 1000])
    router.push("/products")
  }

  return (
    <Card className="p-6 bg-white border-neutral-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-neutral-900">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-neutral-600 hover:text-neutral-900">
          Clear all
        </Button>
      </div>

      <div className="space-y-8">
        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium text-neutral-900 mb-4">Price Range</h3>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={handlePriceChange}
              max={1000}
              min={0}
              step={10}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-neutral-900 mb-4">Categories</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-3">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                />
                <Label htmlFor={category} className="text-sm text-neutral-700 cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-sm font-medium text-neutral-900 mb-4">Brands</h3>
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-3">
                <Checkbox
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, checked)}
                />
                <Label htmlFor={brand} className="text-sm text-neutral-700 cursor-pointer">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
