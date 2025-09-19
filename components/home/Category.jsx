"use client"
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/config/config";

export default function Category({ categories }) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
        Shop By Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <Link href={`/products?category=${categories[0]?.id}`}  className="relative group overflow-hidden rounded-2xl bg-gray-100 aspect-square md:aspect-auto">
          <Image
            src={`${getImageUrl(categories[0]?.image)}`}
            alt={categories[0]?.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
          <Button
            variant="secondary"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-black font-medium px-8 py-2 rounded-full shadow-lg"
          >
            {categories[0].name}
          </Button>
        </Link>

        <div className="flex flex-col gap-6 md:h-[600px]">
          <Link href={`/products?category=${categories[1]?.id}`} className="relative group overflow-hidden rounded-2xl bg-gray-100 aspect-square md:flex-1">
            <Image
              src={`${getImageUrl(categories[1]?.image)}`}
              alt={categories[1]?.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            <Button
              variant="secondary"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-black font-medium px-8 py-2 rounded-full shadow-lg"
            >
              {categories[1].name}
            </Button>
          </Link>

          <Link href={`/products?category=${categories[2]?.id}`} className="relative group overflow-hidden rounded-2xl bg-gray-100 aspect-square md:flex-1">
            <Image
              src={`${getImageUrl(categories[2]?.image)}`}
              alt={categories[2]?.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            <Button
              variant="secondary"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-black font-medium px-8 py-2 rounded-full shadow-lg"
            >
              {categories[2].name}
            </Button>
          </Link>
        </div>

        <Link href={`/products?category=${categories[3]?.id}`} className="relative group overflow-hidden rounded-2xl bg-gray-100 aspect-square md:aspect-auto">
          <Image
            src={`${getImageUrl(categories[3]?.image)}`}
            alt={categories[3]?.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
          <Button
            variant="secondary"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-black font-medium px-8 py-2 rounded-full shadow-lg"
          >
            {categories[3]?.name}
          </Button>
        </Link>
      </div>
    </section>
  );
}
