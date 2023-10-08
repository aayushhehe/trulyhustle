import React from "react";
import Navbar from "../components/Navbar";
import "./Landing.css";
import Bg from "../components/HeroBg";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] h-[100%] absolute z-[-1] blur-[100px] top-0 left-0">
        <Bg />
      </div>
      <section className="px-[10%] flex justify-center items-center h-[90vh] flex-col">
        <h1 className="text-[3rem] pb-6">
          Be <span className="font-semibold">Bold</span>, Collaborative and
          Innovative
        </h1>
        <button className="py-4 px-16 text-xl homeBtn">Be a Hustler</button>
        <p className="text-[0.8rem] pt-2">
          Already have an account?{" "}
          <button className="underline">Sign in</button>
        </p>
      </section>
      <section className="px-[10%] h-[100vh]">
        <h1 className="text-[3rem]">
          Welcome to <span className="font-semibold">Truly Hustle</span>
        </h1>
        <p>
          At Truly Hustle, we provide a vibrant and comfortable workspace
          environment for like-minded individuals to come together, collaborate,
          and amplify their skills. Our spaces are designed to encourage
          creativity, productivity, and foster brilliant connections.
        </p>
      </section>
    </div>
  );
};

export default Landing;
