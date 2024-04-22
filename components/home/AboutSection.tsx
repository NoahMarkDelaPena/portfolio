import Image from "next/image";
import React, { FC } from "react";

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = () => {
  return (
    <section className="min-h-screen flex justify-center items-center max-w-4xl mx-auto">
      <div className="flex flex-col">
        <span className="relative">
          <span className="absolute bg-white w-full h-[300px] bottom-[60px]"></span>
          <Image
            src="/my-image.svg"
            alt="about-image"
            width={100}
            height={100}
            className="w-[300px] h-full z-10 relative"
          />
        </span>

        <div className="max-w-[300px] sm:max-w-none md:ml-4 flex flex-col gap-8">
          <h1 className="text-white text-5xl">Noah Mark S. Dela Pena</h1>
          <span className="text-gray-300 text-lg">
            <p>Born in Malolos City, Bulacan in 2002</p>
            <p>
              Graduating this year 2024 in Bulacan State University - Hagonoy
              Campus
            </p>
            <p className="text-sm ml-4">
              (Bachelor of Science in Information Technology)
            </p>
          </span>
          <span>
            <p className="max-w-[700px] text-gray-300 text-lg">
              I&apos;m a Frontend Web Developer and a UI/UX Designer who
              occasionally does some backend stuff. I like collaborating and
              sharing ideas with other students and developers.
            </p>
            <p className="max-w-[700px] text-gray-300 text-sm ml-4 mt-8">
              Email: noahmarkdelapena@gmail.com
            </p>
            <p className="max-w-[700px] text-gray-300 text-sm ml-4">
              Contact: 09369855162
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
