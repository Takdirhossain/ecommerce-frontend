import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../magicui/scroll-based-velocity";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { API_URL, getImageUrl } from "@/config/config";
import { ShoppingCart } from "lucide-react";
import { productStore } from "@/store/useStore";
import { useRouter } from "next/navigation";

export default function CardComponent({ card }) {
  const { setProduct } = productStore();
  const router = useRouter();
  const handalePurchase = (card) => {
    setProduct(card);
    router.push(`/checkout`);
  };
  return (
    <div className="mt-4">
      <Link href={`/product/${card?.slugable?.key}`}>
        <div className="cursor-pointer">
          <div className="bg-[#F0F0F0] rounded-sm relative overflow-hidden group w-full">
            <Image
              className=" w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
              src={getImageUrl(card?.images?.[0])}
              alt={card?.name}
              width={600}
              height={600}
            />

            <Image
              className=" w-full h-auto object-contain absolute top-0 left-0 opacity-0 transition-all duration-500 transform scale-90 group-hover:scale-100 group-hover:opacity-100"
              src={getImageUrl(card?.images?.[1])}
              alt={`${card?.name} hover`}
              width={600}
              height={600}
            />

            {card.haveDiscount && (
              <div className="absolute bottom-0 left-0 bg-zinc-900">
                <ScrollVelocityContainer className="text-sm">
                  <ScrollVelocityRow baseVelocity={20} direction={1}>
                    <p className="text-sm text-white">
                      {" "}
                      Hot Sale 20% Off Now 🔥
                    </p>
                  </ScrollVelocityRow>
                </ScrollVelocityContainer>
              </div>
            )}
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mt-2 font-semibold text-sm text-center">
            {card?.name}
          </h2>
          <p className="font-semibold text-left text-[#f5857a]">
            {" "}
            <span className="text-xl">৳</span>
            {card?.price}{" "}
            <strike className="text-zinc-400">
              {" "}
              {card?.sale_price && card.sale_price}
            </strike>
          </p>
        </div>
        <Button onClick={() => handalePurchase(card)} className="cursor-pointer" ><ShoppingCart/></Button>
      </div>
    </div>
  );
}
