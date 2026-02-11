import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      color: "bg-cyber-lime",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "XState",
        "TanStack Query",
        "Expo",
      ],
    },
    {
      title: "BACKEND",
      color: "bg-cyber-orange",
      skills: [
        "Node.js",
        "NestJS",
        "Express",
        "Laravel",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Prisma",
      ],
    },
    {
      title: "CLOUD & TOOLS",
      color: "bg-white",
      skills: [
        "Google Cloud Platform",
        "Docker",
        "Git",
        "CI/CD",
        "Figma",
        "Jira",
      ],
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto mb-24 px-4">
      <h2 className="text-4xl font-black mb-12 text-center decoration-4 underline decoration-cyber-lime underline-offset-8">
        TECHNICAL ARSENAL
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`border-4 border-black p-6 shadow-neobrutalism ${category.color}`}
          >
            <h3 className="text-2xl font-black mb-6 border-b-4 border-black pb-2">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center font-bold text-lg">
                  <span className="w-3 h-3 bg-black mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
