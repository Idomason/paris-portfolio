import { coursesData } from "@/data/data";
import Image from "next/image";
import CourseCard from "./courseCard";

export default function Courses() {
  return (
    <div className="relative mt-16 bg-gray-200 pb-12">
      {/* Baouncing Ball */}
      <Image
        className="absolute top-[30%] animate-bounce"
        src="/images/cb.png"
        width={800}
        height={800}
        alt="Image"
      />

      <div className="mx-auto w-4/5 pb-8 pt-8">
        {/* Big Title */}
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Popular Projects
        </h1>

        {/* Courses */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <div key={course.id}>
              {/* Individual Courses */}
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
