import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook, FaTelegram, FaViber } from "react-icons/fa";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"; // Optional: Use Heroicons if preferred

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Column 1: About / Logo */}
        <div>
          <h3 className="text-2xl font-bold text-white">San Min Aung</h3>
          <p className="mt-4 text-gray-400">
            Passionate full-stack developer. Focused on building adaptive
            learning and intelligent systems.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-indigo-400" />
              <a
                href="mailto:sanminaung.dev@gmail.com"
                className="hover:text-white"
              >
                sanminaung.dev@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-indigo-400" />
              <a href="tel:+959770012356" className="hover:text-white">
                09770012356
              </a>
            </li>
            <li className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-indigo-400" />
              Pyay, Bago Region, Myanmar
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/NgaMae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/NgaMae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/NgaMae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/san.min.aung.821756?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6 hover:text-blue-500" />
            </a>
            <a
              href="https://t.me/someone_2001_11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="w-6 h-6 hover:text-blue-400" />
            </a>
            <a
              href="viber://chat?number=%2B959770012356"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaViber className="w-6 h-6 hover:text-purple-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} San Min Aung. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
