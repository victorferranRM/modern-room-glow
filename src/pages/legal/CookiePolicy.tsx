import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cookie Policy
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
                The ownership of the website www.roomonitor.com corresponds to Smart Things and Friends SL. When you use our website and other online services, you are accepting that we can store and access cookies and IP addresses in order to collect data on website use and to improve your online experience.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">What are cookies?</h2>
              <p className="text-muted-foreground mb-6">
                Cookies are small data files that are generated in the computer, mobile phone, tablet or any other device from which a user accesses a website and that allow the owner of the website to store or retrieve certain information about the browsing done from that equipment. These technologies can be used for a wide range of purposes, such as recognising you as a user, the language selected, obtaining information about your browsing habits, or personalising the way in which content is displayed.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Types of cookies on the Roomonitor website</h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookies according to the entity that manages them</h3>
              <p className="text-muted-foreground mb-4">
                Depending on whether the information obtained by cookies is processed only by Roomonitor and/or also by third parties:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Own cookies:</strong> These are those that are sent from Roomonitor.</li>
                <li><strong>Third-party cookies:</strong> These are those that are sent from a computer or domain that is not managed by Roomonitor, but by another entity that processes the data obtained through the cookies. Examples include cookies used by social networks such as Twitter, Facebook or Google.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookies according to duration</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Session cookies:</strong> These are a type of cookie designed to collect and store data while a user accesses a web page. These cookies are stored in the user's terminal until the end of the browsing session.</li>
                <li><strong>Persistent cookies:</strong> These are a type of cookie in which the data remains stored in the user's terminal and can be accessed and processed for a period defined by the party responsible for the cookie, which can range from a few minutes to several years.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookies by purpose</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Strictly necessary cookies:</strong> These are those necessary for the execution of certain functionalities of the Roomonitor website, such as controlling traffic and data communication, balancing website traffic, identifying the session, and accessing parts of restricted access.</li>
                <li><strong>Performance cookies:</strong> These cookies allow us to count visits and traffic sources in order to measure and improve the performance of our website. They help us to know which pages are the most or least popular.</li>
                <li><strong>Functional cookies:</strong> A set of cookies to collect information about website usage statistics without personally identifying individual visitors.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">How to manage Roomonitor cookies?</h2>
              <p className="text-muted-foreground mb-6">
                You can allow, block or delete cookies installed on your computer by configuring your Internet browser options. If you do not allow cookies to be installed on your browser, you may not be able to access some of the services and your experience on our website may be less satisfactory.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">How do I refuse or withhold my consent to the use of cookies?</h2>
              <p className="text-muted-foreground mb-6">
                You can refuse to accept cookies by modifying the settings of your Internet browser. Please note that if you do not allow the use of cookies in some areas of our website, content may not be accessible or may not function properly.
              </p>

              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Browser Cookie Settings</h3>
                <p className="text-muted-foreground mb-4">Configure or disable your cookies in each browser:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Internet Explorer
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Safari
                    </a>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Data Recipients</h2>
              <p className="text-muted-foreground mb-6">
                Roomonitor may communicate your data, exclusively for the purposes indicated, to other entities that are part of Smart Things and Friends SL (data controller), public administrations and other natural or legal persons who develop collaboration agreements.
              </p>
              <p className="text-muted-foreground mb-6">
                Within the framework of these communications, international transfers of data may be made to third countries or international organisations, whether or not there is an adequacy decision of the European Commission. International transfers to countries that cannot guarantee an adequate level of protection shall be of an exceptional nature.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Policy Updates</h2>
              <p className="text-muted-foreground mb-6">
                Roomonitor may modify this Cookies Policy according to regulatory or legislative requirements or in order to adapt this policy to the instructions issued by the Spanish Data Protection Agency. In the event that significant changes are made, users will be duly informed.
              </p>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  If you have any problem related to the use of cookies on this website, or if you wish to exercise your rights of access, rectification, suppression, limitation, opposition and portability, you can contact us at{" "}
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
