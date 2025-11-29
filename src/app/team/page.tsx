// src/app/team/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Winner = {
  name: string;
  location: string;
};

const winners: Winner[] = [
  { name: "Chetan", location: "Nexus Westend Mall" },
  { name: "Ruchika", location: "The Pavilion Mall" },
  { name: "Bibek", location: "Nexus Esplanade" },
  { name: "Suresh", location: "Nexus Celebration Mall" },
  { name: "Mansi", location: "Nexus Koramangala Bangalore" },
  { name: "Ram", location: "Nexus Chennai" },
  { name: "Vikas", location: "Nexus Esplanade" },
  { name: "Abhishek", location: "Nexus Esplanade" },
  { name: "Ankit", location: "Nexus Esplanade" },
  // add more mock winners as needed...
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero / Banner */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          100% Cashback Winners
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
          A winner every hour — be among the victors. Scan & Pay at select outlets and stand a chance to win full cashback.
        </p>
      </section>

      {/* Winners list */}
      <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          Recent Winners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {winners.map((w, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {/* optionally add avatar / icon */}
              <div className="text-2xl font-bold">{w.name}</div>
              <div className="mt-2 text-sm text-gray-600">at</div>
              <div className="mt-1 text-gray-700">{w.location}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ / Rules */}
      <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          How it works
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
          <Disclosure title="01. A 100% cashback winner is selected every hour">
            From transactions made between 12 PM and 10 PM.
          </Disclosure>
          <Disclosure title="02. All members are eligible">
            Shop as you wish and scan & pay via Pals — each transaction boosts your odds.
          </Disclosure>
          <Disclosure title="03. Only one win per day per user">
            This improves fairness and spreads rewards among more people.
          </Disclosure>
          <Disclosure title="04. If you win, you get credited automatically">
            Cashback amount will be added to your Pals balance, and you’ll be notified.
          </Disclosure>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 sm:px-10 md:px-16 lg:px-24 text-center">
        <button className="bg-purple-700 text-white px-6 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
          Try Your Luck Now
        </button>
      </section>
    </main>
  );
}

// Simple disclosure component
function Disclosure({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-medium">{title}</span>
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <div className="px-4 py-3">{children}</div>}
    </div>
  );
}
