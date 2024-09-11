import { FaAward } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="pb-16 pt-16">
      <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* FIRST PART */}
        <div>
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-rose-600">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-black/80">
              Guaranteed and Certified
            </h1>
          </div>
          <h1 className="mt-8 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl md:leading-[3rem] lg:text-6xl lg:leading-[3.5rem] xl:leading-[3.9rem]">
            About Me
          </h1>
          <p className="mt-4 text-gray-600">
            I am professional virtual assistant with 3 years of industry
            experience. I love what I do and always improve my work by learning
            new ideas
          </p>
          <button className="mt-8 flex items-center space-x-2 rounded-3xl bg-black px-8 py-3 text-white transition-all duration-200 hover:bg-gray-700">
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </div>
        {/* SECONDS PART */}
        <div>
          <div>
            <h1 className="text-7xl font-bold text-black/5 lg:text-9xl">01</h1>
            <div className="-mt-10">
              <h1 className="mb-3 text-xl font-bold text-black/70 md:text-2xl">
                Flexible Schedules
              </h1>
              <p className="w-[90%] text-base font-bold text-black text-black/60 lg:w-[70%]">
                I have flexible schedules for my clients, giving them ample time
                and space for quality feedback.{" "}
              </p>
            </div>
          </div>
          <div className="mt-8 w-full">
            <h1 className="text-7xl font-bold text-black/5 lg:text-9xl">02</h1>
            <div className="-mt-10">
              <h1 className="mb-3 text-xl font-bold text-black/70 md:text-2xl">
                Pocket Friendly
              </h1>
              <p className="w-[90%] text-base font-bold text-black text-black/60 lg:w-[70%]">
                I have fair payment plans for my clients, never to overcharge
                but just what is good enough for my time.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
