import React from "react";
import {
  StarIcon,
  SparkleIcon,
  ScribbleUnderline,
  SpiralIcon,
} from "./VectorDecorations";

const ExperienceTimeline = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-40 px-4">
      <h2 className="text-4xl font-black mb-12 text-right border-b-4 border-black inline-block bg-cyber-lime px-2 transform rotate-1 ml-auto block">
        EXPEDITION
      </h2>

      <div className="relative border-l-4 border-black ml-4 md:ml-10 pl-8 pb-10">
        <div className="relative mb-12">
          <div className="absolute -left-11 top-0 w-6 h-6 bg-cyber-orange border-4 border-black"></div>
          <div className="bg-white border-4 border-black p-6 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 relative overflow-hidden">
            <SparkleIcon className="absolute top-2 right-2 w-8 h-8 text-cyber-lime opacity-50 pointer-events-none" />
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-black uppercase flex items-center gap-2">
                  Kawan Kode <StarIcon className="w-6 h-6 text-cyber-orange" />
                </h3>
                <p className="text-sm font-bold bg-cyber-lime px-2 py-1 inline-block border-2 border-black mt-1">
                  Fullstack Developer
                </p>
              </div>
              <span className="text-xs font-black mt-2 md:mt-0 bg-black text-white px-2 py-1">
                Jan 2026 - Present
              </span>
            </div>

            <p className="mb-4 text-lg font-medium">
              Building robust web applications using <strong>Laravel</strong>{" "}
              and <strong>Filament</strong>, managing cloud infrastructure on{" "}
              <strong>AWS</strong>, and automating workflows with{" "}
              <strong>GitHub Actions</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-3 border-2 border-black">
                <h4 className="font-bold text-sm mb-1 uppercase">
                  Backend & DevOps
                </h4>
                <p className="text-xs">
                  Architecting scalable APIs with Laravel and implementing CI/CD
                  pipelines for seamless deployment.
                </p>
              </div>
              <div className="bg-gray-100 p-3 border-2 border-black">
                <h4 className="font-bold text-sm mb-1 uppercase">
                  Cloud Infrastructure
                </h4>
                <p className="text-xs">
                  Managing AWS resources including EC2 and S3 for high
                  availability and performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-12">
          <div className="absolute -left-11 top-0 w-6 h-6 bg-cyber-orange border-4 border-black"></div>
          <div className="bg-white border-4 border-black p-6 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 relative overflow-hidden">
            <SparkleIcon className="absolute bottom-2 right-2 w-10 h-10 text-cyber-orange opacity-30 pointer-events-none" />
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-black uppercase">
                  PT. Data Andalan Utama
                </h3>
                <p className="text-sm font-bold bg-cyber-lime px-2 py-1 inline-block border-2 border-black mt-1">
                  Frontend Developer
                </p>
              </div>
              <span className="text-xs font-black mt-2 md:mt-0 bg-black text-white px-2 py-1">
                Sep 2024 - Present
              </span>
            </div>

            <p className="mb-4 text-base font-medium">
              Worked on <strong>10+ projects</strong>, including applications
              built from scratch and feature development on existing systems.
              Developed systems for marketplaces, membership platforms, and
              payment gateways.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-3 border-2 border-black">
                <h4 className="font-bold text-sm mb-1 uppercase">
                  Frontend Development
                </h4>
                <p className="text-xs">
                  Built web/mobile apps using <strong>React</strong>,{" "}
                  <strong>Next.js</strong>, and <strong>Expo</strong>. Converted
                  Figma designs with Tailwind CSS and Shadcn UI.
                </p>
              </div>
              <div className="bg-gray-100 p-3 border-2 border-black">
                <h4 className="font-bold text-sm mb-1 uppercase">
                  State & Performance
                </h4>
                <p className="text-xs">
                  Implemented robust state management using{" "}
                  <strong>XState</strong> and <strong>TanStack Query</strong>.
                  Researched and adopted new tools to improve application
                  performance and workflow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-11 top-0 w-6 h-6 bg-cyber-orange border-4 border-black"></div>
          <div className="bg-white border-4 border-black p-6 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-black uppercase">
                  PT. Adma Digital Solusi
                </h3>
                <div className="relative inline-block mt-1">
                  <p className="text-sm font-bold bg-cyber-orange px-2 py-1 inline-block border-2 border-black relative z-10">
                    BackEnd Engineer (Internship)
                  </p>
                  <ScribbleUnderline className="absolute -bottom-2 left-0 w-full text-black z-0" />
                </div>
              </div>
              <span className="text-xs font-black mt-2 md:mt-0 bg-black text-white px-2 py-1">
                Aug 2023 - Dec 2023
              </span>
            </div>

            <p className="mb-4 text-base font-medium">
              Developed a <strong>Multi-Channel Marketplace Integration</strong>{" "}
              Web App from scratch. Designed database schemas compatible with
              various marketplace API responses (e.g., Lazada).
            </p>

            <div className="border-t-4 border-black pt-4 relative mt-4">
              <SpiralIcon className="absolute -top-6 -right-4 w-12 h-12 text-cyber-lime opacity-80 transform rotate-12 pointer-events-none" />
              <h4 className="font-black text-sm mb-2 uppercase">
                Key Contributions
              </h4>
              <div className="bg-gray-100 p-3 border-2 border-black font-mono text-xs">
                Provided APIs for frontend engineers, deployed applications to
                server, and collaborated in an Agile team using{" "}
                <strong>Laravel</strong> best practices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
