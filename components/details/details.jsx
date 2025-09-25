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
import Image from "next/image";
import { getImageUrl } from "@/config/config";
import { productStore } from "@/store/useStore";
import { useRouter } from "next/navigation";

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const setProduct = productStore((state) => state.setProduct);
  const router = useRouter();
  const addToCart = (product, type) => {
    const productData = {
      ...product,
      quantity,
      selectedSize,
    }
    if (type === "cart") {
      setProduct(productData);
    }
    if (type === "purchase") {
      setProduct(productData);
      router.push("/checkout");
    }
  };

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
                    ৳{product?.product?.price}
                  </span>
                  {/* <Badge variant="destructive" className="text-xs">
                    10% OFF
                  </Badge> */}
                </div>
              </div>



              <div className="flex items-center gap-2 text-sm text-orange-600 mb-4">
                <Clock className="w-4 h-4" />
                <span>27 sold in last 2 hours</span>
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: product?.product?.description,
              }}
            />


            <div>
              <div className="flex flex-wrap gap-3">
                {product?.product?.options?.map((option) => (
                  <div key={option?.id} className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      {option?.name}
                    </span>

                    <div className="flex gap-2">
                      {option?.values?.map((value) => (
                        <button
                          key={value?.id}
                          onClick={() => setSelectedSize(value?.option_value)}
                          className={` h-8 w-8 rounded-full border font-medium transition-all duration-200 ${selectedSize === value?.option_value
                  ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
                        >
                          {value?.option_value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
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
              <button onClick={() => addToCart(product?.product, "purchase")} className="button-fourth rounded-md cursor-pointer w-full h-12 text-lg font-medium">
                  Buy It Now
                </button>
              <Button handler={() => addToCart(product?.product, "cart")} className="w-full mt-2 h-12 text-lg cursor-pointer font-medium">
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
