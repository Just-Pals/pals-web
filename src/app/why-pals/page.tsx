import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function WhyPalsPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container maxWidth="2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Why PALS
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-12">
            Discover what makes PALS different and why thousands trust us with their financial needs.
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">A New Way to Bank</h2>
              <p className="text-white/80 mb-4">
                PALS is more than just a financial platform—it's a community-driven financial ecosystem built on trust, 
                transparency, and shared values. We've reimagined banking to put power back in the hands of our members.
              </p>
              <p className="text-white/80">
                Unlike traditional banks that profit from interest and hidden fees, PALS operates on a members-only model 
                where your pals become your power. We're building a financial future that's fair, accessible, and aligned 
                with your values.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Gold-Backed Security</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  Every transaction on PALS is backed by gold, providing stability and security that traditional fiat currencies 
                  can't match. This means:
                </p>
                <div className="bg-white/5 p-6 rounded-lg space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Real Asset Backing</h3>
                    <p className="text-white/80">
                      Your funds are backed by physical gold, protecting you from inflation and currency devaluation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Stability</h3>
                    <p className="text-white/80">
                      Gold has maintained its value for thousands of years, providing a stable foundation for your finances.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Transparency</h3>
                    <p className="text-white/80">
                      You can always see the gold backing your account, with full transparency into our reserves.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">0% Interest Promise</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  We believe that financial services shouldn't burden you with interest. All loans and financial products 
                  on PALS operate at 0% interest:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>No interest on loans—ever</li>
                  <li>No interest on pool contributions</li>
                  <li>Fair, transparent fees only</li>
                  <li>Your money works for you, not against you</li>
                </ul>
                <p className="text-white/80 mt-4">
                  This isn't a promotional offer—it's our core principle. We make money through fair, transparent fees, 
                  not by charging interest on your money.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Community-Powered</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  PALS is built on the power of community. Our pool system allows members to come together and support each 
                  other financially:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Pool Together</h3>
                    <p className="text-white/80">
                      Join pools for specific goals like health, Umrah, marriage, or create your own custom pool with trusted pals.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Trust System</h3>
                    <p className="text-white/80">
                      Our Pal Score system builds trust within the community, ensuring reliable and responsible members.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Shared Values</h3>
                    <p className="text-white/80">
                      Connect with members who share your values and financial goals, creating stronger, more meaningful connections.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Mutual Support</h3>
                    <p className="text-white/80">
                      Help others achieve their goals while they help you achieve yours—true mutual support.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Comprehensive Financial Services</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  PALS offers a complete suite of financial services in one platform:
                </p>
                <div className="bg-white/5 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">💳 Digital Wallet</h3>
                    <p className="text-white/80">
                      Send, receive, and manage money with ease. Instant P2P transfers, bill payments, and more.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">💰 Loans</h3>
                    <p className="text-white/80">
                      Access 0% interest loans backed by gold. Quick approval, flexible terms, and fair origination fees.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">🛒 Purchase Financing</h3>
                    <p className="text-white/80">
                      Buy what you need now and pay over time—all at 0% interest, backed by gold.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">📈 Investment Opportunities</h3>
                    <p className="text-white/80">
                      Invest in gold-backed opportunities and grow your wealth responsibly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">🤲 Charity & Waqf</h3>
                    <p className="text-white/80">
                      Give back through our integrated charity and Waqf services, making it easy to support causes you care about.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">🏅 Gold Vault</h3>
                    <p className="text-white/80">
                      Securely store and manage your gold assets with full transparency and easy access.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Bank-Level Security</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  Your security is our top priority. We use the same security measures as major banks:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>End-to-end encryption for all data</li>
                  <li>Multi-factor authentication</li>
                  <li>Real-time fraud detection</li>
                  <li>Regular security audits</li>
                  <li>Compliance with international security standards</li>
                  <li>Insurance coverage for your funds</li>
                </ul>
                <p className="text-white/80 mt-4">
                  We're committed to keeping your money and data safe, using industry-leading security practices and 
                  continuous monitoring.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Transparent & Fair</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">No Hidden Fees</h3>
                  <p className="text-white/80">
                    All fees are clearly disclosed before you complete any transaction. No surprises, no hidden costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Clear Terms</h3>
                  <p className="text-white/80">
                    We believe in plain language. Our terms and conditions are written to be understood, not to confuse.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Open Communication</h3>
                  <p className="text-white/80">
                    We're always transparent about how we operate, what we charge, and how we protect your information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Innovation & Technology</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  PALS combines cutting-edge technology with user-friendly design:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Modern, intuitive mobile app</li>
                  <li>Fast, reliable transactions</li>
                  <li>Advanced security features</li>
                  <li>Real-time notifications and updates</li>
                  <li>Comprehensive financial insights</li>
                  <li>Continuous platform improvements</li>
                </ul>
                <p className="text-white/80 mt-4">
                  We're constantly innovating to provide you with the best possible experience while maintaining the highest 
                  standards of security and reliability.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Values-Driven</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  PALS is built on principles that matter:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Ethical Finance</h3>
                    <p className="text-white/80">
                      We operate in accordance with ethical financial principles, avoiding interest and exploitative practices.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Community First</h3>
                    <p className="text-white/80">
                      Our members come first. We prioritize their needs and build features that truly serve the community.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Financial Inclusion</h3>
                    <p className="text-white/80">
                      We're committed to making financial services accessible to everyone, regardless of background or location.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Responsible Growth</h3>
                    <p className="text-white/80">
                      We grow responsibly, ensuring that expansion doesn't compromise security, service quality, or our values.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Join the PALS Community</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <p className="text-white/80">
                  Thousands of members trust PALS for their financial needs. Join a community that values:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Fair, transparent financial services</li>
                  <li>Gold-backed security and stability</li>
                  <li>0% interest on all loans and products</li>
                  <li>Community support and mutual assistance</li>
                  <li>Ethical, values-driven banking</li>
                  <li>Innovation and modern technology</li>
                </ul>
                <p className="text-white/80 mt-4">
                  Ready to experience a better way to bank? Download the PALS app today and become part of a financial 
                  community that puts you first.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Get Started Today</h2>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/80 mb-4">
                  Creating a PALS account takes just a few minutes:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4">
                  <li>Download the PALS app from the App Store or Google Play</li>
                  <li>Sign up with your email and phone number</li>
                  <li>Complete identity verification</li>
                  <li>Start using PALS for all your financial needs</li>
                </ol>
                <p className="text-white/80 mt-4">
                  Have questions? Our support team is available 24/7 to help you get started.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}


