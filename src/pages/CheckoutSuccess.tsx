import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Wifi, HeadphonesIcon, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const STEP_ICONS = [Package, Wifi, HeadphonesIcon];

export default function CheckoutSuccess() {
  const { t, tObject } = useTranslation();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const steps = tObject<{ title: string; description: string }[]>('checkoutSuccess.steps');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {t('checkoutSuccess.title')}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {t('checkoutSuccess.subtitle')}
            </p>
            <p className="text-sm text-muted-foreground mb-10">
              {t('checkoutSuccess.emailConfirmation')}
            </p>

            <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-soft text-left mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-6">{t('checkoutSuccess.nextSteps')}</h2>
              <div className="space-y-6">
                {steps.map((step, index) => {
                  const Icon = STEP_ICONS[index] || Package;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{step.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <LocalizedLink to="/portal">
                  {t('checkoutSuccess.goToPortal')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </LocalizedLink>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <LocalizedLink to="/">{t('checkoutSuccess.backToHome')}</LocalizedLink>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
