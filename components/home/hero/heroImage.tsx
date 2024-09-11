"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function HeroImage() {
  return (
    <Tilt>
      <div className="hidden lg:block">
        {/* <Image src='/images/hero.png' width={800} height={600} alt='Hero image' /> */}
        <Image
          src="/images/Paris.png"
          width={800}
          height={600}
          alt="Hero image"
        />
      </div>
    </Tilt>
  );
}
