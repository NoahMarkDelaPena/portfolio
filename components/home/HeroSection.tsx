"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const handleDownloadResume = () => {
    const pdfUrl = "NoahMarkDelaPena-Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "NoahMarkDelaPena-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-[90vh] flex justify-center items-center relative">
      <Image
        src="/grid.svg"
        alt="grid"
        width={500}
        height={500}
        className="absolute w-full h-full"
      />
      <div className="flex flex-col justify-center items-center gap-8 z-10">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center gap-6">
            <Link
              href="https://www.facebook.com/noahmark5delapena/"
              target="_blank"
            >
              <Image
                src="/socials/facebook.svg"
                alt="facebook"
                width={40}
                height={40}
                className="invert border rounded-full p-2 w-12"
              />
            </Link>
            <Link href="https://github.com/NoahMarkDelaPena" target="_blank">
              <Image
                src="/socials/github.svg"
                alt="github"
                width={40}
                height={40}
                className="invert border rounded-full p-2 w-12"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/noah-mark-dela-pe%C3%B1a-082441252/2"
              target="_blank"
            >
              <Image
                src="/socials/linkedin.svg"
                alt="linkedin"
                width={40}
                height={40}
                className="invert border rounded-full p-2 w-12"
              />
            </Link>
          </div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-center">
            Hi! I&apos;m Noah Mark
          </h1>
        </div>
        <button
          className="bg-white text-gray-700 hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2"
          onClick={handleDownloadResume}
        >
          Checkout my Resume
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
