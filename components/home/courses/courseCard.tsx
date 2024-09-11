/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Tilt from "react-parallax-tilt";
import { ICourse } from "@/utils/types";
import Image from "next/image";
import { FaFile, FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

export default function CourseCard({ course }: ICourse) {
  return (
    <Tilt>
      <div className="cursor-pointer overflow-hidden rounded-lg bg-white">
        <div>
          <Image
            className="h-full w-full"
            src={course.image}
            width={400}
            height={400}
            alt={course.title}
          />
        </div>
        <div className="p-4">
          {/* Price */}
          <h1 className="relative z-[10] ml-auto mt-[-4rem] flex h-20 w-20 flex-col items-center justify-center rounded-full bg-rose-700 text-lg font-bold text-white">
            &#8358;{course.price}
          </h1>
          {/* Details */}
          <div className="mt-6 flex items-center space-x-4">
            <span className="text-lg font-bold text-black/70">
              {course.category}
            </span>
            <span className="text-base text-gray-600">{course.author}</span>
          </div>
          {/* Course Title */}
          <h1 className="mt-2 text-xl font-bold text-black">{course.title}</h1>
          {/* Reviews */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              {Array.from({ length: 5 }, (i: number, _) => (
                <FaStar key={i} className="h-4 w-4 text-yellow-600" />
              ))}
            </div>
            <span className="text-base font-semibold text-orange-800">
              ({course.reviewNumber} Reviews)
            </span>
          </div>
          {/* Line */}
          <div className="mb-6 mt-6 h-[2px] w-full bg-gray-500/15"></div>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaFile className="h-4 w-4 text-orange-600" />
              <p className="text-base font-semibold text-gray-800">
                {course.lessons} Lessons
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUserGroup className="h-4 w-4 text-orange-600" />
              <p className="text-base font-semibold text-gray-800">
                {course.students} Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
