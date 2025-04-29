import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Skill = () => {
  return (
    <div className="h-[180vh] mt-24" id="skills">
      <p className="text-center text-gray-500">Explore My</p>
      <h1 className="text-center text-5xl mb-12">Experience</h1>
      <div className="grid min-[1250px]:grid-cols-2 gap-8 md:mx-24 mx-8">
        <div className="border-2 border-white p-4 rounded-4xl">
          <h1 className="text-gray-500 bold text-xl text-center mb-4">
            Frontend Development
          </h1>
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">HTML</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">CSS</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Javascript</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Html</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">HTML</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">HTML</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-white p-4 rounded-4xl">
          <h1 className="text-gray-500 bold text-xl text-center mb-4">
            Frontend Development
          </h1>
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">HTML</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">CSS</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Javascript</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">Html</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">HTML</h1>
                <p className="text-2xs">Experienced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckBadgeIcon className="size-6" />
              <div>
                <h1 className="font-bold">HTML</h1>
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
