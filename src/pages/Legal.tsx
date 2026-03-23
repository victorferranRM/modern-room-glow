import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/useTranslation";

export default function Legal() {
  const { t, tObject } = useTranslation();
  const location = useLocation();

  const sections = tObject<{ id: string; title: string }[]>('legal.sections');
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "terms-of-use");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && sections.some(s => s.id === hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location, sections]);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('legal.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('legal.subtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 lg:top-20 z-40 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto justify-start sm:justify-center gap-1 py-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-colors",
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content — static legal text stays in English as-is */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Terms of Use */}
            <div id="terms-of-use" className="scroll-mt-40 mb-20">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b">Terms of Use</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-lg text-muted-foreground mb-8">
                    Welcome to www.roomonitor.com. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Acceptance of Terms</h3>
                  <p className="text-muted-foreground mb-6">
                    By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Website Use</h3>
                  <p className="text-muted-foreground mb-6">
                    You may use this website for lawful purposes only. You agree not to use this website:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>In any way that violates any applicable local, national, or international law or regulation</li>
                    <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material</li>
                    <li>To impersonate or attempt to impersonate Smart Things and Friends SL, an employee, another user, or any other person or entity</li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Intellectual Property</h3>
                  <p className="text-muted-foreground mb-6">
                    All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of Smart Things and Friends SL or its content suppliers and is protected by international copyright laws.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. User Account</h3>
                  <p className="text-muted-foreground mb-6">
                    If you create an account on this website, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Limitation of Liability</h3>
                  <p className="text-muted-foreground mb-6">
                    Smart Things and Friends SL shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use this website or any content on it.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Changes to Terms</h3>
                  <p className="text-muted-foreground mb-6">
                    We reserve the right to modify these Terms of Use at any time. Your continued use of the website following any changes indicates your acceptance of the new terms.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Governing Law</h3>
                  <p className="text-muted-foreground mb-6">
                    These Terms of Use shall be governed by and construed in accordance with the laws of Spain. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Barcelona.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Legal Notice */}
            <div id="legal-notice" className="scroll-mt-40 mb-20">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b">Legal Notice</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-lg text-muted-foreground mb-8">
                    In compliance with the duty to provide the information set out in art. 10 of Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce, the following is hereby stated:
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Data identifying the person responsible</h3>
                  <p className="text-muted-foreground mb-6">
                    We inform you that www.roomonitor.com is an Internet domain registered by the company Smart Things and Friends SL, domiciled at Calle Bailèn 3, 3-2 (08010) BARCELONA, NIF B66668286 and registered in the Mercantile Register of Barcelona.
                  </p>

                  <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Email:</strong> info@roomonitor.com</li>
                      <li><strong>Phone:</strong> +34 930 180 130</li>
                      <li><strong>CIF:</strong> B66668286</li>
                      <li><strong>Website:</strong> roomonitor.com</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. User and liability regime</h3>
                  <p className="text-muted-foreground mb-6">
                    The use of this website confers the condition of user of the website and implies full acceptance, without reservations, of each and every one of the provisions included in this Legal Notice, in the version published by Smart Things and Friends SL at the same time the user accesses the website.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Link Policy and Disclaimers</h3>
                  <p className="text-muted-foreground mb-6">
                    As a service to our visitors, our website may include hyperlinks to other sites not operated or controlled by www.roomonitor.com. For this reason, we are not responsible for the legality, reliability, usefulness, veracity and timeliness of the contents of such websites or their privacy practices.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Intellectual and industrial property rights</h3>
                  <p className="text-muted-foreground mb-6">
                    www.roomonitor.com by itself or as assignee, is the owner of all intellectual and industrial property rights of its website, as well as the elements contained therein (images, sound, audio, video, software or texts; brands or logos, color combinations, structure and design, etc.).
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">5. SSL Certificate</h3>
                  <p className="text-muted-foreground mb-6">
                    The SSL CERTIFICATE provides authentication, privacy and security of information between Roomonitor and the user. Roomonitor has a security certificate that is used to make secure connections and is established using pre-established keys, encoding and decrypting all data sent until the connection is closed.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Legal Actions, applicable legislation and jurisdiction</h3>
                  <p className="text-muted-foreground mb-6">
                    Roomonitor reserves the right to file civil or criminal actions that it deems appropriate for improper use of its website and content, or for non-compliance with these conditions. The relationship between the user and the provider will be governed by Spanish law. If any controversy arises, the parties may submit their conflicts to arbitration or resort to ordinary jurisdiction. Roomonitor is domiciled in BARCELONA, Spain.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Privacy Policy */}
            <div id="privacy-policy" className="scroll-mt-40 mb-20">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b">Privacy Policy</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-lg text-muted-foreground mb-8">
                    <strong>Smart Things and Friends SL</strong> informs users that it complies with current data protection regulations, particularly the GENERAL DATA PROTECTION REGULATION (GDPR) – REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND THE COUNCIL of May 25, 2016.
                  </p>

                  <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Data Controller</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Owner:</strong> Smart Things and Friends SL (hereinafter, THE COMPANY)</li>
                      <li><strong>Address:</strong> Calle Bailèn, 3. 3-2, 08010 Barcelona</li>
                      <li><strong>Email:</strong> support@roomonitor.com</li>
                      <li><strong>Phone:</strong> +34 930 180 130</li>
                      <li><strong>CIF:</strong> B66668286</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Collection and Processing of Personal Data</h3>
                  <p className="text-muted-foreground mb-6">
                    In accordance with current regulations, THE COMPANY collects only the data strictly necessary to provide services related to its business activity and other services and/or activities required by law.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Confidentiality of Personal Data</h3>
                  <p className="text-muted-foreground mb-6">
                    All personal data provided by email or through any form will be processed in accordance with applicable regulations and will, in any case, be handled confidentially by THE COMPANY's personnel responsible for data management.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">User Rights Regarding Their Data</h3>
                  <p className="text-muted-foreground mb-6">
                    Users may exercise, in accordance with the GDPR, their rights to access, rectify, oppose, delete, restrict, and transfer their data. Any user may exercise the aforementioned rights by submitting a written and signed request, accompanied by a copy of their identification document, to THE COMPANY's address indicated above.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Purpose of Collected Data</h3>
                  <p className="text-muted-foreground mb-4">We only collect essential contact information. These data are exclusively managed by THE COMPANY and <strong>are not sold, transferred, or rented to other companies</strong>. Stored data may be used to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Identify users</li>
                    <li>Conduct statistical studies on registered users</li>
                    <li>Inform users, with their consent, about THE COMPANY, its activities, or other related topics</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Cookie Policy */}
            <div id="cookie-policy" className="scroll-mt-40 mb-20">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b">Cookie Policy</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-lg text-muted-foreground mb-8">
                    When you use our website and other online services, you are accepting that we can store and access cookies and IP addresses in order to collect data on website use and to improve your online experience.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">What are cookies?</h3>
                  <p className="text-muted-foreground mb-6">
                    Cookies are small data files that are generated in the computer, mobile phone, tablet or any other device from which a user accesses a website and that allow the owner of the website to store or retrieve certain information about the browsing done from that equipment.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Types of cookies</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>Own cookies:</strong> Sent from Roomonitor directly.</li>
                    <li><strong>Third-party cookies:</strong> Sent from external entities like social networks (Twitter, Facebook, Google).</li>
                    <li><strong>Session cookies:</strong> Stored until the end of browsing session.</li>
                    <li><strong>Persistent cookies:</strong> Remain stored for a defined period.</li>
                    <li><strong>Strictly necessary cookies:</strong> Required for website functionality.</li>
                    <li><strong>Performance cookies:</strong> Measure and improve website performance.</li>
                    <li><strong>Functional cookies:</strong> Collect usage statistics without personal identification.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">How to manage cookies?</h3>
                  <p className="text-muted-foreground mb-6">
                    You can allow, block or delete cookies installed on your computer by configuring your Internet browser options. If you do not allow cookies to be installed on your browser, you may not be able to access some of the services.
                  </p>

                  <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Browser Cookie Settings</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                      <li><a href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                      <li><a href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Internet Explorer</a></li>
                      <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Terms of Service */}
            <div id="terms-of-service" className="scroll-mt-40 mb-20">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b">Terms of Service</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-lg text-muted-foreground mb-8">
                    Welcome to Roomonitor, operated by <strong>Smart Things & Friends SL</strong>. By accessing and using our services, you agree to the terms and conditions that govern our relationship with you.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Acceptance of Terms</h3>
                  <p className="text-muted-foreground mb-6">
                    By using our services, you agree to be bound by these terms, as well as any modifications that may arise from time to time. Your continued use of the site constitutes acceptance of the terms in effect at that time.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Subscriptions and Commitment</h3>
                  <p className="text-muted-foreground mb-6">
                    Roomonitor subscriptions have a minimum term of 12 months. After this period, they will automatically renew annually unless the client requests cancellation at least 30 days in advance by writing to support@roomonitor.com.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Pricing and Payments</h3>
                  <p className="text-muted-foreground mb-6">
                    Service fees are billed in advance via direct debit. Devices must be paid at the time of purchase. All prices include applicable VAT. Roomonitor may update its prices annually based on the Consumer Price Index (CPI).
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Warranty and Liability</h3>
                  <p className="text-muted-foreground mb-6">
                    Roomonitor devices are covered by a one-year warranty against manufacturing defects. This warranty does not cover damage caused by misuse, tampering or vandalism. Roomonitor is responsible for the proper delivery of the service, but not for external issues such as power outages, internet failures or misuse of the devices.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Data Protection</h3>
                  <p className="text-muted-foreground mb-6">
                    Roomonitor complies with the General Data Protection Regulation (GDPR). Clients must inform their guests of the presence of devices in the property and how the data is used for monitoring purposes.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Governing Law</h3>
                  <p className="text-muted-foreground mb-6">
                    These services are governed by Spanish law. In the event of a dispute, the parties agree to submit to the courts of Barcelona.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Shipping & Returns */}
            <div id="shipping-returns" className="scroll-mt-40 mb-20">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b">Shipping & Returns</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-muted/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">48h</div>
                      <div className="text-sm text-muted-foreground">Dispatch Time</div>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">14 Days</div>
                      <div className="text-sm text-muted-foreground">Return Window</div>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">1 Year</div>
                      <div className="text-sm text-muted-foreground">Warranty</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Shipping Policy</h3>
                  <p className="text-muted-foreground mb-6">
                    We are committed to processing and shipping your order efficiently. Your order will be dispatched within <strong>48 hours</strong> from our office. Shipping costs are calculated transparently during checkout based on location and package weight.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Return Policy</h3>
                  <p className="text-muted-foreground mb-6">
                    If you are not completely satisfied with your purchase, you have the right to return the product within <strong>14 business days</strong> of receiving it. Contact our customer service team at support@roomonitor.com stating the reason for the return.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Refund</h3>
                  <p className="text-muted-foreground mb-6">
                    We process refunds promptly after receiving and verifying the returned product. Original shipping costs are <strong>non-refundable</strong>.
                  </p>

                  <div className="bg-muted/30 rounded-2xl p-6 mt-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Need Help?</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Email:</strong> support@roomonitor.com</li>
                      <li><strong>Phone:</strong> +34 930 180 130</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-muted/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('legal.contactTitle')}</h3>
                <p className="text-muted-foreground mb-4"><strong>Smart Things & Friends SL</strong></p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Registered Address:</strong> Calle Bailèn 3, 3-2, 08010 Barcelona</li>
                  <li><strong>CIF:</strong> B66668286</li>
                  <li><strong>Email:</strong> <a href="mailto:support@roomonitor.com" className="text-primary hover:underline">support@roomonitor.com</a></li>
                  <li><strong>Phone:</strong> +34 930 180 130</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
