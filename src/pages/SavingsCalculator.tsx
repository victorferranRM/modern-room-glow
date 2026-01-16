import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, ArrowRight, Shield, TrendingUp, Flame, CheckCircle2 } from "lucide-react";

export default function SavingsCalculator() {
  const [units, setUnits] = useState([50]);
  const [incidentRate, setIncidentRate] = useState([8]);
  const [avgDamageCost, setAvgDamageCost] = useState([350]);

  const annualIncidents = Math.round((units[0] * incidentRate[0]) / 100);
  const annualDamageCost = annualIncidents * avgDamageCost[0];
  const preventionRate = 0.75;
  const annualSavings = Math.round(annualDamageCost * preventionRate);
  const monthlySavings = Math.round(annualSavings / 12);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                <span>Smoke Detection Savings Calculator</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                How much could Roomonitor <span className="text-primary">save you?</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate your potential savings with our smoke detection and monitoring solutions. 
                See how early detection can protect your assets and reduce costly damages.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Calculator Card */}
                <Card className="shadow-soft-lg">
                  <CardHeader className="border-b bg-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calculator className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Configure Your Properties</CardTitle>
                        <CardDescription>Adjust the sliders to match your portfolio</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-8">
                    {/* Units slider */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-muted-foreground">Number of Properties</label>
                        <span className="text-lg font-semibold text-foreground">{units[0]} units</span>
                      </div>
                      <Slider
                        value={units}
                        onValueChange={setUnits}
                        min={10}
                        max={500}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>10</span>
                        <span>500</span>
                      </div>
                    </div>

                    {/* Incident rate slider */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-muted-foreground">Annual Incident Rate</label>
                        <span className="text-lg font-semibold text-foreground">{incidentRate[0]}% per year</span>
                      </div>
                      <Slider
                        value={incidentRate}
                        onValueChange={setIncidentRate}
                        min={1}
                        max={20}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1%</span>
                        <span>20%</span>
                      </div>
                    </div>

                    {/* Damage cost slider */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-muted-foreground">Average Damage Cost per Incident</label>
                        <span className="text-lg font-semibold text-foreground">€{avgDamageCost[0]}</span>
                      </div>
                      <Slider
                        value={avgDamageCost}
                        onValueChange={setAvgDamageCost}
                        min={100}
                        max={1000}
                        step={50}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>€100</span>
                        <span>€1,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Card */}
                <div className="space-y-6">
                  <Card className="shadow-soft-lg border-primary/20 bg-gradient-to-br from-card to-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Your Potential Savings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Main savings display */}
                      <div className="text-center py-6 border-b">
                        <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">
                          €{annualSavings.toLocaleString()}
                        </div>
                        <div className="text-muted-foreground">per year</div>
                        <div className="text-sm text-muted-foreground mt-2">
                          (€{monthlySavings.toLocaleString()}/month)
                        </div>
                      </div>

                      {/* Breakdown */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground">Estimated incidents/year</span>
                          <span className="font-semibold">{annualIncidents}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground">Total potential damage</span>
                          <span className="font-semibold">€{annualDamageCost.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground">Prevention rate with early detection</span>
                          <span className="font-semibold text-primary">75%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Card className="gradient-primary text-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">Ready to protect your properties?</h3>
                      <p className="text-white/80 mb-4">
                        Start saving today with Roomonitor's smoke detection solutions.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                          <Link to="/demo">
                            Book a Demo
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                          <Link to="/pricing">View Pricing</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Why Smoke Detection Matters
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Asset Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Detect smoke instantly and prevent costly damage to your properties.
                  </p>
                </Card>
                <Card className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Flame className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Policy Enforcement</h3>
                  <p className="text-sm text-muted-foreground">
                    Enforce non-smoking policies and reduce incidents proactively.
                  </p>
                </Card>
                <Card className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Peace of Mind</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 monitoring ensures you're always protected, even when you're not there.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
