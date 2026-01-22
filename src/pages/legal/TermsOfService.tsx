import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Terms of Service
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
                Welcome to Roomonitor, a leader in innovative solutions for the short-term rental and vacation rental industry, operated with a commitment to excellence by <strong>Smart Things & Friends SL</strong>. By accessing and using our website and services, you agree to the terms and conditions that govern our relationship with you, the user.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Terms of Service</h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1.1 Acceptance of Terms</h3>
              <p className="text-muted-foreground mb-6">
                By using our services, you agree to be bound by these terms, as well as any modifications that may arise from time to time. Your continued use of the site constitutes acceptance of the terms in effect at that time.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1.2 Responsible Use</h3>
              <p className="text-muted-foreground mb-6">
                You agree to use our services in an ethical and lawful manner. Any activity that violates the law or our policies may result in the termination of your account and legal action.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1.3 Intellectual Property</h3>
              <p className="text-muted-foreground mb-6">
                All intellectual property rights related to our website and its associated content are the exclusive property of <strong>Roomonitor</strong>. Any unauthorized use, including reproduction, distribution, or modification of content, is strictly prohibited.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Subscriptions and Commitment</h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2.1 Plan Duration</h3>
              <p className="text-muted-foreground mb-6">
                Roomonitor subscriptions have a minimum term of 12 months. After this period, they will automatically renew annually unless the client requests cancellation at least 30 days in advance by writing to support@roomonitor.com.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2.2 Cancellations</h3>
              <p className="text-muted-foreground mb-6">
                If cancellation is requested before the end of the agreed term, proportional penalties may apply for discounts previously enjoyed. For clients with seasonal operations, we recommend contacting our support team to explore the best subscription management option.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Pricing and Payments</h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3.1 Billing</h3>
              <p className="text-muted-foreground mb-6">
                Service fees are billed in advance via direct debit. Devices must be paid at the time of purchase, either by bank transfer or credit card. All prices include applicable VAT.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3.2 Price Review</h3>
              <p className="text-muted-foreground mb-6">
                Roomonitor may update its prices annually based on the Consumer Price Index (CPI). In the event of an increase of more than 10%, the client may terminate the contract without penalty.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Warranty and Liability</h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4.1 Device Warranty</h3>
              <p className="text-muted-foreground mb-6">
                Roomonitor devices are covered by a one-year warranty against manufacturing defects. This warranty does not cover damage caused by misuse, tampering or vandalism.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4.2 Liability Limitations</h3>
              <p className="text-muted-foreground mb-6">
                Roomonitor is responsible for the proper delivery of the service, but not for external issues such as power outages, internet failures or misuse of the devices. We are not liable for any administrative fines or sanctions arising from the client's business activity.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Data Protection</h2>
              <p className="text-muted-foreground mb-6">
                Roomonitor complies with the General Data Protection Regulation (GDPR). Clients must inform their guests of the presence of devices in the property and how the data is used for monitoring purposes. For more details, please refer to our{" "}
                <Link to="/legal/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. Governing Law</h2>
              <p className="text-muted-foreground mb-6">
                These services are governed by Spanish law. In the event of a dispute, the parties agree to submit to the courts of Barcelona, unless otherwise required by mandatory consumer protection law.
              </p>

              <div className="bg-muted/30 rounded-2xl p-6 mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-4"><strong>Smart Things & Friends SL</strong></p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Registered Address:</strong> Calle Bailèn 3, 3-2, 08010 Barcelona</li>
                  <li><strong>CIF:</strong> B66668286</li>
                  <li><strong>Email:</strong> support@roomonitor.com</li>
                  <li><strong>Phone:</strong> +34 930 180 130</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  These Terms of Service are subject to modifications. We encourage you to review them regularly to stay informed of any updates.
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
