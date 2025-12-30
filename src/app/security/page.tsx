import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function SecurityPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container maxWidth="2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Security
          </h1>
          <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-12">
            Your security is our top priority. Learn how we protect your data and funds.
          </p>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Our Security Commitment</h2>
              <p className="text-white/80 mb-4">
                At PALS, we understand that security is fundamental to trust in financial services. We employ industry-leading 
                security measures and best practices to protect your personal information, financial data, and transactions.
              </p>
              <p className="text-white/80">
                Our security infrastructure is continuously monitored, tested, and updated to defend against evolving threats. 
                We work with leading security experts and follow international security standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Data Encryption</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">End-to-End Encryption</h3>
                  <p className="text-white/80">
                    All sensitive data transmitted between your device and our servers is encrypted using TLS 1.3, the latest 
                    encryption standard. This ensures that your information cannot be intercepted or read by unauthorized parties.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Data at Rest</h3>
                  <p className="text-white/80">
                    Your data stored on our servers is encrypted using AES-256 encryption, the same standard used by banks and 
                    government agencies. Encryption keys are managed through a secure key management system.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Database Security</h3>
                  <p className="text-white/80">
                    Our databases are protected with multiple layers of security, including encryption, access controls, and 
                    regular security audits. Only authorized personnel with specific roles can access sensitive data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Authentication & Access Control</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Multi-Factor Authentication (MFA)</h3>
                  <p className="text-white/80">
                    We strongly recommend enabling multi-factor authentication for your account. MFA adds an extra layer of 
                    security by requiring a second form of verification (such as a code from your phone) in addition to your password.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Biometric Authentication</h3>
                  <p className="text-white/80">
                    Our mobile app supports biometric authentication (fingerprint and face recognition) for quick and secure access 
                    to your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Session Management</h3>
                  <p className="text-white/80">
                    Active sessions are monitored and automatically logged out after periods of inactivity. You can view and 
                    manage active sessions from your account settings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Fraud Prevention</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  We employ advanced fraud detection systems that monitor transactions in real-time to identify and prevent 
                  suspicious activity:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Machine learning algorithms that detect unusual patterns</li>
                  <li>Real-time transaction monitoring and alerts</li>
                  <li>Device fingerprinting to identify trusted devices</li>
                  <li>Behavioral analysis to detect account takeover attempts</li>
                  <li>Integration with global fraud prevention networks</li>
                </ul>
                <p className="text-white/80 mt-4">
                  If we detect suspicious activity, we may temporarily restrict your account and contact you to verify the activity. 
                  This helps protect you from unauthorized access and fraudulent transactions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Infrastructure Security</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Secure Cloud Infrastructure</h3>
                  <p className="text-white/80">
                    Our platform is hosted on secure, enterprise-grade cloud infrastructure with redundant systems and automatic 
                    failover capabilities. Data is stored in geographically distributed data centers for resilience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Network Security</h3>
                  <p className="text-white/80">
                    Our network is protected by firewalls, intrusion detection systems, and DDoS mitigation services. We regularly 
                    conduct penetration testing and vulnerability assessments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Regular Security Audits</h3>
                  <p className="text-white/80">
                    We conduct regular security audits, both internally and through independent third-party security firms. 
                    These audits help us identify and address potential vulnerabilities before they can be exploited.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Compliance & Certifications</h2>
              <p className="text-white/80 mb-4">
                PALS maintains compliance with industry standards and regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>PCI DSS compliance for payment card data security</li>
                <li>GDPR compliance for data protection</li>
                <li>SOC 2 Type II certification for security controls</li>
                <li>ISO 27001 information security management</li>
                <li>Regular compliance audits and assessments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">How You Can Help</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  Security is a shared responsibility. Here's how you can help keep your account secure:
                </p>
                <div className="bg-white/5 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Use Strong Passwords</h3>
                    <p className="text-white/80">
                      Create a unique, complex password for your PALS account. Use a combination of letters, numbers, and symbols, 
                      and avoid using the same password for multiple accounts.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Enable Multi-Factor Authentication</h3>
                    <p className="text-white/80">
                      Add an extra layer of security by enabling MFA. This significantly reduces the risk of unauthorized access 
                      even if your password is compromised.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Keep Your App Updated</h3>
                    <p className="text-white/80">
                      Always use the latest version of the PALS app. Updates often include security improvements and bug fixes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Be Wary of Phishing</h3>
                    <p className="text-white/80">
                      Never share your account credentials or personal information in response to unsolicited emails, calls, or 
                      messages. PALS will never ask for your password via email or phone.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Monitor Your Account</h3>
                    <p className="text-white/80">
                      Regularly review your account activity and transaction history. Report any suspicious activity immediately 
                      through our Help Center.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/90">✓ Use Secure Networks</h3>
                    <p className="text-white/80">
                      Avoid accessing your account on public Wi-Fi networks. Use a secure, private network or a VPN when possible.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Reporting Security Issues</h2>
              <p className="text-white/80 mb-4">
                If you discover a security vulnerability or suspect unauthorized access to your account, please report it immediately:
              </p>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/90 mb-2"><strong>Security Email:</strong> security@pals.com</p>
                <p className="text-white/90 mb-2"><strong>Help Center:</strong> Available 24/7 for immediate assistance</p>
                <p className="text-white/90"><strong>Emergency:</strong> Contact us immediately if you notice unauthorized transactions</p>
              </div>
              <p className="text-white/80 mt-4">
                We take all security reports seriously and will investigate promptly. We also have a responsible disclosure program 
                for security researchers who discover vulnerabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Insurance & Protection</h2>
              <p className="text-white/80">
                Your funds are protected through multiple layers of security and insurance. We maintain insurance coverage and 
                follow best practices to ensure the safety of your assets. In the unlikely event of unauthorized transactions 
                due to security breaches on our end, we have procedures in place to investigate and resolve issues promptly.
              </p>
            </section>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

