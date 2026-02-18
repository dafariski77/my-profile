import Link from "next/link";
import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FISIMATE",
    role: "Fullstack Web Developer",
    date: "Feb 2024 – Jul 2024",
    desc: "A physics learning platform with interactive simulations and Gemini AI content generation.",
    points: [
      "Built a robust Express.js backend & Next.js admin panel with Gemini AI integration.",
      "Implemented complex state management using TanStack Query & Prisma ORM.",
      "Automated GCP deployments via Cloud Build CI/CD pipelines.",
    ],
    tech: ["Express.js", "Next.js", "Prisma", "Gemini AI", "GCP"],
    color: "bg-cyber-lime",
    href: "#",
  },
  {
    title: "Hear4U",
    role: "Fullstack Web Developer",
    date: "May 2024 – Jun 2024",
    desc: "An AI-powered application helping deaf individuals recognize environmental sounds.",
    points: [
      "Developed microservices with Hapi.js (Auth) & FastAPI (ML Model).",
      "Built accessible Next.js interfaces for users & administrators.",
      "Deployed full-stack infrastructure on GCP with automated workflows.",
    ],
    tech: ["Hapi.js", "FastAPI", "Next.js", "GCP", "Cloud Build"],
    color: "bg-cyber-orange",
    href: "#",
  },
  {
    title: "Connect Ticket",
    role: "Fullstack Web Developer",
    date: "Jun 2023 – Jul 2023",
    desc: "A high-performance online event ticket booking platform.",
    points: [
      "Engineered a scalable Laravel API for high-traffic event booking.",
      "Created a responsive Next.js frontend with Chakra UI components.",
      "Optimized data fetching performance using TanStack Query.",
    ],
    tech: ["Laravel", "Next.js", "Chakra UI", "Tanstack Query"],
    color: "bg-white",
    href: "#",
  },
];

const IntegratedProjects = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-40">
      <h2 className="text-4xl font-black mb-8 border-b-4 border-black inline-block bg-cyber-orange px-2 transform rotate-1">
        INTEGRATED PROJECTS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Link
            key={idx}
            href={project.href}
            target="_blank"
            className={`${project.color} border-4 border-black p-5 shadow-neobrutalism flex flex-col hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 h-full relative group`}
          >
            <div className="grow">
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

              <ul className="list-disc list-inside text-xs mb-6 space-y-1 font-medium text-gray-800">
                {project.points.map((point, i) => (
                  <li key={i} className="leading-relaxed pl-1 -indent-1 ml-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t-2 border-black/10">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase font-bold border-2 border-black px-1.5 py-0.5 bg-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <ExternalLink className="absolute top-5 right-5 w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default IntegratedProjects;
