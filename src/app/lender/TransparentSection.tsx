"use client";

export default function TransparentSection() {
  return (
    <section className="bg-[#0d0d0d] text-white py-32 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Row 1 — Big Heading */}
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.05]">
          transparent.
          <br />
          <span className="text-gray-500">at all times.</span>
        </h2>

        {/* Row 2 — Paragraph + Wealth Card */}
        <div className="mt-28 grid md:grid-cols-2 gap-24 items-center">
          {/* Left Paragraph */}
          <p className="text-gray-300 text-lg sm:text-xl md:text-4xl max-w-md leading-relaxed">
            track your investment’s progress in real time.
          </p>

          {/* Right Wealth Card */}
          <div className="flex md:justify-end">
            <div
              className="bg-[#161616] border border-white/10 
                            rounded-2xl px-12 py-10 shadow-2xl w-full max-w-md"
            >
              <p className="text-gray-500 text-sm tracking-wide">your wealth</p>

              <h3 className="text-3xl md:text-4xl font-semibold mt-3">
                ₹6,00,836.00
              </h3>

              <div
                className="mt-5 inline-block bg-green-500/10 
                              text-green-400 px-5 py-2 rounded-full 
                              text-sm font-medium"
              >
                +₹144 today
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 — Chart Card + Text */}
        <div className="mt-36 grid md:grid-cols-2 gap-24 items-center">
          {/* Left Chart Card */}
          <div>
            <div
              className="relative bg-[#141414] border border-white/10 
                            rounded-2xl p-10 w-full max-w-md shadow-2xl"
            >
              {/* Fake Growth Chart */}
              <div
                className="relative h-40 bg-gradient-to-tr 
                              from-green-500/20 to-purple-500/30 
                              rounded-xl overflow-hidden"
              >
                {/* Dot */}
                <div
                  className="absolute bottom-8 left-20 w-3 h-3 
                                bg-green-400 rounded-full shadow-lg"
                />

                {/* Labels */}
                <p className="absolute bottom-2 left-2 text-xs text-gray-500">
                  2 jun ’20
                </p>

                <p className="absolute bottom-2 right-2 text-xs text-gray-500">
                  2 jun ’21
                </p>

                <p className="absolute top-2 right-4 text-xs text-purple-300">
                  ₹9,836.25
                </p>
              </div>

              <p className="mt-6 text-green-400 font-medium text-lg">₹836.25</p>
            </div>
          </div>

          {/* Right Text */}
          <div className="md:pl-10">
            <h3
              className="text-3xl sm:text-4xl md:text-4xl 
                           text-gray-300 leading-tight max-w-md"
            >
              chart the future growth of your earnings.
            </h3>
          </div>
        </div>

        {/* Row 2 — Paragraph + Wealth Card */}
        <div className="mt-28 grid md:grid-cols-2 gap-24 items-center">
          {/* Left Paragraph */}
          <p className="text-gray-300 text-lg sm:text-xl md:text-4xl max-w-md leading-relaxed">
            wish to cashout? you can request a withdrawal any time you wish.
          </p>

          {/* Right Wealth Card */}
          <div className="flex md:justify-end">
            <div
              className="bg-[#161616] border border-white/10 
               rounded-2xl px-12 py-12 shadow-2xl 
               w-full max-w-md flex items-center justify-center"
            >
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Outer Soft Ring */}
                <div
                  className="absolute w-40 h-40 rounded-full 
                      border border-green-500/20"
                />

                {/* Inner Ring */}
                <div
                  className="w-28 h-28 rounded-full 
                      border-2 border-green-400 
                      flex items-center justify-center"
                >
                  <svg
                    className="w-12 h-12 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
