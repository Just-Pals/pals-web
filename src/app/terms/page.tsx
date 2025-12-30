import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container maxWidth="2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Terms and Conditions
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-12">
            Last updated: January 2025
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">1. Agreement to Terms</h2>
              <p className="text-white/80 mb-4">
                By accessing or using PALS ("the Platform"), you agree to be bound by these Terms and Conditions ("Terms"). 
                If you do not agree to these Terms, you may not access or use our services.
              </p>
              <p className="text-white/80">
                These Terms constitute a legally binding agreement between you and PALS, Inc. ("PALS", "we", "us", or "our"). 
                We reserve the right to modify these Terms at any time, and such modifications will be effective immediately 
                upon posting on the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">2. Eligibility</h2>
              <p className="text-white/80 mb-4">
                To use PALS, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding agreements</li>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not be prohibited from using financial services in your jurisdiction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">3. Account Registration and Security</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities 
                  that occur under your account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Immediately notify us of any unauthorized use of your account</li>
                  <li>Use a strong, unique password and enable multi-factor authentication</li>
                  <li>Not share your account credentials with any third party</li>
                  <li>Log out from your account when using shared devices</li>
                </ul>
                <p className="text-white/80">
                  PALS is not liable for any loss or damage arising from unauthorized access to your account due to your failure 
                  to maintain account security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">4. Services Description</h2>
              <p className="text-white/80 mb-4">
                PALS provides a members-only financial platform offering:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Gold-backed financial services with 0% interest</li>
                <li>Pool-based financial arrangements</li>
                <li>Digital wallet and payment services</li>
                <li>Investment opportunities</li>
                <li>Charity and Waqf services</li>
                <li>Loan and purchase financing</li>
                <li>Other financial products and services as may be offered</li>
              </ul>
              <p className="text-white/80 mt-4">
                All services are subject to eligibility requirements, approval, and availability. We reserve the right to modify, 
                suspend, or discontinue any service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">5. User Conduct</h2>
              <p className="text-white/80 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Use the Platform for any illegal purpose or in violation of any laws</li>
                <li>Engage in fraud, money laundering, or other financial crimes</li>
                <li>Attempt to gain unauthorized access to the Platform or other users' accounts</li>
                <li>Interfere with or disrupt the Platform's operation or security</li>
                <li>Use automated systems to access the Platform without authorization</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Violate any intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">6. Financial Transactions</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  All financial transactions on PALS are subject to the following terms:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Transactions are final and cannot be reversed except as required by law</li>
                  <li>You are responsible for ensuring sufficient funds are available</li>
                  <li>We may hold, freeze, or reverse transactions if we suspect fraud or illegal activity</li>
                  <li>Transaction limits may apply based on your account tier and verification status</li>
                  <li>Fees may apply to certain transactions as disclosed in our Fees schedule</li>
                  <li>We are not responsible for delays caused by third-party payment processors or banks</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">7. Fees and Charges</h2>
              <p className="text-white/80 mb-4">
                Certain services may be subject to fees and charges as disclosed in our Fees schedule. You agree to pay all 
                applicable fees associated with your use of the Platform. Fees are non-refundable unless otherwise stated or 
                required by law.
              </p>
              <p className="text-white/80">
                We reserve the right to modify our fee structure at any time. We will provide reasonable notice of any fee changes 
                that may affect your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">8. Intellectual Property</h2>
              <p className="text-white/80 mb-4">
                The Platform and all content, features, and functionality are owned by PALS and are protected by copyright, 
                trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Reproduce, distribute, or create derivative works from our content</li>
                <li>Use our trademarks, logos, or brand elements without permission</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Remove any copyright or proprietary notices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">9. Disclaimers and Limitations of Liability</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  <strong>THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                  EXPRESS OR IMPLIED.</strong> We disclaim all warranties, including but not limited to merchantability, 
                  fitness for a particular purpose, and non-infringement.
                </p>
                <p className="text-white/80">
                  To the maximum extent permitted by law, PALS shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including loss of profits, data, or use, arising from your use of the Platform.
                </p>
                <p className="text-white/80">
                  Our total liability for any claims arising from your use of the Platform shall not exceed the amount you paid 
                  to us in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">10. Indemnification</h2>
              <p className="text-white/80">
                You agree to indemnify, defend, and hold harmless PALS, its officers, directors, employees, and agents from any 
                claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Platform, 
                violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">11. Termination</h2>
              <p className="text-white/80 mb-4">
                We may suspend or terminate your account and access to the Platform at any time, with or without cause or notice, 
                for any reason including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Failure to pay fees</li>
                <li>Extended period of account inactivity</li>
                <li>At our sole discretion</li>
              </ul>
              <p className="text-white/80 mt-4">
                Upon termination, your right to use the Platform will immediately cease. You may also terminate your account at 
                any time by contacting customer support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">12. Governing Law and Dispute Resolution</h2>
              <p className="text-white/80 mb-4">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these 
                Terms or your use of the Platform shall be resolved through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Good faith negotiation between the parties</li>
                <li>Mediation if negotiation fails</li>
                <li>Binding arbitration in accordance with applicable arbitration rules</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">13. Contact Information</h2>
              <p className="text-white/80 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/90 mb-2"><strong>Email:</strong> legal@pals.com</p>
                <p className="text-white/90 mb-2"><strong>Address:</strong> PALS, Inc., Legal Department</p>
                <p className="text-white/90"><strong>Help Center:</strong> Available 24/7 through our platform</p>
              </div>
            </section>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

