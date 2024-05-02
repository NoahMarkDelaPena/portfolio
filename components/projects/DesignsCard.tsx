import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface DesignsCardProps {
  id?: number;
  projectName?: string;
  projectDescription?: string;
  status?: string;
  isDeployed?: boolean;
  projectImage?: string;
  projectUrl?: string;
  type?: string;
  type2?: string;
  finishedDate?: string;
  techs?: string;
  coDev1?: string;
  coDev2?: string;
}

const DesignsCard: FC<DesignsCardProps> = ({
  id,
  projectName,
  projectDescription,
  status,
  isDeployed,
  projectImage,
  projectUrl,
  type,
  type2,
  finishedDate,
  techs,
  coDev1,
  coDev2,
}) => {
  return (
    <div className="text-white w-full relative">
      <div className="pt-8 px-6 lg:px-12">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">{projectName}</h1>{" "}
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 bg-white text-black p-6">
          <div className="flex flex-col">
            <span className="text-lg">{finishedDate}</span>
            <span className="font-bold">{projectName}</span>
            <Image
              alt="Album Art"
              className="mt-4 aspect-auto object-cover w-full h-full"
              height="500"
              src={projectImage as string}
              width="500"
            />
          </div>
        </div>
        <div className="lg:w-1/2 px-6 lg:px-12 py-8">
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-lg">
              Description ({type}
              {type2 && `, ${type2}`})
            </span>

            <Link
              className="text-sm text-[#009688] hover:text-[#00796b]"
              href="#"
            >
              View Detail →
            </Link>
          </div>
          <div className="mt-4">
            <p>Status: {status}</p>
            {/* <p>Deployed: {isDeployed === true ? "Deployed" : "Not Yet"}</p> */}
            <p>Tools Used: {techs}</p>
            {coDev1 ? (
              <p>
                Co-Developers: {coDev1} & {coDev2}
              </p>
            ) : (
              ""
            )}
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
              {projectDescription}
            </h4>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-[124px] absolute bottom-0 right-0 text-gray-500">
              {id}
            </h1>
          </div>
          {isDeployed === true && type != "Mobile" && (
            <Link href={projectUrl as string} target="_blank">
              <button className="bg-white text-gray-700 hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium h-10 px-4 py-2 my-12">
                View Live
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignsCard;
