"use client";

export default function TrustedSection() {
  return (
    <section className="bg-[#063d1e] text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">

        {/* Small Heading */}
        <p className="text-base md:text-lg font-semibold mb-8 opacity-90">
          We’ve got you covered.
        </p>

        {/* Main Big Text */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[45px] leading-[1.3] font-medium text-white">
          GoFundMe is a trusted leader in online fundraising. With{" "}
          <span className="underline underline-offset-8 decoration-white/60 hover:decoration-white transition">
            simple pricing
          </span>{" "}
          and a team of{" "}
          <span className="underline underline-offset-8 decoration-white/60 hover:decoration-white transition">
            Trust & Safety
          </span>{" "}
          experts in your corner, you can raise money or make a donation with peace of mind.
        </h2>

        {/* Bottom Link */}
        <div className="mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-white/90 hover:text-white transition text-lg"
          >
            <span className="text-xl">🛡</span>
            <span className="underline underline-offset-4">
              Read the GoFundMe Giving Guarantee
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}