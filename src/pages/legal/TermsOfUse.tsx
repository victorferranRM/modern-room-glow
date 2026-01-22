import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Terms of Use
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 2026
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <AnimatedSection animation="fade-up">
              <p className="lead text-lg text-muted-foreground mb-8">
                Welcome to www.roomonitor.com. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">
                By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Website Use</h2>
              <p className="text-muted-foreground mb-6">
                You may use this website for lawful purposes only. You agree not to use this website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>In any way that violates any applicable local, national, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material</li>
                <li>To impersonate or attempt to impersonate Smart Things and Friends SL, an employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground mb-6">
                All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of Smart Things and Friends SL or its content suppliers and is protected by international copyright laws.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. User Account</h2>
              <p className="text-muted-foreground mb-6">
                If you create an account on this website, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6">
                Smart Things and Friends SL shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use this website or any content on it.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. Changes to Terms</h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify these Terms of Use at any time. Your continued use of the website following any changes indicates your acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground mb-6">
                These Terms of Use shall be governed by and construed in accordance with the laws of Spain. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Barcelona.
              </p>

              <div className="bg-muted/30 rounded-2xl p-6 mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">Related Policies</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/legal/terms-of-service" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/cookie-policy" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  For any questions about these Terms of Use, please contact us at{" "}
                  <a href="mailto:info@roomonitor.com" className="text-primary hover:underline">
                    info@roomonitor.com
                  </a>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
