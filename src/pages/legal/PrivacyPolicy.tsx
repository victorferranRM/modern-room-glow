import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Privacy Policy
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
                <strong>Smart Things and Friends SL</strong> informs users that it complies with current data protection regulations, particularly the GENERAL DATA PROTECTION REGULATION (GDPR) – REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND THE COUNCIL of May 25, 2016.
              </p>

              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Data Controller</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Owner:</strong> Smart Things and Friends SL (hereinafter, THE COMPANY)</li>
                  <li><strong>Address:</strong> Calle Bailèn, 3. 3-2, 08010 Barcelona</li>
                  <li><strong>Email:</strong> support@roomonitor.com</li>
                  <li><strong>Phone:</strong> +34 930 180 130</li>
                  <li><strong>CIF:</strong> B66668286</li>
                  <li><strong>Website:</strong> www.roomonitor.com</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Collection and Processing of Personal Data</h2>
              <p className="text-muted-foreground mb-6">
                In accordance with current regulations, THE COMPANY collects only the data strictly necessary to provide services related to its business activity and other services and/or activities required by law.
              </p>
              <p className="text-muted-foreground mb-6">
                This personal data protection policy may change over time due to possible legislative updates, jurisprudence, or the criteria established by the Spanish Data Protection Agency or other competent authorities. THE COMPANY reserves the right to modify this privacy policy to adapt it to legislative or jurisprudential changes in effect at the time of website access, as well as to industry practices.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Confidentiality of Personal Data</h2>
              <p className="text-muted-foreground mb-6">
                All personal data provided by email or through any form will be processed in accordance with applicable regulations (REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND THE COUNCIL of May 25, 2016) and will, in any case, be handled confidentially by THE COMPANY's personnel responsible for data management.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Consent for Data Provision and Consequences</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Voluntary Nature</h3>
              <p className="text-muted-foreground mb-6">
                Website users are informed that responding to questions in the data collection forms available on this site is voluntary. However, refusal to provide the requested data may prevent access to certain services that require such information.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Consequences</h3>
              <p className="text-muted-foreground mb-6">
                By completing the forms on the various websites related to THE COMPANY's services, users accept the inclusion and processing of the data provided in a personal data file managed by THE COMPANY.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">User Rights Regarding Their Data</h2>
              <p className="text-muted-foreground mb-6">
                Users may exercise, in accordance with the GENERAL DATA PROTECTION REGULATION (GDPR) – REGULATION (EU) 2016/679, their rights to access, rectify, oppose, delete, restrict, and transfer their data.
              </p>
              <p className="text-muted-foreground mb-6">
                Any user may exercise the aforementioned rights by submitting a written and signed request, accompanied by a copy of their identification document (ID card or passport), to THE COMPANY's address indicated above.
              </p>
              <p className="text-muted-foreground mb-6">
                Additionally, if a user no longer wishes to receive information via email or any other means, they may notify us by sending a message with acknowledgment of receipt to THE COMPANY or by replying to one of our emails with the word "unsubscribe."
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Data Retention Period and Purpose of Collected Data</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Stored Data</h3>
              <p className="text-muted-foreground mb-6">
                We only collect essential contact information (name, surname, and email address). These data are exclusively managed by THE COMPANY and <strong>are not sold, transferred, or rented to other companies</strong>, except when necessary to provide the requested service.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Purpose of Collected Data</h3>
              <p className="text-muted-foreground mb-4">We also inform users that stored data may be used to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Identify users</li>
                <li>Conduct statistical studies on registered users</li>
                <li>Inform users, with their consent, about THE COMPANY, its activities, or other related topics</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">User Commitments</h2>
              <p className="text-muted-foreground mb-6">
                By providing data through our forms, the user accepts the terms of use and privacy policy. The user acknowledges that they have been informed of the terms of use and agrees to fully comply with them while browsing our website.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Transfer of Data to Third Parties</h3>
              <p className="text-muted-foreground mb-6">
                Except when required by law, THE COMPANY does not share personal data with third parties without the explicit consent of the user. Furthermore, we ensure that these third parties comply with applicable data protection regulations.
              </p>
              <p className="text-muted-foreground mb-6">
                THE COMPANY <strong>does not sell, rent, or transfer users' personal data to other companies</strong>, unless strictly necessary to provide the requested service.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Unsubscribing from Mailing Lists</h3>
              <p className="text-muted-foreground mb-6">
                THE COMPANY may occasionally send emails to inform users about news and offers that may be of interest to them. Users may unsubscribe at any time by sending an email with the word "unsubscribe" in the subject line.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">User Responsibility</h2>
              <p className="text-muted-foreground mb-6">
                Access to websites and the use of information and content provided therein are the sole responsibility of users. THE COMPANY is not responsible for the improper use of services or content on the site.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Legal Information in Compliance with LSSI-CE</h2>
              <p className="text-muted-foreground mb-6">
                In accordance with Article 10 of the Spanish Law 34/2002 of July 11, on Information Society Services and Electronic Commerce, we inform you that the website owner is:
              </p>
              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Owner:</strong> SMART THINGS AND FRIENDS SL</li>
                  <li><strong>Address:</strong> Calle Bailèn, 3. 3-2, 08010 Barcelona</li>
                  <li><strong>Email:</strong> info@roomonitor.com</li>
                  <li><strong>Phone:</strong> +34 930 180 130</li>
                  <li><strong>CIF:</strong> B66668286</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  For any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:support@roomonitor.com" className="text-primary hover:underline">
                    support@roomonitor.com
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
