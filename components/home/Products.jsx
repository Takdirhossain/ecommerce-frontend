"use client";
import React, { useState } from "react";
import CardComponent from "../common/Card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Products({ productsByType }) {
  const [activeTab, setActiveTab] = useState("new-arrival");
  const products = productsByType[activeTab] || [];

  return (
    <section className="my-16 container mx-auto">
      <div className="flex justify-center flex-col items-center md:flex-row gap-6 mb-10 text-center">
        <h2
          onClick={() => setActiveTab("new-arrival")}
          className={`text-3xl font-bold cursor-pointer ${
            activeTab === "new-arrival"
              ? "text-zinc-900 underline"
              : "text-gray-500"
          }`}
        >
          New Arrivals
        </h2>
        <h2
          onClick={() => setActiveTab("best-selling")}
          className={`text-3xl font-bold cursor-pointer ${
            activeTab === "best-selling"
              ? "text-zinc-900 underline"
              : "text-gray-500"
          }`}
        >
          Best Seller
        </h2>
        <h2
          onClick={() => setActiveTab("special-offer")}
          className={`text-3xl font-bold cursor-pointer ${
            activeTab === "special-offer"
              ? "text-zinc-900 underline"
              : "text-gray-500"
          }`}
        >
          On Sale
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
        {products?.data.map((product) => (
          <CardComponent key={product.id} card={product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button className="px-6 py-4 h-12">
          Explore More <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
