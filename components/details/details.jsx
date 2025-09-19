"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Share2,
  Truck,
  Clock,
  Star,
  Plus,
  Minus,
  HelpCircle,
  ShoppingCart,
} from "lucide-react";
import { ProductsGrid } from "../products/ProductsGrid";
import CardComponent from "../common/Card";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/config/config";

export default function ProductDetails({ product }) {
  console.log(product);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("40");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-background mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <Badge className="absolute top-4 left-4 bg-red-500 text-white z-10">
                Sale
              </Badge>
              <Image
                src={
                  getImageUrl(product?.product?.images?.[selectedImage]) ||
                  "/assets/home/image1.png"
                }
                alt="Short sleeve polo t shirt"
                className="w-full h-[500px] object-contain rounded-lg"
                width={500}
                height={500}
              />
            </div>
            <div className="flex gap-2">
              {product?.product?.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <Image
                    src={getImageUrl(image) || "/assets/home/image1.png"}
                    alt={`Product view ${index + 1}`}
                    className="w-20 h-20 object-contain"
                    width={80}
                    height={80}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {product?.product?.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-red-500">
                    <span className="text-2xl">৳ </span>{" "}
                    {product?.product?.sale_price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ৳{product.price}
                  </span>
                  <Badge variant="destructive" className="text-xs">
                    10% OFF
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(2)</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-orange-600 mb-4">
                <Clock className="w-4 h-4" />
                <span>27 sold in last 2 hours</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="p-4 border-0 ">
              <p className="text-sm font-medium mb-2">
                The offer will last till
              </p>
              <div className="flex gap-4">
                <div className="text-center bg-third py-3 px-5 rounded-sm border">
                  <div className="text-2xl font-bold">02</div>
                  <div className="text-xs text-muted-foreground">DAYS</div>
                </div>
                <div className="text-center bg-third py-3 px-5 rounded-sm border">
                  <div className="text-2xl font-bold">11</div>
                  <div className="text-xs text-muted-foreground">HRS</div>
                </div>
                <div className="text-center bg-third py-3 px-5 rounded-sm border">
                  <div className="text-2xl font-bold">36</div>
                  <div className="text-xs text-muted-foreground">MIN</div>
                </div>
                <div className="text-center bg-third py-3 px-5 rounded-sm border">
                  <div className="text-2xl font-bold">31</div>
                  <div className="text-xs text-muted-foreground">SEC</div>
                </div>
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: product?.product?.description,
              }}
            />

            {/* Color Selection */}

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Size:</span>
                  <span>{selectedSize}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {/* {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))} */}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="font-medium mb-3 block">Quantity:</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-muted"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-muted"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <span>Only 3 left</span>
                  <span>-</span>
                  <span>Selling fast</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href={`/checkout?product=12`}>
                <button className="button-fourth rounded-md cursor-pointer w-full h-12 text-lg font-medium">
                  Buy It Now
                </button>
              </Link>
              <Button className="w-full mt-2 h-12 text-lg cursor-pointer font-medium">
                {" "}
                Add to Cart <ShoppingCart width={20} height={20} />
              </Button>
            </div>

            {/* Additional Options */}
            <div className="flex items-center justify-between text-sm">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <HelpCircle className="w-4 h-4" />
                Ask A Question
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Truck className="w-4 h-4" />
                Delivery & Return
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>

        <p className="text-2xl font-bold mt-6">Description</p>
        <div className="mt-2">
          <hr />
        </div>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: product?.product?.content }}
        />
        <div className="mt-10">
          <hr />
        </div>
        <div className="my-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Related Products
          </h2>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {product?.related_products?.map((product) => (
              <CardComponent key={product.id} card={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
