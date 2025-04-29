import React from "react";
import Image from "next/image";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div className="mt-24" id="about">
      <p className="text-center text-gray-500">Get To Know More</p>
      <h1 className="text-center text-5xl">About Me</h1>
      <div className="m-4 md:m-16 grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <Image
          src="/profile.jpg"
          alt="profile"
          width={250}
          height={250}
          className="rounded-2xl hidden md:block"
        />
        <div className="text-center md:grid md:grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border-1 md:py-4 md:px-8 rounded-2xl">
              <div className="justify-center flex">
                <BriefcaseIcon className="size-8" />
              </div>
              <h1 className="md:text-xl font-bold">Experience</h1>
              <p className="text-gray-400">3 months internship</p>
              <p className="text-gray-400">at RIIT Company</p>
              <p className="text-gray-400">Developer position</p>
            </div>
            <div className="border-1 md:py-4 md:px-8 rounded-2xl">
              <div className="justify-center flex">
                <AcademicCapIcon className="size-8" />
              </div>
              <h1 className="md:text-xl font-bold">Education</h1>
              <p className="text-gray-400">B.Sc. (Computer Science)</p>
              <p className="text-gray-400">(pending)</p>
            </div>
          </div>
          <p className="text-pretty">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            iusto explicabo maxime blanditiis quos repellendus fuga, ducimus
            laudantium ipsam obcaecati, cum eum numquam dolorum assumenda autem
            quidem ratione hic Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur nemo voluptatem non eius provident.
            Repellat odit sapiente molestiae ad architecto atque officiis ex
            aspernatur, ab culpa delectus sequi ipsa cupiditate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
