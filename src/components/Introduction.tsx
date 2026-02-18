import React from "react";

const Introduction = () => {
  return (
    <header className="mb-40 mt-12 text-center w-full max-w-4xl mx-auto px-4 relative">
      <div className="relative inline-block mb-6 pt-12 md:pt-0">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter relative z-10">
          Riski Dafa Setyawan
        </h1>
        <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-6 bg-cyber-lime -z-0 transform -rotate-1"></div>
      </div>

      <div className="mb-8">
        <p className="text-xl md:text-2xl font-bold bg-white inline-block px-6 py-3 border-4 border-black shadow-neobrutalism transform rotate-1">
          Frontend Specialist & Backend Powerhouse
        </p>
      </div>

      <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
        Building high-performance, scalable web applications with a focus on
        <span className="bg-cyber-orange px-1 mx-1 border-2 border-black text-white">
          UX excellence
        </span>
        and clean architecture.
      </p>

      <div className="flex justify-center flex-wrap gap-6 mt-10">
        <a
          href="https://github.com/dafariski77"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg border-4 border-black bg-cyber-lime px-8 py-3 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/rskdafa"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg border-4 border-black bg-cyber-orange px-8 py-3 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
        >
          LINKEDIN
        </a>
        <a
          href="/CV_Riski Dafa Setyawan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg border-4 border-black bg-white px-8 py-3 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
        >
          RESUME
        </a>
      </div>
    </header>
  );
};

export default Introduction;
