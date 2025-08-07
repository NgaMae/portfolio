"use client";
import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactMe = () => {
  return (
    <section id="contact" className="pt-24 max-w-3xl mx-auto px-6">
      <p className="text-center text-gray-500 uppercase tracking-widest">
        Get In Touch
      </p>
      <h2 className="text-center text-4xl font-bold mt-2 mb-8">Contact Me</h2>

      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-8 w-8 text-indigo-500" />
            <a
              href="mailto:sanminaung.dev@gmail.com"
              className="text-lg text-gray-700 hover:text-indigo-600"
            >
              sanminaung.dev@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-8 w-8 text-indigo-500" />
            <a
              href="tel:+959770012356"
              className="text-lg text-gray-700 hover:text-indigo-600"
            >
              09770012356
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <MapPinIcon className="h-8 w-8 text-indigo-500" />
            <p className="text-lg text-gray-700">Pyay, Bago Region, Myanmar</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/sanminaung.dev@gmail.com"
          method="POST"
          className="md:w-1/2 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Write your message here"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
