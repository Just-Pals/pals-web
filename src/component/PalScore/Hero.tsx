"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-purple-800 to-indigo-600 text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Check your Credit Score
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200">
          Your credit score is more than a number. Track your history, see your present — and take charge of what's next.
        </p>
        <button
          className="mt-6 bg-white text-purple-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
          // you can attach an onClick or link to actual functionality
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
