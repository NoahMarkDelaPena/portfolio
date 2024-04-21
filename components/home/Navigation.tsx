import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className="flex justify-between items-center border-b-[1px] border-gray-700">
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
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
