import React from "react";

const Logo = () => {
  return (
    <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
      <div className="relative group">
        <div className="absolute top-1 left-1 w-full h-full bg-black"></div>
        <div className="relative bg-cyber-lime border-4 border-black px-4 py-2 font-black text-2xl md:text-3xl tracking-tighter shadow-neobrutalism group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-none transition-all duration-200 cursor-pointer select-none">
          RDS
        </div>
      </div>
    </div>
  );
};

export default Logo;
