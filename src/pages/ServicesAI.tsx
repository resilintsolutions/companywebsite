import { motion } from "framer-motion";
import { Brain, Zap, Target, Shield, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Master AI Manager",
    description: "Orchestrates specialized agents to plan, execute, and optimize complex workflows automatically.",
  },
  {
    icon: Zap,
    title: "Specialized Agents",
    description: "Pre-trained agents for Marketing, Sales, Product, Operations, Finance, and Research domains.",
  },
  {
    icon: Target,
    title: "Task Intelligence",
    description: "Automatically breaks down complex projects into actionable tasks with smart prioritization.",
  },
  {
    icon: Shield,
    title: "Compliance Built-In",
    description: "Every action is logged, audited, and compliant with industry standards and regulations.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Agents improve over time, learning from patterns and outcomes to optimize performance.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "Seamless collaboration between AI agents and human experts for critical decisions.",
  },
];

const useCases = [
  {
    title: "Customer Support Automation",
    description: "Automatically triage, route, and respond to customer inquiries with 90% accuracy.",
    metrics: "70% reduction in response time, 85% customer satisfaction",
  },
  {
    title: "Document Processing",
    description: "Extract, validate, and process documents across legal, financial, and operational workflows.",
    metrics: "95% accuracy, 10x faster processing",
  },
  {
    title: "Marketing Campaign Orchestration",
    description: "Plan, execute, and optimize multi-channel campaigns with data-driven insights.",
    metrics: "3x ROI improvement, 50% time savings",
  },
  {
    title: "Financial Reporting",
    description: "Automate expense tracking, reconciliation, and report generation with real-time insights.",
    metrics: "99.9% accuracy, instant reporting",
  },
];

const ServicesAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20 mb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-4">Resilient AI</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Agentic Automation That <span className="bg-clip-text text-transparent bg-gradient-primary">Works for You</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our Master AI Manager orchestrates specialized agents to handle complex workflows end-to-end,
                so your team can focus on strategic growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-primary" asChild>
                  <a href="/#demo">Try Interactive Demo</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Key <span className="bg-clip-text text-transparent bg-gradient-primary">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need for intelligent, scalable automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <feature.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Use Cases */}
        <section className="bg-gradient-accent py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Real-World <span className="bg-clip-text text-transparent bg-gradient-primary">Use Cases</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See how businesses are transforming operations with Resilient AI.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full">
                      <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                        {useCase.metrics}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 text-center bg-gradient-primary text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Workflows?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of companies automating with confidence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/#demo">Try Demo</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesAI;
