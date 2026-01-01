import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container maxWidth="2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-12">
            Last updated: January 2025
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">1. Introduction</h2>
              <p className="text-white/80 mb-4">
                At PALS, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                financial services platform.
              </p>
              <p className="text-white/80">
                By using PALS, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">2.1 Personal Information</h3>
                  <p className="text-white/80 mb-2">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                    <li>Name, email address, phone number, and date of birth</li>
                    <li>Government-issued identification documents</li>
                    <li>Financial information (bank account details, transaction history)</li>
                    <li>Address and location information</li>
                    <li>Profile information and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">2.2 Usage Data</h3>
                  <p className="text-white/80">
                    We automatically collect information about how you interact with our platform, including device information, 
                    IP address, browser type, pages visited, and time spent on our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">2.3 Cookies and Tracking</h3>
                  <p className="text-white/80">
                    We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, 
                    and provide personalized content. You can control cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">3. How We Use Your Information</h2>
              <p className="text-white/80 mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and manage your account</li>
                <li>To verify your identity and comply with legal obligations</li>
                <li>To send you important updates, notifications, and marketing communications</li>
                <li>To detect, prevent, and address fraud and security issues</li>
                <li>To personalize your experience and provide customer support</li>
                <li>To analyze usage patterns and improve our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">4. Information Sharing and Disclosure</h2>
              <p className="text-white/80 mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                <li><strong>Safety and Security:</strong> To protect the rights, property, or safety of PALS, our users, or others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">5. Data Security</h2>
              <p className="text-white/80 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>End-to-end encryption for sensitive data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Multi-factor authentication for account access</li>
                <li>Employee training on data protection and privacy</li>
              </ul>
              <p className="text-white/80 mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">6. Your Rights and Choices</h2>
              <p className="text-white/80 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Account Closure:</strong> Close your account and request data deletion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">7. Data Retention</h2>
              <p className="text-white/80">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
                resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it 
                in accordance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">8. Children's Privacy</h2>
              <p className="text-white/80">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">9. International Data Transfers</h2>
              <p className="text-white/80">
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy 
                and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">10. Changes to This Privacy Policy</h2>
              <p className="text-white/80">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy 
                periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">11. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/90 mb-2"><strong>Email:</strong> privacy@pals.com</p>
                <p className="text-white/90 mb-2"><strong>Address:</strong> PALS, Inc., Privacy Office</p>
                <p className="text-white/90"><strong>Phone:</strong> Available through our Help Center</p>
              </div>
            </section>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}


