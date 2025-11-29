// /src/app/pal-score/index.tsx
import React from "react";
import Hero from "../../component/PalScore/Hero";

export default function PalScorePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />

      {/* Example “why check credit score / benefits” section */}
      <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Why check your credit score?
            </h2>
            <p className="text-gray-600 text-lg">
              A healthy credit score helps you get better loan rates, credit cards, and 
              financial stability. Keep track of your score and stay ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Better Loans</h3>
              <p className="text-gray-600">Get access to loans with lower interest rates and greater approval chances.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Credit Cards</h3>
              <p className="text-gray-600">Qualify for premium credit cards based on your history.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Financial Control</h3>
              <p className="text-gray-600">Track changes over time and manage your credit health proactively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add more sections: how it works, steps, CTA, footer, etc. */}

    </main>
  );
}
