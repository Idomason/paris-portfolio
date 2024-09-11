export default function HeroText() {
  return (
    <div>
      {/* Name */}
      <p className="xl:leading-4rem my-5 text-xl font-light text-white/70 md:leading-[3rem] lg:leading-[3.5rem] xl:text-2xl">
        Hi dear! <br /> I am Okorie Favour Ijeoma
      </p>
      {/* Title */}
      <h1 className="xl:leading-4rem text-3xl font-bold text-white sm:text-4xl md:text-5xl md:leading-[3rem] lg:text-6xl lg:leading-[3.5rem] xl:text-7xl">
        Professional Virtual Assistant.
      </h1>

      {/* Description */}
      <p className="mt-6 text-sm text-white/60 md:text-base">
        I am professional virtual assistant with 3 years of industry experience.
        I love what I do and always improve my work by learning new ideas
      </p>

      {/* Buttons */}
      <div className="mt-8 flex items-center space-x-4">
        <button className="button bg-green-700 hover:bg-green-900">
          Hire Me
        </button>
        <button className="button bg-yellow-700 hover:bg-yellow-900">
          Download CV
        </button>
      </div>

      {/* Stats */}
      <div className="mt-8 flex flex-wrap items-center space-x-16">
        <div>
          <p className="text-base font-bold text-white md:text-xl lg:text-2xl">
            26+
          </p>
          <p className="mb-2 mt-2 h-[3px] w-[100px] rounded-lg bg-green-600"></p>
          <p className="text-sm text-white/70 md:text-lg">Jobs</p>
        </div>
        <div>
          <p className="text-base font-bold text-white md:text-xl lg:text-2xl">
            20+
          </p>
          <p className="mb-2 mt-2 h-[3px] w-[100px] rounded-lg bg-blue-600"></p>
          <p className="text-sm text-white/70 md:text-lg">Clients</p>
        </div>
        <div>
          <p className="text-base font-bold text-white md:text-xl lg:text-2xl">
            6+
          </p>
          <p className="mb-2 mt-2 h-[3px] w-[100px] rounded-lg bg-pink-600"></p>
          <p className="text-sm text-white/70 md:text-lg">Contracts</p>
        </div>
      </div>
    </div>
  );
}
