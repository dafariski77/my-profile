import React from "react";

const ExperienceTimeline = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-20 px-4">
      <h2 className="text-4xl font-black mb-12 text-right border-b-4 border-black inline-block bg-cyber-lime px-2 transform rotate-1 ml-auto block">
        FRONTEND EXPEDITION
      </h2>

      <div className="relative border-l-4 border-black ml-4 md:ml-10 pl-8 pb-10">
        <div className="absolute -left-3 top-0 w-6 h-6 bg-cyber-orange border-4 border-black"></div>

        <div className="bg-white border-4 border-black p-6 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
          <div className="flex flex-col md:flex-row justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-black uppercase">
                PT. Data Andalan Utama
              </h3>
              <p className="text-sm font-bold bg-cyber-lime px-2 py-1 inline-block border-2 border-black mt-1">
                Frontend Specialist
              </p>
            </div>
            <span className="text-xs font-black mt-2 md:mt-0 bg-black text-white px-2 py-1">
              2023 - Present
            </span>
          </div>

          <p className="mb-4 text-lg font-medium">
            Spearheaded the frontend architecture for{" "}
            <strong>10+ enterprise-grade applications</strong>, transitioning
            legacy systems to modern Next.js and Expo environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-3 border-2 border-black">
              <h4 className="font-bold text-sm mb-1 uppercase">
                Web (Next.js)
              </h4>
              <p className="text-xs">
                Built scalable dashboards with 50+ unique views, optimizing
                LCP/CLS metrics to &#60;0.1s.
              </p>
            </div>
            <div className="bg-gray-100 p-3 border-2 border-black">
              <h4 className="font-bold text-sm mb-1 uppercase">
                Mobile (Expo)
              </h4>
              <p className="text-xs">
                Delivered cross-platform apps with 99% code sharing, integrating
                native modules for camera/GPS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
