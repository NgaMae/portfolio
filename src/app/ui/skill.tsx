import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Skill = () => {
  return (
    <div className="pt-24" id="skills">
      <p className="text-center text-gray-500">Explore My</p>
      <h1 className="text-center text-5xl mb-12">Experience</h1>
      <p className="space-y-4 text-justify m-8 md:mx-24 max-w-4xl mx-auto text-gray-300">
        During my 3-month internship (28th April, 2025 - 28th July, 2025) at{" "}
        <a
          href="https://www.ri-institute.com/"
          target="_blank"
          className="text-blue-500 underline hover:text-blue-700"
        >
          RI IT Company
        </a>
        , I gained hands-on experience developing real-world features such as
        forget/reset password, a kitchen display system, and daily sales reports
        for an industry-ready POS project using Laravel. I also developed an{" "}
        <a
          href="https://organic.advtechsolution-mm.com/"
          target="_blank"
          className="text-blue-500 underline hover:text-blue-700"
        >
          organic store website
        </a>{" "}
        with WordPress for the{" "}
        <a
          href="https://www.advtechsolution-mm.com/"
          target="_blank"
          className="text-blue-500 underline hover:text-blue-700"
        >
          ATS department
        </a>{" "}
        of RI IT Company.
      </p>
      <div className="grid min-[1250px]:grid-cols-2 gap-8 md:mx-24 mx-8">
        <div className="border-2 border-white p-4 rounded-4xl">
          <h1 className="text-gray-500 bold text-xl text-center mb-4">
            Frontend Development
          </h1>
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">React</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Tailwind</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Bootstrap</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Next.js</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">WordPress</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Typescript</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-white p-4 rounded-4xl">
          <h1 className="text-gray-500 bold text-xl text-center mb-4">
            Backend Development
          </h1>
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Node.js</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">PHP</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Laravel</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Express</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">MySQL</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">MongoDB</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
