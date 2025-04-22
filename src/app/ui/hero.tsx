import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-20 h-[80vh] flex flex-col lg:flex-row justify-center lg:space-x-10">
      <div className="content-center self-center">
        <Image
          alt="profile"
          src="/profile.jpg"
          width="300"
          height="300"
          className="rounded-full aspect-square object-cover"
        />
      </div>
      <div className="content-center text-center text w-fit self-center">
        <p className="text-left text-gray-500">Hello&#44; I&apos;m</p>
        <h1 className="font-bold text-5xl my-3">San Min Aung</h1>
        <p className="font-bold text-3xl text-gray-400 mb-3">
          Fullstack Developer
        </p>
        <div className="space-x-5 select-none">
          <button
            tabIndex={0}
            className="border-2 rounded-2xl p-2 hover:bg-secondary hover:text-primary hover:border-2 hover:border-secondary"
          >
            Download CV
          </button>
          <button
            tabIndex={0}
            className="rounded-2xl p-2 bg-secondary text-primary font-bold border-2 border-secondary hover:bg-primary hover:text-secondary hover:border-secondary hover:border-2"
          >
            Contact Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
