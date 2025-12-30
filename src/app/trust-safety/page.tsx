import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function TrustSafetyPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container maxWidth="2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Trust & Safety
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-12">
            Building a safe and trustworthy community for all PALS members.
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Our Commitment to Trust</h2>
              <p className="text-white/80 mb-4">
                At PALS, trust is the foundation of everything we do. We've built a platform where members can confidently 
                engage in financial transactions, knowing that their safety and security are our top priorities.
              </p>
              <p className="text-white/80">
                Our Trust & Safety program combines advanced technology, community guidelines, and dedicated support to create 
                a secure environment for all users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Identity Verification</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  Every member on PALS undergoes identity verification to ensure authenticity and prevent fraud:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li><strong>Government ID Verification:</strong> All users must verify their identity with a government-issued ID</li>
                  <li><strong>Address Verification:</strong> Proof of address is required for full account access</li>
                  <li><strong>Phone & Email Verification:</strong> Multi-channel verification for account security</li>
                  <li><strong>Ongoing Monitoring:</strong> Continuous verification to maintain account integrity</li>
                </ul>
                <p className="text-white/80 mt-4">
                  Verified accounts display a verification badge, making it easy to identify trusted members in the community.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Pal Score System</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  Our Pal Score system creates a transparent trust metric for every member:
                </p>
                <div className="bg-white/5 p-6 rounded-lg space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">How Pal Score Works</h3>
                    <p className="text-white/80">
                      Your Pal Score is calculated based on multiple factors including transaction history, pool participation, 
                      community engagement, and account standing. Higher scores indicate greater trustworthiness and reliability.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Benefits of High Pal Score</h3>
                    <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                      <li>Access to exclusive pools and features</li>
                      <li>Higher transaction limits</li>
                      <li>Priority customer support</li>
                      <li>Lower fees on certain services</li>
                      <li>Enhanced reputation in the community</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Maintaining Your Score</h3>
                    <p className="text-white/80">
                      Keep your Pal Score high by completing transactions on time, participating actively in pools, 
                      maintaining a positive community presence, and following all platform guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Fraud Prevention</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  We employ multiple layers of fraud prevention to protect our community:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Real-Time Monitoring</h3>
                    <p className="text-white/80">
                      Advanced algorithms monitor all transactions in real-time to detect suspicious patterns and potential fraud.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Transaction Limits</h3>
                    <p className="text-white/80">
                      Progressive transaction limits based on account verification and Pal Score help prevent large-scale fraud.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Account Verification</h3>
                    <p className="text-white/80">
                      Multi-level verification ensures that all accounts belong to real, verified individuals.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Community Reporting</h3>
                    <p className="text-white/80">
                      Members can report suspicious activity, which our team investigates promptly and thoroughly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Community Guidelines</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  To maintain a safe and respectful community, all members must follow these guidelines:
                </p>
                <div className="bg-white/5 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Honest Communication</h3>
                    <p className="text-white/80">
                      Be transparent and honest in all interactions. Misrepresentation or deception is strictly prohibited.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Timely Transactions</h3>
                    <p className="text-white/80">
                      Complete all commitments on time. Late payments or failure to fulfill obligations negatively impact 
                      your Pal Score and may result in account restrictions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Respectful Behavior</h3>
                    <p className="text-white/80">
                      Treat all community members with respect. Harassment, discrimination, or abusive behavior will not 
                      be tolerated and may result in account suspension.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Prohibited Activities</h3>
                    <p className="text-white/80">
                      The following activities are strictly prohibited: money laundering, fraud, illegal transactions, 
                      circumventing platform rules, or any activity that violates applicable laws.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Dispute Resolution</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  If you encounter an issue with another member or a transaction, we have a fair dispute resolution process:
                </p>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-white/90">1. Direct Communication</h3>
                    <p className="text-white/80">
                      First, try to resolve the issue directly with the other party through our in-app messaging system.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-white/90">2. Report the Issue</h3>
                    <p className="text-white/80">
                      If direct communication doesn't resolve the issue, report it through our Help Center with all relevant details.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-white/90">3. Investigation</h3>
                    <p className="text-white/80">
                      Our Trust & Safety team will investigate the dispute, review transaction records, and gather evidence 
                      from both parties.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-white/90">4. Resolution</h3>
                    <p className="text-white/80">
                      We'll provide a fair resolution based on our investigation. This may include refunds, account adjustments, 
                      or other appropriate actions.
                    </p>
                  </div>
                </div>
                <p className="text-white/80 mt-4">
                  Most disputes are resolved within 5-7 business days. Complex cases may take longer, but we'll keep you 
                  informed throughout the process.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Account Safety Measures</h2>
              <div className="space-y-4">
                <p className="text-white/80 mb-4">
                  We implement various safety measures to protect accounts:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li><strong>Account Monitoring:</strong> Continuous monitoring for unusual activity patterns</li>
                  <li><strong>Automatic Alerts:</strong> Real-time notifications for suspicious transactions</li>
                  <li><strong>Account Freezing:</strong> Immediate account protection if fraud is suspected</li>
                  <li><strong>Transaction Reversals:</strong> Ability to reverse fraudulent transactions when detected</li>
                  <li><strong>Recovery Support:</strong> Dedicated support for compromised accounts</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Reporting Issues</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <p className="text-white/80">
                  If you encounter any trust or safety issues, please report them immediately:
                </p>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">In-App Reporting</h3>
                  <p className="text-white/80">
                    Use the "Report" button on any profile, transaction, or message to report suspicious activity directly 
                    from the app.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Email Support</h3>
                  <p className="text-white/80">
                    <strong>Trust & Safety Team:</strong> trust@pals.com<br />
                    <strong>Urgent Issues:</strong> Available 24/7 through our Help Center
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">What to Include</h3>
                  <p className="text-white/80">
                    When reporting, please include: transaction IDs, usernames involved, screenshots if available, 
                    and a detailed description of the issue.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Your Role in Trust & Safety</h2>
              <p className="text-white/80 mb-4">
                Trust & Safety is a shared responsibility. Here's how you can help:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Verify your identity completely to build trust with other members</li>
                <li>Maintain a high Pal Score through reliable behavior</li>
                <li>Report suspicious activity when you encounter it</li>
                <li>Follow all community guidelines and platform rules</li>
                <li>Communicate clearly and honestly in all transactions</li>
                <li>Keep your account secure with strong passwords and 2FA</li>
              </ul>
            </section>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

