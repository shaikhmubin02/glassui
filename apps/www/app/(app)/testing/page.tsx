import React from "react";
import EnhancedDotBackground from "@/components/testing";

const HomePage: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      <EnhancedDotBackground />
      <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-black z-10 pointer-events-none dark:text-white'>
        Fuck Microsoft Fuck
      </h1>
    </div>
  );
};

export default HomePage;