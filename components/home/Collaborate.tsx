"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Collaborate = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/grids.svg"
        alt="grid"
        width={100}
        height={100}
        className="w-full h-full absolute"
      />
      <div className="flex flex-col justify-center items-center gap-12 z-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl z-10 text-white text-center">
          Want to collaborate?
        </h1>
        <div className="flex flex-col justify-center items-center gap-3 mt-8">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center text-white">
            Send me a message through email or any of these social links.
          </h3>
          <div className="flex justify-center items-center gap-6">
            <button
              className="bg-white text-gray-700 hover:bg-primary/90 cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium h-10 px-4 py-2"
              onClick={() => copyToClipBoard("noahmarkdelapena@gmail.com")}
            >
              {copySuccess ? "Copied!" : "Copy email to clipboard"}
            </button>
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
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
