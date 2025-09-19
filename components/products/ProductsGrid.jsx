"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Card from "../common/Card"
import { Grid2X2, Grid3X3, List } from "lucide-react"

// Mock product data
const products = [
    {
      id: 1,
      name: "Deep Neck Ribbon Sweater",
      price: 90,
      haveDiscount: true,
      discountPercentage: 20,
      image: "/assets/home/image1.png",
      hoverImage: "/assets/home/image2.png",

      imageGallery: [
        "/assets/home/image1.png",
        "/assets/home/image2.png",
        "/assets/home/image3.png",
      ],
    },
    {
      id: 2,
      name: "lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 90,

      image: "/assets/home/image2.png",
      hoverImage: "/assets/home/image3.png",
      imageGallery: [
        "/assets/home/image1.png",
        "/assets/home/image2.png",
        "/assets/home/image3.png",
      ],
    },
    {
      id: 3,
      name: "lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 90,

      image: "/assets/home/image3.png",
      hoverImage: "/assets/home/image1.png",
      imageGallery: [
        "/assets/home/image1.png",
        "/assets/home/image2.png",
        "/assets/home/image3.png",
      ],
    },
    {
      id: 5,
      name: "Deep Neck Ribbon Sweater",
      price: 90,

      image: "/assets/home/image1.png",
      hoverImage: "/assets/home/image2.png",
      imageGallery: [
        "/assets/home/image1.png",
        "/assets/home/image2.png",
        "/assets/home/image3.png",
      ],
    },
    {
      id: 6,
      name: "Deep Neck Ribbon Sweater",
      price: 90,

      image: "/assets/home/image1.png",
      hoverImage: "/assets/home/image2.png",
      haveDiscount: true,
      discountPercentage: 20,
      imageGallery: [
        "/assets/home/image1.png",
        "/assets/home/image2.png",
        "/assets/home/image3.png",
      ],
    },
    {
      id: 7,
      name: "lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 90,

      image: "/assets/home/image2.png",
      hoverImage: "/assets/home/image3.png",
      imageGallery: [
        "/assets/home/image1.png",
        "/assets/home/image2.png",
        "/assets/home/image3.png",
      ],
    },
    {
      id: 8,
      name: "lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 90,

      image: "/assets/home/image3.png",
      hoverImage: "/assets/home/image1.png",
      imageGallery: [
        "/assets/home/image1.png",
        "/assets/home/image2.png",
        "/assets/home/image3.png",
      ],
    },
    {
      id: 9,
      name: "Deep Neck Ribbon Sweater",
      price: 90,

      image: "/assets/home/image1.png",
      hoverImage: "/assets/home/image2.png",
      imageGallery: [
        "/assets/home/image1.png",
        "/assets/home/image2.png",
        "/assets/home/image3.png",
      ],
    },
  ];
export function ProductsGrid() {
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <p className="text-sm text-neutral-600">Showing {products.length} products</p>

        <div className="flex items-center gap-4">
          {/* View Toggle */}
          <div className="flex border border-neutral-200 rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="h-8 px-3"
            >
             <Grid3X3/>
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="h-8 px-3"
            >
             <List/>
            </Button>
          </div>

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div
        className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {products.map((product) => (
          <Card key={product?.id} card={product} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
