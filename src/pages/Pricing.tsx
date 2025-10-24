import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    price: "$99",
    period: "/user/month",
    description: "Perfect for small teams getting started with automation.",
    features: [
      "Up to 10 users",
      "Basic AI agents (Marketing, Sales)",
      "1,000 tasks/month",
      "Email support",
      "Basic analytics",
      "Standard compliance",
    ],
    unavailable: [
      "Advanced agents",
      "Custom workflows",
      "Priority support",
      "Advanced security",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$249",
    period: "/user/month",
    description: "For growing teams that need advanced automation capabilities.",
    features: [
      "Up to 50 users",
      "All AI agents included",
      "10,000 tasks/month",
      "Priority support (24/5)",
      "Advanced analytics & reporting",
      "Full compliance suite",
      "Custom workflows",
      "API access",
    ],
    unavailable: [
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom requirements.",
    features: [
      "Unlimited users",
      "All AI agents + custom agents",
      "Unlimited tasks",
      "24/7 priority support",
      "Enterprise analytics",
      "Advanced security & compliance",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "Custom training",
      "White-label options",
    ],
    unavailable: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "Users", starter: "Up to 10", professional: "Up to 50", enterprise: "Unlimited" },
  { name: "Monthly Tasks", starter: "1,000", professional: "10,000", enterprise: "Unlimited" },
  { name: "AI Agents", starter: "2 Basic", professional: "6 Full Suite", enterprise: "Custom" },
  { name: "Support", starter: "Email", professional: "Priority (24/5)", enterprise: "24/7 + Dedicated" },
  { name: "Custom Workflows", starter: false, professional: true, enterprise: true },
  { name: "API Access", starter: false, professional: true, enterprise: true },
  { name: "SLA", starter: false, professional: false, enterprise: true },
  { name: "White-label", starter: false, professional: false, enterprise: true },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, <span className="bg-clip-text text-transparent bg-gradient-primary">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              All plans include compliance basics & human-in-the-loop options.
            </p>
          </motion.div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={tier.popular ? "md:-mt-4" : ""}
              >
                <Card className={`p-8 h-full relative ${tier.popular ? "border-accent shadow-2xl" : ""}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-primary">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground ml-2">{tier.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {tier.unavailable.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={tier.popular ? "w-full bg-gradient-primary" : "w-full"} 
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to="/contact">{tier.cta}</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Detailed <span className="bg-clip-text text-transparent bg-gradient-primary">Comparison</span>
            </h2>
            
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold bg-accent/10">Professional</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={feature.name} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="text-center p-4">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-accent mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            feature.starter
                          )}
                        </td>
                        <td className="text-center p-4 bg-accent/5">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="w-5 h-5 text-accent mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            feature.professional
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-accent mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            feature.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-primary">Questions</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Can I switch plans anytime?",
                  a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise plans.",
                },
                {
                  q: "Is there a setup fee?",
                  a: "No setup fees for Starter and Professional plans. Enterprise plans may include custom onboarding.",
                },
                {
                  q: "What happens if I exceed my task limit?",
                  a: "You'll receive a notification at 80% usage. Additional tasks are available at $0.10/task or you can upgrade.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
