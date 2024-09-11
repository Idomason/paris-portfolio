"use client";

import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export default function Feature() {
  return (
    <div className="pb-16 pt-16">
      <div className="mx-auto mt-8 grid w-4/5 grid-cols-1 items-center gap-12 xl:grid-cols-2">
        {/* Image Content */}
        <Tilt>
          <div>
            <Image src="/images/f.png" width={1000} height={1000} alt="" />
          </div>
        </Tilt>
        {/* Text Content */}
        <div>
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-rose-600">
              <FaBriefcase className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-black/80">
              Premium Learning Experience.
            </h1>
          </div>
          <h1 className="mt-8 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl md:leading-[3rem] lg:text-6xl lg:leading-[3.5rem] xl:leading-[3.9rem]">
            Providing amazing VA Services.
          </h1>
          <div className="mb-6 mt-8">
            <h1 className="text-lg font-semibold text-black/70 md:text-2xl">
              Let me help you handle all VA projects
            </h1>
            <p className="mt-4 text-sm text-black/70 md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam
              in dolorem consectetur dolores vitae tempora accusantium.
            </p>
          </div>
          <div className="mb-6 mt-8">
            <h1 className="text-lg font-semibold text-black/70 md:text-2xl">
              Improve your Business Standards
            </h1>
            <p className="mt-4 text-sm text-black/70 md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam
              in dolorem consectetur dolores vitae tempora accusantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
