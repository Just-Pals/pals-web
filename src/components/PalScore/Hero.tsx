"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">

      {/* CRED-STYLE LARGE OVAL GRADIENT - spans full width */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Main large oval shape */}
        <div
          className="
            absolute
            w-[140vw]
            h-[900px]
            rounded-[50%]
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse 80% 70% at 50% 50%,
                #ffffff 0%,
                #f8fdf8 20%,
                #e8f5e9 40%,
                rgba(200, 230, 210, 0.6) 60%,
                transparent 75%
              )
            `,
          }}
        />
        
        {/* Left side warm gradient (yellow/orange) */}
        <div
          className="
            absolute
            w-[800px]
            h-[800px]
            rounded-full
            -left-[200px]
            top-1/2
            -translate-y-1/2
            blur-3xl
            opacity-70
          "
          style={{
            background: `
              radial-gradient(
                circle at center,
                #ffd89b 0%,
                #f9c762 30%,
                #f5b942 50%,
                transparent 70%
              )
            `,
          }}
        />

        {/* Right side cool gradient (mint/green) */}
        <div
          className="
            absolute
            w-[600px]
            h-[600px]
            rounded-full
            -right-[100px]
            top-1/3
            blur-3xl
            opacity-50
          "
          style={{
            background: `
              radial-gradient(
                circle at center,
                #a8e6cf 0%,
                #88d4ab 40%,
                transparent 70%
              )
            `,
          }}
        />

        {/* Top right mint accent */}
        <div
          className="
            absolute
            w-[400px]
            h-[300px]
            rounded-full
            right-0
            top-0
            blur-2xl
            opacity-60
          "
          style={{
            background: `
              radial-gradient(
                circle at center,
                #b8f5d8 0%,
                #98e8c1 50%,
                transparent 70%
              )
            `,
          }}
        />

        {/* Center large white/light green oval overlay */}
        <div
          className="
            absolute
            w-[1200px]
            h-[700px]
            rounded-[50%]
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-[40%]
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,255,255,0.95) 0%,
                rgba(255,255,255,0.8) 30%,
                rgba(248,253,248,0.6) 50%,
                rgba(232,245,233,0.3) 70%,
                transparent 85%
              )
            `,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-24 sm:pb-32 md:pb-40 lg:pb-52 text-center">

        <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#0c6a48] text-[10px] xs:text-xs font-medium mb-6 sm:mb-8">
          CREDIT SCORE, DEMYSTIFIED
        </p>

        <h1
          className="
            font-[PlayfairDisplay] 
            text-[36px]
            xs:text-[42px]
            sm:text-[56px]
            md:text-[72px] 
            lg:text-[88px] 
            font-bold 
            leading-[1.08]
            text-[#1a1a1a]
            px-2
          "
        >
          see beyond<br />
          <span className="text-[#0a7a43]">the score.</span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-6 sm:mt-8 leading-relaxed font-light px-4">
          track, understand,<br className="hidden sm:block" />
          and shape your credit journey.
        </p>
      </div>
    </section>
  );
}