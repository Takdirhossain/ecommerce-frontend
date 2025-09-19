"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"

const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty"]

const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony", "Canon"]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])

  const handleCategoryChange = (category, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleBrandChange = (brand, checked) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 1000])
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
            <Slider value={priceRange} onValueChange={setPriceRange} max={1000} min={0} step={10} className="mb-4" />
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
                  onCheckedChange={(checked) => handleBrandChange(brand, checked )}
                />
                <Label htmlFor={brand} className="text-sm text-neutral-700 cursor-pointer">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="text-sm font-medium text-neutral-900 mb-4">Rating</h3>
          <div className="space-y-3">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-3">
                <Checkbox id={`rating-${rating}`} />
                <Label
                  htmlFor={`rating-${rating}`}
                  className="text-sm text-neutral-700 cursor-pointer flex items-center"
                >
                  <span className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`text-xs ${i < rating ? "text-amber-400" : "text-neutral-300"}`}>
                        ★
                      </span>
                    ))}
                  </span>
                  <span className="ml-2">& up</span>
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
