import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container maxWidth="2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-12">
            We're here to help. Get in touch with our team through any of the channels below.
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Get Support</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">In-App Support</h3>
                  <p className="text-white/80 mb-4">
                    The fastest way to get help. Our support team is available 24/7 through the PALS app.
                  </p>
                  <p className="text-white/70 text-sm">
                    Open the PALS app → Tap "Help" or "Support" → Start a chat
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Email Support</h3>
                  <p className="text-white/80 mb-4">
                    Send us an email and we'll respond within 24 hours (usually much faster).
                  </p>
                  <p className="text-white/90">
                    <strong>General Support:</strong><br />
                    <a href="mailto:support@pals.com" className="text-[#CFFF00] hover:underline">
                      support@pals.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Specialized Support</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Security Issues</h3>
                  <p className="text-white/80 mb-4">
                    For security concerns, unauthorized transactions, or account compromise:
                  </p>
                  <p className="text-white/90">
                    <a href="mailto:security@pals.com" className="text-[#CFFF00] hover:underline">
                      security@pals.com
                    </a>
                  </p>
                  <p className="text-white/70 text-sm mt-2">
                    Response time: Within 4 hours for urgent issues
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Technical Issues</h3>
                  <p className="text-white/80 mb-4">
                    For app bugs, technical problems, or feature requests:
                  </p>
                  <p className="text-white/90">
                    <a href="mailto:tech@pals.com" className="text-[#CFFF00] hover:underline">
                      tech@pals.com
                    </a>
                  </p>
                  <p className="text-white/70 text-sm mt-2">
                    Response time: Within 24 hours
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Business Inquiries</h3>
                  <p className="text-white/80 mb-4">
                    For partnerships, business opportunities, or enterprise solutions:
                  </p>
                  <p className="text-white/90">
                    <a href="mailto:business@pals.com" className="text-[#CFFF00] hover:underline">
                      business@pals.com
                    </a>
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Media & Press</h3>
                  <p className="text-white/80 mb-4">
                    For media inquiries, press releases, or interview requests:
                  </p>
                  <p className="text-white/90">
                    <a href="mailto:press@pals.com" className="text-[#CFFF00] hover:underline">
                      press@pals.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Legal & Compliance</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Legal Matters</h3>
                  <p className="text-white/80 mb-4">
                    For legal inquiries, subpoenas, or compliance matters:
                  </p>
                  <p className="text-white/90">
                    <a href="mailto:legal@pals.com" className="text-[#CFFF00] hover:underline">
                      legal@pals.com
                    </a>
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Privacy & Data</h3>
                  <p className="text-white/80 mb-4">
                    For privacy concerns, data requests, or GDPR inquiries:
                  </p>
                  <p className="text-white/90">
                    <a href="mailto:privacy@pals.com" className="text-[#CFFF00] hover:underline">
                      privacy@pals.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Response Times</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">In-App Chat</h3>
                  <p className="text-white/80">
                    Typically within minutes. Available 24/7 for all users.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Email Support</h3>
                  <p className="text-white/80">
                    <strong>General inquiries:</strong> Within 24 hours<br />
                    <strong>Security issues:</strong> Within 4 hours<br />
                    <strong>Technical issues:</strong> Within 24 hours<br />
                    <strong>Business inquiries:</strong> Within 2-3 business days
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Urgent Matters</h3>
                  <p className="text-white/80">
                    For urgent security issues or unauthorized transactions, use our in-app support for immediate assistance. 
                    Our security team is available 24/7.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Office Information</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Mailing Address</h3>
                  <p className="text-white/80">
                    PALS, Inc.<br />
                    Customer Support Department<br />
                    [Your Office Address]<br />
                    [City, State, ZIP Code]
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Office Hours</h3>
                  <p className="text-white/80">
                    Our support team is available 24/7 through in-app chat and email. Physical office visits are by 
                    appointment only.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Before You Contact Us</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <p className="text-white/80 mb-4">
                  To help us assist you more quickly, please have the following information ready:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Your PALS account email or username</li>
                  <li>Transaction IDs (if applicable)</li>
                  <li>Screenshots or error messages (if applicable)</li>
                  <li>A clear description of your issue or question</li>
                  <li>Steps you've already taken to resolve the issue</li>
                </ul>
                <p className="text-white/80 mt-4">
                  You may also want to check our <a href="/help-center" className="text-[#CFFF00] hover:underline">Help Center</a> 
                  {" "}for answers to common questions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Social Media</h2>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/80 mb-4">
                  Follow us on social media for updates, tips, and community news:
                </p>
                <div className="flex flex-wrap gap-4">
                  <div>
                    <p className="text-white/90 font-semibold">Twitter/X</p>
                    <p className="text-white/70 text-sm">@PALS</p>
                  </div>
                  <div>
                    <p className="text-white/90 font-semibold">LinkedIn</p>
                    <p className="text-white/70 text-sm">PALS, Inc.</p>
                  </div>
                  <div>
                    <p className="text-white/90 font-semibold">Instagram</p>
                    <p className="text-white/70 text-sm">@PALS</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  Note: For account-specific issues, please use our official support channels (in-app or email) rather than 
                  social media for security and privacy reasons.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Feedback & Suggestions</h2>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/80 mb-4">
                  We love hearing from our community! Your feedback helps us improve PALS:
                </p>
                <p className="text-white/90 mb-2">
                  <strong>Feedback Email:</strong><br />
                  <a href="mailto:feedback@pals.com" className="text-[#CFFF00] hover:underline">
                    feedback@pals.com
                  </a>
                </p>
                <p className="text-white/80 mt-4">
                  You can also submit feedback directly through the PALS app in Settings → Feedback.
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

