import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = ({ openModal }) => {
  return (
    <section id="#herosection" className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Empower Your Business
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}with Easy-Dashy
        </span>
      </h1>

      {/* Description */}
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Easy-Dashy puts you in control with a fully customizable dashboard 
        tailored to your business needs. Track sales, 
        manage inventory, analyze customer behavior, 
        and stay ahead with real-time insights—all in 
        one place.
      </p>

      {/* Buttons */}
      <div className="flex justify-center my-10">
        <button
          onClick={() => openModal("createAccount")} // This triggers the "Create Account" modal
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start For Free
        </button>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Documentation
        </a>
      </div>

      {/* Video Section */}
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4"/>
          Your Browser Does Not Support The Video Tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4"/>
          Your Browser Does Not Support The Video Tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
