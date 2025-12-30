import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function FeesPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container maxWidth="2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Our Fees
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-12">
            Transparent pricing with no hidden costs. See exactly what you'll pay.
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Our Fee Philosophy</h2>
              <p className="text-white/80 mb-4">
                At PALS, we believe in transparent, fair pricing. Many of our core services are completely free, and when fees 
                do apply, they're clearly disclosed before you complete any transaction. We never charge hidden fees or surprise 
                charges.
              </p>
              <p className="text-white/80">
                Our fee structure is designed to keep costs low for our members while maintaining the security, reliability, 
                and innovation that make PALS special.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Free Services</h2>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/80 mb-4">
                  The following services are completely free for all PALS members:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Account creation and maintenance</li>
                  <li>P2P transfers between PALS users</li>
                  <li>Pool participation (standard pools)</li>
                  <li>Digital wallet services</li>
                  <li>Account verification</li>
                  <li>Customer support</li>
                  <li>Basic security features</li>
                  <li>Pal Score tracking and management</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Transaction Fees</h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Bank Transfers (Incoming)</h3>
                  <p className="text-white/80 mb-2">
                    <strong>Free</strong> for all members
                  </p>
                  <p className="text-white/70 text-sm">
                    No fees for receiving funds from external bank accounts.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Bank Transfers (Outgoing)</h3>
                  <p className="text-white/80 mb-2">
                    <strong>Free</strong> for standard transfers<br />
                    <strong>1.5%</strong> for instant transfers (optional)
                  </p>
                  <p className="text-white/70 text-sm">
                    Standard transfers are free but may take 1-3 business days. Instant transfers are processed immediately 
                    for a small fee.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Card Payments</h3>
                  <p className="text-white/80 mb-2">
                    <strong>2.5%</strong> for debit/credit card top-ups
                  </p>
                  <p className="text-white/70 text-sm">
                    This fee covers payment processing costs. Bank transfers are always free.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">International Transfers</h3>
                  <p className="text-white/80 mb-2">
                    <strong>2%</strong> of transaction amount (minimum $5)
                  </p>
                  <p className="text-white/70 text-sm">
                    International transfers may take 3-5 business days. Exchange rates are applied at the time of transfer.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Currency Exchange</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Exchange Rate</h3>
                  <p className="text-white/80">
                    We use real-time market exchange rates with a small spread (typically 0.5-1%) to cover currency conversion 
                    costs. The exact rate is always shown before you confirm the transaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">No Hidden Fees</h3>
                  <p className="text-white/80">
                    The exchange rate you see is the rate you get. No additional fees are added beyond what's displayed.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Premium Services</h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Premium Pool Access</h3>
                  <p className="text-white/80 mb-2">
                    <strong>Free</strong> for members with Pal Score 80+<br />
                    <strong>$9.99/month</strong> for members below Pal Score 80
                  </p>
                  <p className="text-white/70 text-sm">
                    Access to exclusive premium pools with higher limits and additional features.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Priority Support</h3>
                  <p className="text-white/80 mb-2">
                    <strong>Free</strong> for all members<br />
                    <strong>Premium tier:</strong> Faster response times (available with high Pal Score)
                  </p>
                  <p className="text-white/70 text-sm">
                    All members receive support, but premium members get priority handling.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Advanced Analytics</h3>
                  <p className="text-white/80 mb-2">
                    <strong>Free</strong> basic analytics<br />
                    <strong>$4.99/month</strong> for advanced analytics and insights
                  </p>
                  <p className="text-white/70 text-sm">
                    Detailed financial insights, spending analysis, and personalized recommendations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Loan Services</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">0% Interest Loans</h3>
                  <p className="text-white/80 mb-2">
                    All loans on PALS are 0% interest, backed by gold.
                  </p>
                  <p className="text-white/70 text-sm">
                    We charge a small origination fee to cover processing and administration:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/80 ml-4 mt-2">
                    <li>Loans up to $1,000: <strong>2%</strong> origination fee</li>
                    <li>Loans $1,001 - $5,000: <strong>1.5%</strong> origination fee</li>
                    <li>Loans over $5,000: <strong>1%</strong> origination fee</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Late Payment Fees</h3>
                  <p className="text-white/80">
                    Late payments may incur a fee of $25 or 2% of the overdue amount, whichever is greater. 
                    We encourage members to communicate if they're experiencing difficulties.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Fee Reductions & Discounts</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  We offer several ways to reduce or eliminate fees:
                </p>
                <div className="bg-white/5 p-6 rounded-lg space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">High Pal Score Benefits</h3>
                    <p className="text-white/80">
                      Members with Pal Score 90+ receive:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-white/80 ml-4 mt-2">
                      <li>50% reduction on all transaction fees</li>
                      <li>Free premium pool access</li>
                      <li>Priority customer support</li>
                      <li>Reduced loan origination fees</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">Volume Discounts</h3>
                    <p className="text-white/80">
                      High-volume users may qualify for reduced fees. Contact our support team to learn more about volume 
                      discount programs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Fee Transparency</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <p className="text-white/80">
                  We're committed to complete transparency. Before you complete any transaction:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>All fees are clearly displayed before confirmation</li>
                  <li>You'll see the exact amount you'll be charged</li>
                  <li>No fees are hidden or added after the fact</li>
                  <li>Transaction receipts include a complete fee breakdown</li>
                  <li>You can view all fees in your account settings</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Fee Changes</h2>
              <p className="text-white/80 mb-4">
                We reserve the right to modify our fee structure, but we're committed to transparency:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>We'll notify you at least 30 days in advance of any fee changes</li>
                <li>Fee changes will be clearly communicated via email and in-app notifications</li>
                <li>Existing transactions are not affected by fee changes</li>
                <li>You can always view the current fee schedule in your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Questions About Fees?</h2>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/80 mb-4">
                  If you have any questions about our fees or need clarification on any charges, our support team is here to help:
                </p>
                <p className="text-white/90 mb-2"><strong>Email:</strong> fees@pals.com</p>
                <p className="text-white/90 mb-2"><strong>In-App Support:</strong> Available 24/7</p>
                <p className="text-white/90"><strong>Help Center:</strong> Comprehensive fee information and FAQs</p>
              </div>
            </section>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

