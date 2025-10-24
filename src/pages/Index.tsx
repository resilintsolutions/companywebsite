import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PainToSolution from "@/components/PainToSolution";
import DemoPanel from "@/components/DemoPanel";
import RoiCalculator from "@/components/RoiCalculator";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const logos = [
    "TechCorp", "GlobalRetail", "MedTech", "FinServe", "LogiFlow", "EduConnect"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted By Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-8">TRUSTED BY LEADING COMPANIES</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {logos.map((logo) => (
                  <div
                    key={logo}
                    className="text-2xl font-bold text-muted-foreground/40 hover:text-accent transition-colors cursor-pointer"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <PainToSolution />
        <DemoPanel />
        <RoiCalculator />
        <TestimonialsCarousel />

        {/* Pricing Preview Section */}
        <section className="py-20 bg-gradient-accent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Flexible <span className="bg-clip-text text-transparent bg-gradient-primary">Pricing</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Plans that scale with your business, from startup to enterprise.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { name: "Starter", price: "$99", desc: "For small teams" },
                  { name: "Professional", price: "$249", desc: "For growing businesses", popular: true },
                  { name: "Enterprise", price: "Custom", desc: "For large organizations" },
                ].map((tier) => (
                  <Card key={tier.name} className={`p-6 ${tier.popular ? "border-accent shadow-lg" : ""}`}>
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-accent mb-2">{tier.price}</div>
                    <p className="text-sm text-muted-foreground">{tier.desc}</p>
                  </Card>
                ))}
              </div>
              
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">
                  View Full Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-12 text-center bg-gradient-primary text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Automate Your Business?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join hundreds of companies saving 70% of their time with AI-powered automation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">Book a Discovery Call</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                    asChild
                  >
                    <a href="#demo">Try Live Demo</a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
