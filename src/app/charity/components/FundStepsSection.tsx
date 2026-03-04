"use client";

import Image from "next/image";

export default function FundStepsSection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <h2 className="text-4xl md:text-4xl font-bold text-center text-[#111827] mb-20">
          Fundraising on GoFundMe is easy, <br />
          powerful, and trusted
        </h2>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT ILLUSTRATION CARD */}
          <div className="relative">
            <div className="bg-[#4c9a2a] rounded-3xl p-16 relative overflow-hidden">

              {/* Main Illustration Image */}
              <div className="relative w-full h-[450px]">
                <Image
                  src="/image.png"  // put your image here
                  alt="Fund Illustration"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          {/* RIGHT STEPS */}
          <div className="space-y-16">

            {/* STEP 1 */}
            <StepItem
              number="1"
              title="Use our tools to create your fundraiser"
              description="You’ll be guided by prompts to add fundraiser details and set your goal. Make updates anytime."
              link="Get tips for starting your fundraiser."
              active={false}
            />

            {/* STEP 2 (Highlighted) */}
            <StepItem
              number="2"
              title="Reach donors by sharing"
              description="Share your fundraiser link and use the resources in your dashboard to gain momentum."
              active={true}
            />

            {/* STEP 3 */}
            <StepItem
              number="3"
              title="Securely receive funds"
              description="Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds."
              active={false}
            />

          </div>

        </div>
      </div>
    </section>
  );
}

/* STEP COMPONENT */
function StepItem({
  number,
  title,
  description,
  link,
  active,
}: {
  number: string;
  title: string;
  description: string;
  link?: string;
  active?: boolean;
}) {
  return (
    <div className="flex gap-6">

      {/* Number Circle */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold shrink-0
        ${active ? "bg-black text-white" : "border border-gray-300 text-gray-700"}`}
      >
        {number}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-xl font-semibold text-[#111827] mb-3">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-3">
          {description}
        </p>

        {link && (
          <p className="text-sm text-gray-500 underline cursor-pointer">
            {link}
          </p>
        )}
      </div>

    </div>
  );
}