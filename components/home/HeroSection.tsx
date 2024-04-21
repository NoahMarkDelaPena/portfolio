"use client";
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
    <main className="min-h-[90vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-center">
          Hi! I&apos;m Noah Mark
        </h1>
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
