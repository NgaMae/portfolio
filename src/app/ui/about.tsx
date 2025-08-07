import React from "react";
import Image from "next/image";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div className="pt-24 px-4 md:px-16" id="about">
      <p className="text-center text-gray-500">Get To Know More</p>
      <h1 className="text-center text-5xl font-bold mb-10">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="/profile2.jpg"
            alt="profile"
            width={300}
            height={300}
            className="rounded-2xl hidden md:block"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-base leading-relaxed">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-2xl shadow-sm">
              <div className="flex justify-center mb-2">
                <BriefcaseIcon className="size-8 text-gray-600" />
              </div>
              <h1 className="text-xl font-bold text-center">Experience</h1>
              <p className="text-sm text-gray-500 text-center">
                3 months internship
              </p>
              <p className="text-sm text-gray-500 text-center">
                at RIIT Company
              </p>
              <p className="text-sm text-gray-500 text-center">
                Developer position
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-2xl shadow-sm">
              <div className="flex justify-center mb-2">
                <AcademicCapIcon className="size-8 text-gray-600" />
              </div>
              <h1 className="text-xl font-bold text-center">Education</h1>
              <p className="text-sm text-gray-500 text-center">B.C.Sc</p>
              <p className="text-sm text-gray-500 text-center">
                University of Computer Studies Pyay
              </p>
              <p className="text-sm text-gray-500 text-center">(pending)</p>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-4 text-justify text-gray-300">
            <p>
              I&apos;m a passionate web developer currently completing my
              B.C.Sc. at the University of Computer Studies, Pyay. I specialize
              in building full-stack applications using modern technologies such
              as Laravel, React, Next.js, TailwindCSS, and MySQL/MongoDB.
            </p>
            <p>
              I consider myself a fast learner with strong problem-solving
              skills. I enjoy analyzing complex challenges, breaking them down
              into manageable steps, and delivering effective, elegant
              solutions. I quickly adapt to new tools and technologies, which
              has helped me grow rapidly as a developer — even in high-pressure
              environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
