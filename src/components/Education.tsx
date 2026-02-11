import React from "react";

const Education = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-40 px-4">
      <h2 className="text-4xl font-black mb-12 flex items-center">
        <span className="w-12 h-12 bg-black mr-4 block"></span>
        EDUCATION
      </h2>

      <div className="relative bg-white border-4 border-black p-8 shadow-neobrutalism hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="text-2xl font-black uppercase">
            Politeknik Negeri Semarang
          </h3>
          <span className="bg-cyber-lime border-2 border-black px-3 py-1 font-bold text-sm mt-2 md:mt-0">
            2020 - 2024
          </span>
        </div>
        <p className="text-xl font-bold mb-2">
          Diploma in Informatics Engineering
        </p>
        <p className="text-lg">
          GPA: <span className="bg-black text-white px-2 font-bold">3.77</span>{" "}
          / 4.00
        </p>
      </div>
    </section>
  );
};

export default Education;
