import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url('/profilepic.png')] bg-cover"
      style={{
        backgroundSize: "35%",
        backgroundPosition: "left 100px top 130px",
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 min-h-screen items-center">
        {/* Left placeholder (hidden on smaller screens) */}
        <div className="hidden lg:block"></div>

        {/* Hero Text Section */}
        <div className="flex flex-col justify-center items-center lg:items-start mt-12 lg:mt-0 px-4">
          <div className="text-center lg:text-left">
            <p className="text-5xl sm:text-5xl md:text-7xl font-bold leading-tight">
              I'm
            </p>
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold">Adeen</p>
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold">Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
