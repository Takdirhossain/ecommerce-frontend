"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 124,
    hours: 5,
    minutes: 43,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div className="bg-third">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto p-8 ">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-600 font-medium">Countdown is on</p>
          <h1 className="text-4xl font-bold text-black tracking-wide">
            FLASH SALE : UP TO 70% OFF!
          </h1>
          <div>
            <Button className="button-secondary cursor-pointer py-5 md:py-6">SHOP NOW <ArrowRight/></Button>
          </div>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0 md:gap-6">
          <div className="bg-red-600 text-white p-4 min-w-[80px] text-center">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-xs font-medium mt-1">DAYS</div>
          </div>
          <div className="bg-red-600 text-white p-4 min-w-[80px] text-center">
            <div className="text-2xl font-bold">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="text-xs font-medium mt-1">HRS</div>
          </div>
          <div className="bg-red-600 text-white p-4 min-w-[80px] text-center">
            <div className="text-2xl font-bold">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="text-xs font-medium mt-1">MIN</div>
          </div>
          <div className="bg-red-600 text-white p-4 min-w-[80px] text-center">
            <div className="text-2xl font-bold">
              {formatNumber(timeLeft.seconds)}
            </div>
            <div className="text-xs font-medium mt-1">SEC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
