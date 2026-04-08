import Container from "@/components/common/Container";

function Shimmer({ className }: { className: string }) {
  return <div className={`animate-pulse bg-gray-100 rounded-lg ${className}`} />;
}

function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
      <Shimmer className="w-full h-[200px] sm:h-[210px] rounded-none" />
      <div className="p-5 sm:p-6 space-y-3 flex-1">
        <Shimmer className="h-4 w-16 rounded-full" />
        <Shimmer className="h-5 w-full" />
        <Shimmer className="h-5 w-4/5" />
        <Shimmer className="h-3 w-full mt-2" />
        <Shimmer className="h-3 w-3/4" />
        <div className="flex justify-between pt-4 border-t border-gray-50 mt-auto">
          <Shimmer className="h-3 w-20" />
          <Shimmer className="h-3 w-4" />
        </div>
      </div>
    </div>
  );
}

export default function BlogLoading() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Container maxWidth="7xl">
        {/* Page heading */}
        <div className="pt-28 sm:pt-32 pb-8">
          <Shimmer className="h-10 w-40 mb-4" />
          <Shimmer className="h-4 w-64" />
        </div>

        {/* Featured post */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col lg:flex-row">
          <Shimmer className="w-full lg:w-1/2 h-[240px] lg:h-[360px] rounded-none" />
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4 flex-1">
            <Shimmer className="h-4 w-16 rounded-full" />
            <Shimmer className="h-8 w-full" />
            <Shimmer className="h-8 w-5/6" />
            <Shimmer className="h-4 w-full" />
            <Shimmer className="h-4 w-4/5" />
            <Shimmer className="h-4 w-2/3" />
            <Shimmer className="h-10 w-32 rounded-full mt-2" />
          </div>
        </div>

        {/* More Articles header */}
        <div className="flex items-center gap-4 mb-7">
          <Shimmer className="h-7 w-36" />
          <div className="flex-1 h-px bg-gray-100" />
          <Shimmer className="h-3 w-16" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </main>
  );
}
