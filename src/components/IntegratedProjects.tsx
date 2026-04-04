"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

export interface ProjectData {
  title: string;
  role: string;
  date: string;
  desc: string;
  longDesc?: string;
  points: string[];
  tech: string[];
  color: string;
}

const projects: ProjectData[] = [
  {
    title: "FISIMATE",
    role: "Fullstack Web Developer",
    date: "Feb 2024 – Jul 2024",
    desc: "A physics learning platform with interactive simulations and Gemini AI content generation.",
    longDesc: "FISIMATE is a physics learning platform with interactive simulation and content generation features to increase interest in learning for high school students. One of the excellent features on the web admin for teachers is generating questions using Gemini API.",
    points: [
      "Creating API for frontend mobile and web admin using Express.js and Prisma ORM.",
      "Creating a web admin frontend using Next.js and Tailwind CSS.",
      "Integrating the API using Axios and Tanstack Query.",
      "Perform API deployment, and Frontend web admin on GCP.",
      "Create a pipeline for Continuous Deployment using Cloud Build."
    ],
    tech: ["Express.js", "Next.js", "Prisma", "Gemini AI", "GCP", "Cloud Build", "Tailwind CSS", "Axios", "Tanstack Query"],
    color: "bg-cyber-lime",
  },
  {
    title: "Hear4U",
    role: "Fullstack Web Developer",
    date: "May 2024 – Jun 2024",
    desc: "An AI-powered application helping deaf individuals recognize environmental sounds.",
    longDesc: "Hear4U is an application that is used to help deaf people recognize the sounds around them. The tasks performed by me in developing this application are as follows:",
    points: [
      "Creating APIs for authentication and articles using Hapi.js and JWT.",
      "Create API for Machine Learning model deployment using FastAPI.",
      "Creating Frontend website for landing page and admin using Next.js and Tailwind CSS.",
      "Integrating the API using Axios and Tanstack Query.",
      "Deploy API, Model API, and Frontend web on GCP.",
      "Create a pipeline for Continuous Deployment using Cloud Build."
    ],
    tech: ["Hapi.js", "FastAPI", "Next.js", "GCP", "Cloud Build", "Axios", "Tanstack Query", "JWT"],
    color: "bg-cyber-orange",
  },
  {
    title: "Connect Ticket",
    role: "Fullstack Web Developer",
    date: "Jun 2023 – Jul 2023",
    desc: "A high-performance online event ticket booking platform.",
    longDesc: "Connect Ticket is a website for booking event tickets online. This project is the final assignment in the web framework course. In this project, my contribution is as follows:",
    points: [
      "Creating API using Laravel.",
      "Creating a web frontend using Next.js and Chakra UI.",
      "Integrating the API using Axios and Tanstack Query."
    ],
    tech: ["Laravel", "Next.js", "Chakra UI", "Tanstack Query", "Axios"],
    color: "bg-white",
  },
];

const IntegratedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-40">
      <h2 className="text-4xl font-black mb-8 border-b-4 border-black inline-block bg-cyber-orange px-2 transform rotate-1">
        INTEGRATED PROJECTS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedProject(project)}
            className={`${project.color} border-4 border-black p-5 shadow-neobrutalism flex flex-col hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 h-full relative group text-left w-full cursor-pointer`}
          >
            <div className="grow w-full">
              <div className="flex justify-between items-start mb-2 pr-6">
                <h3 className="text-2xl font-black uppercase leading-tight">
                  {project.title}
                </h3>
              </div>
              <div className="mb-2">
                <span className="text-[10px] font-black bg-black text-white px-1.5 py-0.5 inline-block mb-1">
                  {project.date}
                </span>
                <br />
                <p className="text-xs font-bold border-b-2 border-black inline-block pb-0.5">
                  {project.role}
                </p>
              </div>

              <p className="text-sm font-medium mb-4 leading-snug">
                {project.desc}
              </p>

              <div className="mt-4 pt-2">
                 <span className="text-xs font-black uppercase underline decoration-2 underline-offset-4 pointer-events-none group-hover:text-amber-900 transition-colors">
                   View Details
                 </span>
              </div>
            </div>

            <ExternalLink className="absolute top-5 right-5 w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </button>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleBackdropClick}
        >
          <div 
            className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto border-4 border-black shadow-neobrutalism relative animate-in fade-in zoom-in duration-200 ${selectedProject.color}`}
          >
            <div className="sticky top-0 right-0 p-4 flex justify-end z-10 pointer-events-none mb-[-60px]">
              <button 
                onClick={() => setSelectedProject(null)}
                className="pointer-events-auto bg-black text-white p-2 hover:scale-110 hover:rotate-6 transition-transform border-2 border-white cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 md:p-10 pt-16">
              <div className="mb-6 border-b-4 border-black pb-4">
                <h3 className="text-3xl md:text-5xl font-black uppercase leading-none mb-4">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-black bg-black text-white px-2 py-1">
                    {selectedProject.date}
                  </span>
                  <span className="text-sm font-black border-2 border-black bg-white px-2 py-1">
                    {selectedProject.role}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-black mb-3 bg-white inline-block px-2 border-2 border-black transform -rotate-1">
                  ABOUT THE PROJECT
                </h4>
                <p className="text-base font-medium leading-relaxed bg-white/80 p-5 border-2 border-black">
                  {selectedProject.longDesc || selectedProject.desc}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-black mb-3 bg-white inline-block px-2 border-2 border-black transform rotate-1">
                  KEY CONTRIBUTIONS
                </h4>
                <ul className="space-y-3 bg-white/80 p-6 border-2 border-black">
                  {selectedProject.points.map((point, i) => (
                    <li key={i} className="flex items-start text-base font-medium leading-relaxed">
                      <span className="inline-block w-2.5 h-2.5 bg-black mt-2 mr-3 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-black mb-3 bg-white inline-block px-2 border-2 border-black transform -rotate-1">
                  TECHNOLOGIES USED
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm uppercase font-bold border-2 border-black px-3 py-1.5 bg-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IntegratedProjects;
