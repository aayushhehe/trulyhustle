import React from "react";
import hero from "../assets/hero1.png";
const Hero = () => {
  return (
    <div className="flex items-center justify-evenly gap-72  h-[90vh] px-32">
      <div className="flex flex-col gap-6">
        <h1 className="w-[35rem] text-5xl leading-snug font-bold">
          Unleash <span className="text-blue-400">creativity</span> and
          <span className="text-red-500">&#32;teamwork</span> with our
          interactive collaborative whiteboard.
        </h1>
        <button className="reset anim-bg-gradient py-2 w-max bg-white font-medium rounded-[] text-2xl">
          Get Started
        </button>
      </div>
      <div>
        <img src={hero} />
      </div>
    </div>
  );
};

export default Hero;
