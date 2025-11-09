export default function About() {
  const features = [
    {
      icon: "🤝",
      title: "Build Connections",
      description: "Connect with like-minded people and build lasting friendships in a safe, welcoming environment.",
    },
    {
      icon: "💬",
      title: "Real Conversations",
      description: "Engage in meaningful discussions and share your thoughts with a community that cares.",
    },
    {
      icon: "🌟",
      title: "Personal Growth",
      description: "Learn from others, share your experiences, and grow together as a community.",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Your data is yours. We prioritize your privacy and security above everything else.",
    },
    {
      icon: "🎯",
      title: "Find Your Tribe",
      description: "Discover groups and communities that match your interests and passions.",
    },
    {
      icon: "📱",
      title: "Stay Connected",
      description: "Access your community anytime, anywhere with our mobile-friendly platform.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Pals?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're more than just a platform. We're a community built on trust, respect, and meaningful connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="mb-6 text-blue-100">
              Start building meaningful connections today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Create Your Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}