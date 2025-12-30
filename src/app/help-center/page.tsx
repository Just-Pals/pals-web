import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function HelpCenterPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container maxWidth="2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Help Center
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-12">
            Find answers to common questions and get the support you need.
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Getting Started</h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do I create a PALS account?</h3>
                  <p className="text-white/80">
                    Download the PALS app from the App Store or Google Play Store. Open the app and tap "Sign Up" to begin. 
                    You'll need to provide your email address, phone number, and create a secure password. Complete the verification 
                    process by confirming your email and phone number.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">What documents do I need to verify my account?</h3>
                  <p className="text-white/80">
                    To fully verify your account, you'll need a government-issued photo ID (passport, driver's license, or national ID) 
                    and proof of address (utility bill, bank statement, or similar document dated within the last 3 months). 
                    The verification process typically takes 1-2 business days.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do I add funds to my account?</h3>
                  <p className="text-white/80">
                    You can add funds through bank transfer, debit card, or credit card. Navigate to your Wallet, tap "Add Funds", 
                    and follow the instructions. Bank transfers may take 1-3 business days to process, while card payments are 
                    typically instant.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Account Management</h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do I change my password?</h3>
                  <p className="text-white/80">
                    Go to Settings → Security → Change Password. Enter your current password and create a new secure password. 
                    Make sure to use a combination of letters, numbers, and special characters.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do I enable two-factor authentication?</h3>
                  <p className="text-white/80">
                    Navigate to Settings → Security → Two-Factor Authentication. Follow the prompts to set up 2FA using an 
                    authenticator app or SMS. We strongly recommend enabling this feature for enhanced account security.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do I update my personal information?</h3>
                  <p className="text-white/80">
                    Go to Settings → Profile to update your personal information. Some changes may require verification. 
                    For changes to your legal name or date of birth, please contact our support team.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do I close my account?</h3>
                  <p className="text-white/80">
                    To close your account, ensure all transactions are complete and your balance is zero. Then go to Settings → 
                    Account → Close Account. You'll need to confirm your identity and provide a reason. Account closure is permanent 
                    and cannot be undone.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Transactions & Payments</h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How long do transactions take to process?</h3>
                  <p className="text-white/80">
                    P2P transfers between PALS users are typically instant. Bank transfers may take 1-3 business days. 
                    Card payments are usually processed immediately. International transfers may take 3-5 business days.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">What are the transaction limits?</h3>
                  <p className="text-white/80">
                    Transaction limits vary based on your account verification level and tier. Basic accounts typically have lower 
                    limits, while fully verified accounts enjoy higher limits. You can view your current limits in Settings → 
                    Account Limits.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do I cancel a transaction?</h3>
                  <p className="text-white/80">
                    If a transaction is still pending, you may be able to cancel it from your transaction history. Once a transaction 
                    is completed, it cannot be cancelled. If you need to dispute a transaction, contact our support team immediately.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">What should I do if I sent money to the wrong person?</h3>
                  <p className="text-white/80">
                    Contact our support team immediately with the transaction details. We'll investigate and attempt to recover 
                    the funds. However, we cannot guarantee recovery, especially if the recipient has already withdrawn the funds.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Pools & Financial Services</h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do PALS pools work?</h3>
                  <p className="text-white/80">
                    Pools are group-based financial arrangements where members contribute funds and take turns receiving payouts. 
                    Each pool has specific rules and schedules. You can join existing pools or create your own. All pools are 
                    gold-backed and operate with 0% interest.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do I join a pool?</h3>
                  <p className="text-white/80">
                    Browse available pools in the Pools section. Review the pool rules, schedule, and member requirements. 
                    If you meet the criteria, tap "Join Pool" and complete the required contribution. Pool administrators will 
                    review and approve your membership.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">What is Pal Score?</h3>
                  <p className="text-white/80">
                    Pal Score is a trust and reputation score based on your activity, reliability, and community engagement on PALS. 
                    A higher Pal Score can unlock additional features, higher transaction limits, and access to exclusive pools.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How do loans work on PALS?</h3>
                  <p className="text-white/80">
                    PALS offers 0% interest loans backed by gold. Loan eligibility depends on your Pal Score, account history, 
                    and the loan amount. Apply through the Loans section, and if approved, funds are typically available within 
                    1-2 business days.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Security & Privacy</h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How secure is my data?</h3>
                  <p className="text-white/80">
                    We use bank-level encryption and security measures to protect your data. All sensitive information is encrypted 
                    both in transit and at rest. We comply with international security standards and regularly undergo security audits.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">What should I do if I suspect unauthorized access?</h3>
                  <p className="text-white/80">
                    Immediately change your password, enable two-factor authentication if not already enabled, and contact our 
                    security team at security@pals.com. We'll investigate and help secure your account.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">How is my personal information used?</h3>
                  <p className="text-white/80">
                    We use your information to provide our services, verify your identity, process transactions, and comply with 
                    legal requirements. We never sell your data to third parties. See our Privacy Policy for complete details.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Fees & Charges</h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">What fees does PALS charge?</h3>
                  <p className="text-white/80">
                    Many services on PALS are free, including P2P transfers between users and basic account features. Some services 
                    may have fees, such as currency conversion, international transfers, or premium features. See our Fees page for 
                    a complete breakdown.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Are there any hidden fees?</h3>
                  <p className="text-white/80">
                    No. All fees are clearly disclosed before you complete a transaction. You'll always see the exact amount you'll 
                    be charged before confirming any payment or service.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Support</h2>
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">In-App Support</h3>
                  <p className="text-white/80">
                    The fastest way to get help is through our in-app support chat. Available 24/7, our support team can assist 
                    with most issues in real-time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Email Support</h3>
                  <p className="text-white/80">
                    <strong>General inquiries:</strong> support@pals.com<br />
                    <strong>Security issues:</strong> security@pals.com<br />
                    <strong>Technical issues:</strong> tech@pals.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">Response Times</h3>
                  <p className="text-white/80">
                    In-app chat: Typically within minutes<br />
                    Email: Within 24 hours for general inquiries, within 4 hours for urgent security issues
                  </p>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

