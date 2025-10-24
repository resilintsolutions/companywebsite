import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Zap, TrendingUp, Target, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: AlertCircle,
    pain: "Manual Triage Chaos",
    solution: "AI-Powered Auto-Routing",
    outcome: "70% reduction in manual sorting",
    color: "violet",
  },
  {
    icon: Zap,
    pain: "Repetitive Task Overload",
    solution: "Intelligent Automation Agents",
    outcome: "3x faster workflow execution",
    color: "cyan",
  },
  {
    icon: TrendingUp,
    pain: "Data Scattered Everywhere",
    solution: "Unified Analytics Dashboard",
    outcome: "Real-time insights across teams",
    color: "violet",
  },
  {
    icon: Target,
    pain: "Slow Decision Making",
    solution: "Predictive Intelligence",
    outcome: "40% faster strategic decisions",
    color: "cyan",
  },
  {
    icon: Shield,
    pain: "Compliance Nightmares",
    solution: "Built-in Compliance Checks",
    outcome: "100% audit-ready workflows",
    color: "violet",
  },
];

const PainToSolution = () => {
  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From <span className="text-destructive">Pain Points</span> to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we transform your biggest challenges into competitive advantages.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Card className="p-8 hover:shadow-xl transition-shadow">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Pain Point */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mb-4">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-destructive">The Problem</h3>
            <p className="text-lg">{step.pain}</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <step.icon className={`w-12 h-12 text-${step.color}`} />
            </motion.div>
          </div>

          {/* Solution */}
          <div className="text-center md:text-right">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-accent">Our Solution</h3>
            <p className="text-lg mb-2">{step.solution}</p>
            <p className="text-sm font-medium text-muted-foreground">{step.outcome}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PainToSolution;
