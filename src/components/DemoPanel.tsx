import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, CheckCircle, Clock, Zap, Users, ShoppingCart, Code, DollarSign, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const agents = [
  { id: "marketing", name: "Marketing Agent", icon: Zap, color: "violet" },
  { id: "sales", name: "Sales/CS Agent", icon: Users, color: "cyan" },
  { id: "product", name: "Product/Eng Agent", icon: Code, color: "violet" },
  { id: "ops", name: "Ops/HR Agent", icon: Clock, color: "cyan" },
  { id: "finance", name: "Finance Agent", icon: DollarSign, color: "violet" },
  { id: "research", name: "Research/Intel Agent", icon: Search, color: "cyan" },
];

interface Task {
  id: string;
  agent: string;
  title: string;
  status: "queued" | "in-progress" | "completed";
}

const DemoPanel = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", agent: "marketing", title: "Analyze campaign performance", status: "queued" },
    { id: "2", agent: "sales", title: "Follow up on leads", status: "queued" },
    { id: "3", agent: "product", title: "Review bug reports", status: "queued" },
    { id: "4", agent: "ops", title: "Process onboarding docs", status: "queued" },
    { id: "5", agent: "finance", title: "Generate expense report", status: "queued" },
    { id: "6", agent: "research", title: "Compile market insights", status: "queued" },
  ]);

  const [logs, setLogs] = useState<string[]>([]);

  const handleStart = () => {
    setIsRunning(true);
    setShowSuccess(false);
    setLogs(["[Master AI] Initializing workflow orchestration..."]);

    // Simulate task processing
    let taskIndex = 0;
    const interval = setInterval(() => {
      if (taskIndex < tasks.length) {
        const task = tasks[taskIndex];
        
        setTasks((prev) =>
          prev.map((t) =>
            t.id === task.id ? { ...t, status: "in-progress" as const } : t
          )
        );

        setLogs((prev) => [...prev, `[Master AI] Assigning task to ${agents.find(a => a.id === task.agent)?.name}...`]);

        setTimeout(() => {
          setTasks((prev) =>
            prev.map((t) =>
              t.id === task.id ? { ...t, status: "completed" as const } : t
            )
          );
          setLogs((prev) => [...prev, `[${agents.find(a => a.id === task.agent)?.name}] ✓ ${task.title} completed`]);
        }, 1000);

        taskIndex++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setShowSuccess(true);
        setLogs((prev) => [...prev, "[Master AI] All tasks completed successfully! 🎉"]);
      }
    }, 2000);
  };

  const handleReset = () => {
    setIsRunning(false);
    setShowSuccess(false);
    setTasks((prev) => prev.map((t) => ({ ...t, status: "queued" as const })));
    setLogs([]);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4">Interactive Demo</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See the <span className="bg-clip-text text-transparent bg-gradient-primary">Master AI Manager</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how our AI orchestrates multiple specialized agents to automate your workflows.
            </p>
          </div>

          <Card className="p-8">
            {/* Control Panel */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Button
                  onClick={isRunning ? () => {} : showSuccess ? handleReset : handleStart}
                  disabled={isRunning}
                  size="lg"
                  className="bg-gradient-primary"
                >
                  {isRunning ? (
                    <>
                      <Pause className="mr-2 w-5 h-5" /> Running...
                    </>
                  ) : showSuccess ? (
                    <>
                      Reset Demo
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 w-5 h-5" /> Start Automation
                    </>
                  )}
                </Button>
                {showSuccess && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 text-green-600"
                  >
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium">Workflow Complete!</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Agents Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {agents.map((agent) => {
                const agentTasks = tasks.filter((t) => t.agent === agent.id);
                const isActive = agentTasks.some((t) => t.status === "in-progress");
                const isComplete = agentTasks.every((t) => t.status === "completed");

                return (
                  <motion.div
                    key={agent.id}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isActive
                        ? "border-accent bg-accent/10 shadow-lg"
                        : isComplete
                        ? "border-green-500 bg-green-500/10"
                        : "border-border bg-card"
                    }`}
                  >
                    <agent.icon className={`w-8 h-8 mb-2 ${isActive ? "text-accent animate-pulse" : isComplete ? "text-green-600" : "text-muted-foreground"}`} />
                    <div className="text-sm font-medium">{agent.name}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tasks List */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Active Tasks</h3>
              <div className="space-y-2">
                {tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-4 rounded-lg border flex items-center justify-between ${
                      task.status === "in-progress"
                        ? "border-accent bg-accent/5"
                        : task.status === "completed"
                        ? "border-green-500 bg-green-500/5"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {task.status === "completed" ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : task.status === "in-progress" ? (
                        <Clock className="w-5 h-5 text-accent animate-pulse" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-muted" />
                      )}
                      <span>{task.title}</span>
                    </div>
                    <Badge variant={task.status === "completed" ? "default" : "secondary"}>
                      {task.status.replace("-", " ")}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Logs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Activity Log</h3>
              <div className="bg-primary/5 rounded-lg p-4 h-48 overflow-y-auto font-mono text-sm">
                <AnimatePresence>
                  {logs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-2 text-muted-foreground"
                    >
                      {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {logs.length === 0 && (
                  <div className="text-muted-foreground/50">
                    Click "Start Automation" to begin...
                  </div>
                )}
              </div>
            </div>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <Button size="lg" variant="outline" asChild>
                  <a href="#lead-form">Get Started with Your Team</a>
                </Button>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoPanel;
