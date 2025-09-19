import { ArrowRight } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section className="lg:h-full h-[600px] relative">
      <video
        src="/assets/home/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col gap-4 mt-10 items-center justify-center">
        <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-white text-center">
          PROSLIDER INSPIRED BY A <br /> GLOBAL CELEBRITY
        </h1>
        <button className=" px-10 flex gap-2 py-4 cursor-pointer font-semibold  mt-6 button-primary">
          SHOP NOW <ArrowRight/>
        </button>

      </div>
    </section>
  );
}
