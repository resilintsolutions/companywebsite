import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, ShoppingBag, GraduationCap, Headphones, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Brain,
    title: "Resilient AI",
    description: "Agentic automation with Master AI Manager orchestrating specialized agents for end-to-end workflows.",
    benefits: ["Cut manual triage by 70%", "3x faster execution", "24/7 intelligent monitoring"],
    href: "/services/ai",
    color: "violet",
  },
  {
    icon: ShoppingBag,
    title: "Resilient eShop",
    description: "AI-powered e-commerce platform with intelligent inventory, pricing, and customer engagement.",
    benefits: ["Dynamic pricing optimization", "Automated inventory management", "Predictive demand forecasting"],
    href: "/services/eshop",
    color: "cyan",
  },
  {
    icon: GraduationCap,
    title: "Resilient EduTech",
    description: "Personalized learning experiences powered by AI tutors and adaptive curriculum systems.",
    benefits: ["Personalized learning paths", "Real-time progress tracking", "Automated assessment"],
    href: "/services/edutech",
    color: "violet",
  },
  {
    icon: Headphones,
    title: "BPO Services",
    description: "Business process outsourcing enhanced with AI agents for quality, speed, and scalability.",
    benefits: ["Human + AI collaboration", "Quality assurance automation", "Scalable operations"],
    href: "/services/bpo",
    color: "cyan",
  },
];

const Services = () => {
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
              Our <span className="bg-clip-text text-transparent bg-gradient-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Four pillars of intelligent automation designed to transform your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${service.color}/10 mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="group/btn" asChild>
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
