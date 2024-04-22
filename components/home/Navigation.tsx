import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface NavigationProps {
  isHomeActive?: boolean;
  isProjectsActive?: boolean;
}

const Navigation: FC<NavigationProps> = ({
  isHomeActive,
  isProjectsActive,
}) => {
  return (
    <header className="sticky top-0 z-50 h-16 ">
      <nav className="flex justify-between items-center border-b-[1px] border-gray-700 bg-[#0d0c0d]/80 backdrop-blur-sm">
        <header>
          <Image
            src="portfolio-logo.svg"
            alt="header-logo"
            width={80}
            height={80}
            className=" invert"
          />
        </header>
        <ul className="flex justify-center items-center gap-4 text-white">
          <li>
            <Link
              href="/"
              className={`${
                isHomeActive
                  ? "bg-white px-4 py-1 rounded-full text-gray-700"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${
                isProjectsActive
                  ? "bg-white px-4 py-1 rounded-full text-gray-700"
                  : ""
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
