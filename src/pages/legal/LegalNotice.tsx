import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Legal Notice
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
                In compliance with the duty to provide the information set out in art. 10 of Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce, the following is hereby stated:
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Data identifying the person responsible</h2>
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

              <p className="text-muted-foreground mb-6">
                Smart Things and Friends SL is the owner of this domain, and of the contents existing in it. Through this website, Smart Things and Friends SL provides information about the company and its products.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. User and liability regime</h2>
              <p className="text-muted-foreground mb-6">
                The use of this website confers the condition of user of the website and implies full acceptance, without reservations, of each and every one of the provisions included in this Legal Notice, in the version published by Smart Things and Friends SL at the same time the user accesses the website.
              </p>
              <p className="text-muted-foreground mb-6">
                The user undertakes to use the website, its contents and services, in accordance with the law and this legal notice. The user must abstain from using any of the services for illicit, prohibited or harmful purposes to the rights and interests of third parties.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2.1 Use of the website</h3>
              <p className="text-muted-foreground mb-4">
                www.roomonitor.com provides access to articles, information and data property of Smart Things and Friends SL. The user assumes responsibility for the correct use of the website. This responsibility will extend to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Not engage in illicit, illegal activities or activities contrary to good faith and public order</li>
                <li>Not cause damage to the physical and logical systems of roomonitor.com, its suppliers or third parties</li>
                <li>Not introduce or spread computer viruses or any other physical or logical systems that are likely to cause damage</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2.2 Information capture</h3>
              <p className="text-muted-foreground mb-6">
                Contact form where the user must fill out the name, email, telephone and subject fields. The data provided through the "Contact" section will be used for the purpose of contacting you to answer your questions or queries and send you information that may be of interest.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Link Policy and Disclaimers</h2>
              <p className="text-muted-foreground mb-6">
                As a service to our visitors, our website may include hyperlinks to other sites not operated or controlled by www.roomonitor.com. For this reason, we are not responsible for the legality, reliability, usefulness, veracity and timeliness of the contents of such websites or their privacy practices.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Modifications</h2>
              <p className="text-muted-foreground mb-6">
                www.roomonitor.com reserves the right to make any modifications it deems appropriate, without prior notice, to the content of its website. Both in relation to the contents of the website, and in the conditions of use thereof.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Intellectual and industrial property rights</h2>
              <p className="text-muted-foreground mb-6">
                www.roomonitor.com by itself or as assignee, is the owner of all intellectual and industrial property rights of its website, as well as the elements contained therein (images, sound, audio, video, software or texts; brands or logos, color combinations, structure and design, etc.).
              </p>
              <p className="text-muted-foreground mb-6">
                All rights reserved. By virtue of the provisions of the Intellectual Property Law, the reproduction, distribution and public communication of all or part of the contents of this website are expressly prohibited for commercial purposes, on any medium and by any technical means, without the authorization of www.roomonitor.com.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. SSL Certificate</h2>
              <p className="text-muted-foreground mb-6">
                The SSL CERTIFICATE provides authentication, privacy and security of information between Roomonitor and the user. Roomonitor has a security certificate that is used to make secure connections and is established using pre-established keys, encoding and decrypting all data sent until the connection is closed.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">7. Legal Actions, applicable legislation and jurisdiction</h2>
              <p className="text-muted-foreground mb-6">
                Roomonitor reserves the right to file civil or criminal actions that it deems appropriate for improper use of its website and content, or for non-compliance with these conditions.
              </p>
              <p className="text-muted-foreground mb-6">
                The relationship between the user and the provider will be governed by the regulations in force and applicable in Spanish territory. If any controversy arises, the parties may submit their conflicts to arbitration or resort to ordinary jurisdiction, complying with the rules on jurisdiction and competence in this regard. Roomonitor is domiciled in BARCELONA, Spain.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">8. Data protection</h2>
              <p className="text-muted-foreground mb-6">
                View our{" "}
                <Link to="/legal/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">9. Cookies</h2>
              <p className="text-muted-foreground mb-6">
                See our{" "}
                <Link to="/legal/cookie-policy" className="text-primary hover:underline">
                  Cookie Policy
                </Link>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">10. Duration</h2>
              <p className="text-muted-foreground mb-6">
                Smart Things and Friends SL will have the right to modify the terms and conditions stipulated here unilaterally, in whole or in part. The temporal validity of this legal notice coincides with the time of publication on this site, until it is modified in whole or in part.
              </p>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  For any questions about this Legal Notice, please contact us at{" "}
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
