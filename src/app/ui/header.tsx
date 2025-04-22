"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

const list = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full h-20 shadow-gray-900 shadow-2xs left-0 top-0 px-5 lg:px-28 content-center select-none mt-2 md:mt-0">
        <div className="text-text flex justify-between box-content">
          <Link href="#home" className="content-center">
            <div className="text-l text-highlight">San Min Aung</div>
          </Link>
          <button
            onClick={() => {
              setOpen(true);
            }}
            title="menu_btn"
            className="size-10 flex justify-center items-center hover:bg-white lg:hidden"
          >
            <Bars3Icon className="size-6" />
          </button>
          <ul className="hidden lg:flex space-x-7 text-lg">
            {list.map((list) => {
              return (
                <Link
                  href={list.href}
                  key={list.name}
                  className="content-center"
                >
                  <li
                    key={list.name}
                    tabIndex={-1}
                    className="content-center border-b-2 border-transparent hover:border-highlight focus:border-highlight py-2"
                  >
                    {list.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </header>
      <Dialog open={open} onClose={setOpen} className="relative z-10 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-[50vw] max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll bg-secondary py-6 shadow-xl w-[50vw]">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold text-gray-900">
                      San Min Aung
                    </DialogTitle>
                  </div>
                  <div className="relative mt-6 flex-1">
                    <ul className="text-black text-lg">
                      {list.map((list) => {
                        return (
                          <Link
                            href={list.href}
                            key={list.name}
                            className="content-center"
                          >
                            <li
                              key={list.name}
                              tabIndex={-1}
                              className="content-center border-b-2 border-transparent w-fit hover:border-highlight focus:border-highlight mx-4 py-2"
                            >
                              {list.name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
