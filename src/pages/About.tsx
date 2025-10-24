import { motion } from "framer-motion";
import { Target, Users, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to eliminate busywork and empower teams to focus on what matters most.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Your success is our success. We build solutions that solve real problems for real businesses.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We leverage cutting-edge AI to create automation solutions that actually work in the real world.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Security, compliance, and transparency are built into everything we do.",
  },
];

const About = () => {
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
              About <span className="bg-clip-text text-transparent bg-gradient-primary">Resilient Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're building the future of work—where AI handles the repetitive tasks and humans focus on creativity, strategy, and growth.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <Card className="p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Resilient Solutions was born from a simple observation: businesses were drowning in repetitive tasks that consumed valuable time and energy. Our founders, having experienced this pain firsthand across various industries, envisioned a different future.
                </p>
                <p>
                  We set out to create an intelligent automation platform that doesn't just replace human effort but amplifies it. By combining advanced AI with deep domain expertise, we've built a system where a Master AI Manager orchestrates specialized agents to handle complex workflows autonomously.
                </p>
                <p>
                  Today, we serve over 500 companies across legal, healthcare, retail, logistics, and hospitality sectors, helping them save millions of hours and redirect their teams toward high-impact work.
                </p>
              </div>
            </Card>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="bg-clip-text text-transparent bg-gradient-primary">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                    <value.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="p-12 bg-gradient-accent">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "500+", label: "Clients Worldwide" },
                  { value: "10M+", label: "Tasks Automated" },
                  { value: "70%", label: "Avg. Time Saved" },
                  { value: "99.9%", label: "Platform Uptime" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
