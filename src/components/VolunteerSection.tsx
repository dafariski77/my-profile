import React from "react";

const VolunteerSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-24">
      <h2 className="text-4xl font-black mb-12 text-center">
        <span className="border-b-4 border-black bg-cyber-lime px-4 py-1 transform -rotate-1 inline-block">
          COMMUNITY & IMPACT
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* GDSC Card */}
        <div className="group relative">
          <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
          <div className="relative bg-white border-4 border-black p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neobrutalism transition-all duration-200 h-full">
            <div className="mb-6">
              <span className="bg-blue-600 text-white font-black px-2 py-1 text-sm">
                GDSC
              </span>
            </div>
            <h3 className="text-3xl font-black mb-2 uppercase">
              Google Developer Student Clubs
            </h3>
            <p className="font-bold mb-4 text-cyber-orange">
              Core Team & Curriculum Developer
            </p>
            <p className="text-lg leading-relaxed">
              Designed and delivered technical curriculum for{" "}
              <strong>500+ students</strong>. Speaker at multiple "Study Jams"
              focused on Web Development fundamentals and Cloud Computing
              concepts.
            </p>
          </div>
        </div>

        {/* Mentorship Card */}
        <div className="group relative">
          <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
          <div className="relative bg-white border-4 border-black p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neobrutalism transition-all duration-200 h-full">
            <div className="mb-6">
              <span className="bg-purple-600 text-white font-black px-2 py-1 text-sm">
                MENTORSHIP
              </span>
            </div>
            <h3 className="text-3xl font-black mb-2 uppercase">
              Tech Mentorship
            </h3>
            <p className="font-bold mb-4 text-cyber-lime">
              Intern Guide & Code Reviewer
            </p>
            <p className="text-lg leading-relaxed">
              Actively mentoring interns at PT. Data Andalan Utama, enforcing{" "}
              <strong>Clean Code</strong> principles and best practices in
              React/Next.js ecosystem. Conducting weekly code reviews to ensure
              maintainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
