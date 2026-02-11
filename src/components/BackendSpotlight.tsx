import React from "react";

const BackendSpotlight = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-16 px-4">
      <h2 className="text-4xl font-black mb-8 border-b-4 border-black inline-block bg-cyber-lime px-2 transform -rotate-1">
        BACKEND MASTERY
      </h2>

      <div className="bg-white border-4 border-black p-6 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold uppercase">
              PT. Adma Digital Solusi
            </h3>
            <p className="text-sm font-bold bg-cyber-orange px-2 py-1 inline-block border-2 border-black mt-1">
              Multi-Channel Marketplace System
            </p>
          </div>
          <div className="mt-2 md:mt-0 flex gap-2">
            {["Laravel", "MySQL", "REST API"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-bold border-2 border-black px-2 py-1 bg-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="mb-6 text-lg font-medium leading-relaxed">
          Lead the development of a robust backend system capable of handling
          thousands of transactions. Designed a normalized database schema to
          unify product and order data across multiple platforms (Lazada,
          Shopee, TikTok Shop), ensuring 99.9% data consistency.
        </p>

        <div className="border-t-4 border-black pt-4">
          <h4 className="font-black text-lg mb-2">
            Key Achievement: Database Architecture
          </h4>
          <div className="bg-gray-100 p-4 border-2 border-black font-mono text-sm">
            Successfully unified conflicting data structures from 3+ major
            e-commerce APIs into a single, query-optimized relational schema
            using Laravel Migrations.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendSpotlight;
