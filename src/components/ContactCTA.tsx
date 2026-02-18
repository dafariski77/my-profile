import React from "react";
import { StarIcon, ScribbleUnderline, SpiralIcon } from "./VectorDecorations";

const ContactCTA = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-40 px-4 text-center">
      <div className="relative border-4 border-black bg-cyber-lime p-8 md:p-12 shadow-neobrutalism transform rotate-1 hover:rotate-0 transition-all duration-300">
        <StarIcon className="absolute -top-6 -left-6 w-12 h-12 text-black animate-spin-slow" />
        <StarIcon className="absolute -bottom-6 -right-6 w-12 h-12 text-black animate-spin-slow" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
            READY TO BUILD
            <br />
            <span className="relative inline-block">
              SOMETHING EPIC?
              <ScribbleUnderline className="absolute -bottom-8 md:-bottom-12 left-0 w-full text-black" />
            </span>
          </h2>

          <p className="text-xl font-bold mb-8 max-w-2xl mx-auto">
            Let&apos;s turn your ambitious ideas into reality. Open for
            freelance projects and collaborative opportunities.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:dafariski555@gmail.com"
              className="font-black text-xl border-4 border-black bg-white px-8 py-4 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 uppercase"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/rskdafa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-xl border-4 border-black bg-cyber-orange px-8 py-4 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 uppercase"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <SpiralIcon className="absolute top-1/2 left-4 w-24 h-24 text-black opacity-10 -translate-y-1/2 pointer-events-none" />
        <SpiralIcon className="absolute top-1/2 right-4 w-24 h-24 text-black opacity-10 -translate-y-1/2 pointer-events-none transform scale-x-[-1]" />
      </div>
    </section>
  );
};

export default ContactCTA;
