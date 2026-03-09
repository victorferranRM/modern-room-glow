import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Wifi, HeadphonesIcon, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Package,
    title: "Envío de dispositivos",
    description: "Recibirás tus dispositivos en 3-5 días laborables. Te enviaremos un email con el número de seguimiento.",
  },
  {
    icon: Wifi,
    title: "Instalación sencilla",
    description: "Conecta el dispositivo a la corriente y sigue las instrucciones de la app. Estará listo en menos de 5 minutos.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte dedicado",
    description: "Nuestro equipo te acompañará en todo el proceso. Contacta con nosotros cuando lo necesites.",
  },
];

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              ¡Pedido confirmado!
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Gracias por confiar en Roomonitor. Tu pedido se ha procesado correctamente.
            </p>
            <p className="text-sm text-muted-foreground mb-10">
              Recibirás un email de confirmación con todos los detalles de tu compra.
            </p>

            {/* Next Steps */}
            <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-soft text-left mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-6">Próximos pasos</h2>
              <div className="space-y-6">
                {STEPS.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{step.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link to="/portal">
                  Ir a mi portal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Volver al inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
