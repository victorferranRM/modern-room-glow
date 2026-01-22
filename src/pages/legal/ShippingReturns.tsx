import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Truck, Package, RotateCcw, Clock, CreditCard, Shield } from "lucide-react";

export default function ShippingReturns() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Shipping & Returns Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 2026
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up" delay={0.1}>
              <div className="bg-background rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">48h Dispatch</h3>
                <p className="text-sm text-muted-foreground">Orders shipped within 48 hours</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="bg-background rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">14 Day Returns</h3>
                <p className="text-sm text-muted-foreground">Easy returns within 14 business days</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="bg-background rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">1 Year Warranty</h3>
                <p className="text-sm text-muted-foreground">All devices covered against defects</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <AnimatedSection animation="fade-up">
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Shipping Policy</h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Fast Shipping Process</h3>
              <p className="text-muted-foreground mb-6">
                We are committed to processing and shipping your order efficiently. Delivery times may vary depending on location, but we work diligently to minimize any delays. Your order will be dispatched within <strong>48 hours</strong> from our office unless there is a public holiday, in which case the time frame will be extended proportionally.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Transparent Costs</h3>
              <p className="text-muted-foreground mb-6">
                Shipping costs are calculated transparently during the checkout process and are based on the delivery location and package weight. There will be no hidden charges at checkout.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Accurate Tracking</h3>
              <p className="text-muted-foreground mb-6">
                We will provide detailed tracking information so you can monitor the status of your order in real time. Your satisfaction is our priority.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Return Policy</h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Satisfaction Guarantee</h3>
              <p className="text-muted-foreground mb-6">
                Your satisfaction is essential. If you are not completely satisfied with your purchase, you have the right to return the product within <strong>14 business days</strong> of receiving it.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Simple Return Process</h3>
              <p className="text-muted-foreground mb-6">
                To initiate a return, please contact our customer service team at <strong>support@roomonitor.com</strong>, stating the reason for the return. Ensure that the product is returned in its original condition and with proper packaging to facilitate a smooth return process.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Refund</h3>
              <p className="text-muted-foreground mb-6">
                We process refunds promptly after receiving and verifying the returned product. Please note that original shipping costs are <strong>non-refundable</strong>.
              </p>

              <div className="bg-muted/30 rounded-2xl p-6 mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our customer support team is here to assist you with any shipping or return inquiries.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Email:</strong> support@roomonitor.com</li>
                  <li><strong>Phone:</strong> +34 930 180 130</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  For more information about our services, please see our{" "}
                  <Link to="/legal/terms-of-service" className="text-primary hover:underline">
                    Terms of Service
                  </Link>.
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
