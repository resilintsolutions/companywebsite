import { motion } from "framer-motion";
import { Scale, HeartPulse, ShoppingCart, Truck, Hotel, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Scale,
    title: "Legal",
    description: "Automate document review, contract analysis, and case management with AI-powered precision.",
    benefits: [
      "70% faster document processing",
      "Automated contract review & risk assessment",
      "Case law research in seconds",
      "Full compliance & audit trails",
    ],
    color: "violet",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Streamline patient workflows, automate administrative tasks, and enhance care coordination.",
    benefits: [
      "Automated patient intake & scheduling",
      "Intelligent medical record management",
      "Claims processing & billing automation",
      "HIPAA-compliant workflows",
    ],
    color: "cyan",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Optimize inventory, personalize customer experiences, and automate order fulfillment.",
    benefits: [
      "Predictive inventory management",
      "Dynamic pricing optimization",
      "Automated order processing",
      "Personalized marketing campaigns",
    ],
    color: "violet",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Enhance supply chain visibility, optimize routes, and automate tracking & reporting.",
    benefits: [
      "Real-time shipment tracking",
      "Route optimization & fuel savings",
      "Automated dispatch & scheduling",
      "Predictive maintenance alerts",
    ],
    color: "cyan",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Elevate guest experiences with automated booking, concierge services, and operations management.",
    benefits: [
      "24/7 AI-powered guest support",
      "Automated booking & check-in",
      "Personalized guest recommendations",
      "Operational efficiency gains",
    ],
    color: "violet",
  },
];

const Industries = () => {
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
              Industries We <span className="bg-clip-text text-transparent bg-gradient-primary">Transform</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tailored automation solutions for your industry's unique challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${industry.color}/10 mb-6 group-hover:scale-110 transition-transform`}>
                    <industry.icon className={`w-8 h-8 text-${industry.color}`} />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">{industry.title}</h2>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${industry.color} mt-1.5 flex-shrink-0`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 text-center bg-gradient-accent">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our platform adapts to any business vertical. Let's discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-primary" asChild>
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
