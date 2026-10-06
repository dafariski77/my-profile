"use client";

import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "SISTAKU",
    role: "Fullstack Developer",
    date: "2026",
    desc: "A web-based platform for spatial data visualization, slum area management statistics, and budget simulation.",
    longDesc:
      "SISTAKU (Sistem Informasi Sistem Tanpa Kumuh) is a web-based information system designed to present geospatial data, area management statistics, and budget simulations in an integrated manner to support transparency and policy-making.",
    points: [
      "Developed Interactive Geographic Information System (Web GIS).",
      "Built Statistics & Data Analysis Dashboards.",
      "Implemented comprehensive Area Master Data and User Management.",
      "Developed Content Management System (CMS) for media and documentation.",
    ],
    tech: ["Next.js", "Web GIS", "Tailwind CSS", "PostgreSQL"],
    color: "bg-cyber-lime",
  },
  {
    title: "Web Bank Saebo",
    role: "Frontend Developer",
    date: "2025",
    desc: "A landing page for an innovative digital bank featuring an integrated AI Assistant.",
    longDesc:
      "Bank Saebo is a landing page website developed to introduce the brand and services of Bank Saebo. One of its standout features is an AI Assistant integration that functions as a virtual customer service to interactively answer queries and guide users.",
    points: [
      "Built a modern, responsive landing page reflecting a premium digital banking experience.",
      "Integrated AI Assistant for 24/7 automated customer support.",
      "Optimized UI/UX for prospective customers to easily access information.",
    ],
    tech: ["React", "Tailwind CSS", "AI Assistant Integration"],
    color: "bg-cyber-orange",
  },
  {
    title: "CoinSight",
    role: "Fullstack Developer",
    date: "2026",
    desc: "A SaaS Web3 platform to track crypto assets, transaction history, and PnL across multiple wallets.",
    longDesc:
      "CoinSight allows Web3 users to manage their portfolios centrally. The system uses a Microservices architecture and CQRS pattern to separate heavy blockchain synchronization (write) from user dashboard rendering (read), ensuring real-time performance and scalability.",
    points: [
      "Implemented Web3 Authentication using wallet signatures.",
      "Built a real-time portfolio summary dashboard with 360-degree asset visibility.",
      "Engineered an auto-sync mechanism handling RPC rate limits and background data fetching.",
      "Managed Eventual Consistency across PostgreSQL, MongoDB, and Redis using RabbitMQ and BullMQ.",
    ],
    tech: [
      "NestJS",
      "Next.js",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "ethers.js",
      "viem",
    ],
    color: "bg-white",
  },
  {
    title: "Gravity POS",
    role: "Frontend Developer",
    date: "2026",
    desc: "A fast and efficient Point of Sale (POS) web application.",
    longDesc:
      "Gravity POS focuses on a responsive user interface, dynamic shopping cart state management, and seamless integration with a Backend-as-a-Service to process cashier transactions quickly.",
    points: [
      "Developed real-time product catalog and dynamic shopping cart using Pinia.",
      "Implemented seamless checkout process writing to Supabase.",
      "Ensured a highly responsive and fast UI with Tailwind CSS.",
    ],
    tech: ["Nuxt 3", "Pinia", "Tailwind CSS", "Supabase", "PostgreSQL"],
    color: "bg-cyber-lime",
  },
  {
    title: "AndalanSchoolApp",
    role: "Frontend Developer",
    date: "2025",
    desc: "A school management platform digitalizing operations, internal payments, and parent communication.",
    longDesc:
      "Responsible for designing and implementing the frontend of two main modules: the Canteen Management (Cashless POS System) and the Parent Portal, enabling parents to monitor their children's activities and finances.",
    points: [
      "Built a Point of Sale interface for the school canteen with cashless payments.",
      "Developed a Parent Portal dashboard for balance monitoring and transaction history.",
      "Integrated frontend with Frappe Framework backend and handled complex client-side routing.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Router",
      "Tailwind UI",
      "Frappe Framework",
    ],
    color: "bg-cyber-orange",
  },
  {
    title: "Intimulya ERP",
    role: "Frontend Developer",
    date: "2026",
    desc: "A Progressive Web App (PWA) for business management, POS, and inventory tracking.",
    longDesc:
      "Intimulya ERP handles business operations from sales and purchasing to warehouse tracking and CRM. Built with an offline-first architecture to ensure resilience against poor internet connectivity.",
    points: [
      "Developed an offline-first PWA using Serwist and RxDB.",
      "Built complex UI modules for sales, inventory, CRM, and financial billing.",
      "Implemented robust state management using XState and React Query.",
    ],
    tech: [
      "Next.js 16",
      "RxDB",
      "Serwist",
      "Tailwind CSS",
      "XState",
      "React Query",
    ],
    color: "bg-white",
  },
  {
    title: "Tripwe Membership",
    role: "Mobile Developer",
    date: "2025",
    desc: "A cross-platform mobile app supporting the Tripwe mooring service ecosystem.",
    longDesc:
      "Tripwe Mooring is a React Native (Expo) app designed for Android and iOS. It features advanced navigation, real-time location tracking via GPS, and highly optimized data fetching and state management.",
    points: [
      "Built cross-platform interfaces with Tailwind CSS v4 and Expo Router.",
      "Implemented map integrations and GPS location tracking.",
      "Managed complex application states using XState and TanStack Query.",
    ],
    tech: [
      "Expo",
      "React Native",
      "XState",
      "TanStack Query",
      "Tailwind CSS",
      "Zod",
      "Google Maps",
    ],
    color: "bg-cyber-lime",
  },
  {
    title: "FISIMATE",
    role: "Fullstack Web Developer",
    date: "2024",
    desc: "A physics learning platform with interactive simulations and Gemini AI content generation.",
    longDesc:
      "FISIMATE is a physics learning platform with interactive simulation and content generation features to increase interest in learning for high school students. One of the excellent features on the web admin for teachers is generating questions using Gemini API.",
    points: [
      "Creating API for frontend mobile and web admin using Express.js and Prisma ORM.",
      "Creating a web admin frontend using Next.js and Tailwind CSS.",
      "Integrating the API using Axios and Tanstack Query.",
      "Perform API deployment, and Frontend web admin on GCP.",
      "Create a pipeline for Continuous Deployment using Cloud Build.",
    ],
    tech: [
      "Express.js",
      "Next.js",
      "Prisma",
      "Gemini AI",
      "GCP",
      "Cloud Build",
      "Tailwind CSS",
    ],
    color: "bg-cyber-orange",
  },
  {
    title: "Hear4U",
    role: "Cloud & Fullstack Developer",
    date: "2024",
    desc: "An AI-powered application helping deaf individuals recognize environmental sounds.",
    longDesc:
      "Hear4U captures sounds through a microphone and visually displays speech and sound recognition results. My role involved backend architecture, cloud infrastructure, and ML model deployment.",
    points: [
      "Designed backend systems for sound data processing.",
      "Deployed real-time ML AI models to the cloud environment.",
      "Managed GCP cloud infrastructure ensuring scalability and security.",
      "Assisted in integrating the system into the Android (Kotlin) app.",
    ],
    tech: ["Kotlin", "FastAPI", "GCP", "Next.js", "Cloud Build"],
    color: "bg-white",
  },
];

const IntegratedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const colors = ["bg-cyber-lime", "bg-cyber-orange", "bg-white"];
  const sortedProjects = [...projects]
    .sort((a, b) => parseInt(b.date) - parseInt(a.date))
    .map((project, idx) => ({
      ...project,
      color: colors[idx % colors.length],
    }));

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth, scrollLeft } = scrollContainerRef.current;
      // Scroll by one card width (approximated for lg screens) or full width
      const cardWidth = window.innerWidth < 768 ? clientWidth : 450 + 32; // card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
        <h2 className="text-4xl font-black border-b-4 border-black inline-block bg-cyber-orange px-2 transform rotate-1 self-start">
          INTEGRATED PROJECTS
        </h2>

        <div className="flex gap-4 self-end">
          <button
            onClick={() => scroll("left")}
            className="bg-white border-4 border-black p-2 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-8 h-8 font-black" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white border-4 border-black p-2 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="w-8 h-8 font-black" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 pt-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hide scrollbar for webkit browsers with injected styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          ::-webkit-scrollbar { display: none; }
        `,
          }}
        />

        {sortedProjects.map((project, idx) => (
          <div
            key={idx}
            className="w-[85vw] md:w-100 lg:w-100 snap-center shrink-0"
          >
            <button
              onClick={() => setSelectedProject(project)}
              className={`${project.color} border-4 border-black p-6 shadow-neobrutalism flex flex-col hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 h-full relative group text-left w-full cursor-pointer`}
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

              <ExternalLink className="absolute top-5 right-5 w-6 h-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            </button>
          </div>
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
                    <li
                      key={i}
                      className="flex items-start text-base font-medium leading-relaxed"
                    >
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
