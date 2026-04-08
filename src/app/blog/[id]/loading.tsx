import Container from "@/components/common/Container";

function Shimmer({ className }: { className: string }) {
  return (
    <div
      className={`animate-pulse bg-gray-100 rounded-lg ${className}`}
    />
  );
}

export default function BlogDetailLoading() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      {/* Reading progress bar placeholder */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-gray-100" />

      <div className="pt-20 sm:pt-24 md:pt-28">
        <div className="pt-8 sm:pt-12 pb-0">
          <Container maxWidth="4xl">
            {/* Breadcrumb */}
            <div className="mb-7 flex gap-2 items-center">
              <Shimmer className="h-3 w-8" />
              <Shimmer className="h-3 w-2" />
              <Shimmer className="h-3 w-14" />
              <Shimmer className="h-3 w-2" />
              <Shimmer className="h-3 w-40" />
            </div>

            {/* Category + read time */}
            <div className="flex items-center gap-3 mb-4">
              <Shimmer className="h-5 w-16 rounded-full" />
              <Shimmer className="h-3 w-16" />
            </div>

            {/* Title */}
            <div className="mb-5 space-y-3">
              <Shimmer className="h-10 w-full" />
              <Shimmer className="h-10 w-4/5" />
              <Shimmer className="h-10 w-2/3" />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-10">
              <Shimmer className="h-3 w-24" />
              <Shimmer className="h-5 w-14 rounded-full" />
              <Shimmer className="h-5 w-14 rounded-full" />
            </div>
          </Container>

          {/* Cover image */}
          <Container maxWidth="4xl">
            <Shimmer className="w-full h-[260px] sm:h-[360px] md:h-[460px] rounded-2xl mb-10" />
          </Container>
        </div>

        {/* Article body */}
        <div className="bg-white pb-16">
          <Container maxWidth="4xl">
            {/* Pull quote */}
            <div className="border-l-[3px] border-gray-100 pl-5 mb-10 space-y-2">
              <Shimmer className="h-5 w-full" />
              <Shimmer className="h-5 w-5/6" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-2">
                  <Shimmer className="h-4 w-full" />
                  <Shimmer className="h-4 w-full" />
                  <Shimmer className="h-4 w-4/5" />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </main>
  );
}
