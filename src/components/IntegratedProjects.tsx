import React from "react";

const projects = [
  {
    title: "FISIMATE",
    role: "Backend & AI Integration",
    desc: "Smart fish feeding system with AI-powered analytics.",
    tech: ["Express.js", "Gemini AI", "IoT"],
    color: "bg-cyber-lime",
  },
  {
    title: "Hear4U",
    role: "Cloud & ML Backend",
    desc: "Mental health app bridging users with professionals/AI.",
    tech: ["Hapi.js", "FastAPI", "GCP"],
    color: "bg-cyber-orange",
  },
  {
    title: "Connect Ticket",
    role: "Fullstack Developer",
    desc: "Event ticketing platform with real-time seat booking.",
    tech: ["Laravel", "MySQL", "Redis"],
    color: "bg-white",
  },
];

const IntegratedProjects = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-20">
      <h2 className="text-4xl font-black mb-8 border-b-4 border-black inline-block bg-cyber-orange px-2 transform rotate-1">
        INTEGRATED PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`${project.color} border-4 border-black p-5 shadow-neobrutalism flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200`}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegratedProjects;
