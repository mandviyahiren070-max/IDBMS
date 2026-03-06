import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-brand-dark">
      {/* Top-Right Blue Glow */}
      <div
        className="absolute rounded-full bg-brand-blue pointer-events-none z-10 
                   w-[300px] h-[300px] -top-[150px] -right-[100px] blur-[80px] opacity-60
                   sm:w-[500px] sm:h-[500px] sm:-top-[300px] sm:-right-[200px] sm:blur-[100px] sm:opacity-70
                   lg:w-[900px] lg:h-[900px] lg:-top-[650px] lg:-right-[450px] lg:blur-[180px] lg:opacity-85"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default MainLayout;
