import Link from "next/link";
import React, { FC } from "react";

interface SideNavProps {
  isAll?: boolean;
  isWeb?: boolean;
  isMobile?: boolean;
  isCollaboration?: boolean;
  isDesign?: boolean;
}
const SideNav: FC<SideNavProps> = ({
  isAll,
  isCollaboration,
  isDesign,
  isMobile,
  isWeb,
}) => {
  return (
    <aside className="mt-10 w-[600px] mr-12 border-r-2 pr-4 border-gray-700">
      <ul className="text-white flex flex-col gap-4">
        <li>
          <Link
            href="/projects"
            className={`${
              isAll ? "bg-white px-4 py-1 w-full text-gray-700" : ""
            }`}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            href="/projects/web"
            className={`${
              isWeb ? "bg-white px-4 py-1 rounded-full text-gray-700" : ""
            }`}
          >
            Web Development
          </Link>
        </li>
        {/* <li>
          <Link
            href="/projects/mobile"
            className={`${
              isMobile ? "bg-white px-4 py-1 rounded-full text-gray-700" : ""
            }`}
          >
            Mobile Development
          </Link>
        </li> */}
        <li>
          <Link
            href="/projects/collaboration"
            className={`${
              isCollaboration
                ? "bg-white px-4 py-1 rounded-full text-gray-700"
                : ""
            }`}
          >
            Collaboration
          </Link>
        </li>
        {/* <li>
          <Link
            href="/projects/design"
            className={`${
              isDesign ? "bg-white px-4 py-1 rounded-full text-gray-700" : ""
            }`}
          >
            Design
          </Link>
        </li> */}
      </ul>
    </aside>
  );
};

export default SideNav;
