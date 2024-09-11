import Slider from "@/components/helper/slider";
import React from "react";
import { BsQuote } from "react-icons/bs";

export default function Review() {
  return (
    <div className="bg-black pb-16 pt-20">
      <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-20 xl:grid-cols-3">
        {/* Text Content */}
        <div className="xl:col-span-1">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-rose-600">
              <BsQuote className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-white">
              Student feedbacks
            </h1>
          </div>
          {/* Title */}
          <h1 className="mt-8 text-2xl font-bold text-white md:text-3xl md:leading-[3rem] lg:text-5xl lg:leading-[3.3rem] xl:leading-[3.6rem]">
            Trusted by genius people.
          </h1>
          {/* Details */}
          <p className="mt-6 text-base text-white/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic
            similique eligendi autem nulla aperiam ducimus. Consequuntur.
          </p>
          <div className="mt-8 flex items-center space-x-10">
            <p className="text-5xl font-bold text-white">99%</p>
            <p className="text-white">
              Students Complete
              <br /> Course Successfully
            </p>
          </div>
        </div>
        {/* Info */}
        {/* Slider */}
        <div className="overflow-hidden rounded-lg bg-white xl:col-span-2">
          <Slider />
        </div>
      </div>
    </div>
  );
}
