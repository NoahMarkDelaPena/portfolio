import { projects } from "@/projects";
import React, { FC } from "react";
import ProjectCard from "../projects/ProjectCard";
import Link from "next/link";

interface ProjectsSectionProps {}

const ProjectsSection: FC<ProjectsSectionProps> = () => {
  return (
    <section className="min-h-screen flex justify-center items-center flex-col">
      <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-24 text-white mb-8">
        Projects I have finished
      </h2>
      <div className="flex flex-col gap-8">
        {projects
          .filter((project) => project.type === "Collaboration")
          .slice(0, 1)
          .map((project) => (
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
              coDev1={project.coDev1}
              coDev2={project.coDev2}
            />
          ))}
      </div>
      <Link href="/projects">
        <button className="bg-white text-gray-700 hover:bg-gray-100 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 my-24 hover:w-48 transition-all duration-300">
          View All -&gt;
        </button>
      </Link>
    </section>
  );
};

export default ProjectsSection;
