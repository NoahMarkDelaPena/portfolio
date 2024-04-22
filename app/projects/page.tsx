import Navigation from "@/components/home/Navigation";
import ProjectCard from "@/components/projects/ProjectCard";
import SideNav from "@/components/projects/SideNav";
import { projects } from "@/projects";
import React, { FC } from "react";

interface ProjectsProps {}

const page: FC<ProjectsProps> = () => {
  return (
    <main className="px-8 bg-[#0d0c0d] h-full">
      <Navigation isProjectsActive={true} />
      <div className="flex flex-col sm:flex-row">
        <SideNav isAll={true} />
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              finishedDate={project.finishedDate}
              projectImage={project.projectImage}
              status={project.status}
              isDeployed={project.isDeployed}
              type={project.type}
              projectUrl={project.projectUrl}
              techs={project.techs}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
