import Navigation from "@/components/home/Navigation";
import DesignsCard from "@/components/projects/DesignsCard";
import SideNav from "@/components/projects/SideNav";
import { designs } from "@/projects";
import React from "react";

const page = () => {
  return (
    <main className="px-8 bg-[#0d0c0d] h-full">
      <Navigation isProjectsActive={true} />
      <div className="flex flex-col sm:flex-row">
        <SideNav isDesign={true} />
        <div className="flex flex-col gap-8">
          {designs.map((project) => (
            <DesignsCard
              key={project.id}
              id={project.id}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              finishedDate={project.finishedDate}
              projectImage={project.projectImage}
              status={project.status}
              isDeployed={project.isDeployed}
              type={project.type}
              type2={project.type2}
              projectUrl={project.projectUrl}
              techs={project.tools}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
