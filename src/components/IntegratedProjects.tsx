import Link from "next/link";
import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FISIMATE",
    role: "AI-Driven Aquaculture Ecosystem",
    desc: "Revolutionizing fish farming with autonomous feeding & real-time analytics.",
    tech: ["Express.js", "Gemini AI", "IoT"],
    color: "bg-cyber-lime",
    href: "#",
  },
  {
    title: "Hear4U",
    role: "Mental Health Bridge",
    desc: "Connecting seamless support systems via AI & professional care.",
    tech: ["Hapi.js", "FastAPI", "GCP"],
    color: "bg-cyber-orange",
    href: "#",
  },
  {
    title: "Connect Ticket",
    role: "High-Performance Ticketing Engine",
    desc: "Handling peak-load access for massive events with zero downtime.",
    tech: ["Laravel", "MySQL", "Redis"],
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Link
            key={idx}
            href={project.href}
            target="_blank"
            className={`${project.color} border-4 border-black p-5 shadow-neobrutalism flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 h-full relative group`}
          >
            <div>
              <h3 className="text-2xl font-black uppercase mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-bold border-b-2 border-black inline-block mb-3 pb-0.5">
                {project.role}
              </p>
              <p className="font-medium mb-4">{project.desc}</p>
            </div>

            <ExternalLink className="absolute top-4 right-4 w-6 h-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-bold border-2 border-black px-1.5 py-0.5 bg-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default IntegratedProjects;
