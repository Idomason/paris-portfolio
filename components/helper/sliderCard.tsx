import { ISliderCardProp } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function SliderCard({ image, name, role }: ISliderCardProp) {
  return (
    <div className="flex flex-wrap items-center space-x-10 sm:flex-nowrap">
      <div className="h-full w-full">
        <Image
          className="h-full w-full"
          src={image}
          width={350}
          height={350}
          alt="image"
        />
      </div>
      <div className="mb-7 mt-6">
        <div className="flex items-center">
          {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {Array.from({ length: 5 }, (i: number, _) => (
            <FaStar
              key={i}
              className="h-4 w-4 text-yellow-600 md:h-5 md:w-5 xl:h-7 xl:w-7"
            />
          ))}
        </div>
        <p className="mt-6 w-[95%] text-xs font-semibold text-gray-800/65 md:w-4/5 md:text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          porro consectetur, quidem neque eaque perferendis ut vitae earum
          consequuntur delectus eligendi. Cumque voluptatum omnis quo?
        </p>
        <div className="mt-7">
          <h1 className="text-xl font-semibold text-black">{name}</h1>
          <p className="text-lg text-black/60">{role}</p>
        </div>
      </div>
    </div>
  );
}
