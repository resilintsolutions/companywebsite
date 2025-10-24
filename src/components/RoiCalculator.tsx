import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, Calendar } from "lucide-react";

const RoiCalculator = () => {
  const [teamSize, setTeamSize] = useState(10);
  const [tasksPerWeek, setTasksPerWeek] = useState(50);
  const [minutesPerTask, setMinutesPerTask] = useState(30);
  const [hourlyWage, setHourlyWage] = useState(50);

  const [results, setResults] = useState({
    hoursSavedPerMonth: 0,
    costSavingsPerMonth: 0,
    paybackPeriod: 0,
  });

  useEffect(() => {
    // Calculate ROI
    const totalTasksPerMonth = tasksPerWeek * 4;
    const totalMinutesPerMonth = totalTasksPerMonth * minutesPerTask;
    const hoursSaved = (totalMinutesPerMonth / 60) * 0.7; // 70% time savings
    const costSavings = hoursSaved * hourlyWage;
    const estimatedCost = teamSize * 99; // Assuming $99/user/month
    const payback = estimatedCost / costSavings || 0;

    setResults({
      hoursSavedPerMonth: Math.round(hoursSaved),
      costSavingsPerMonth: Math.round(costSavings),
      paybackPeriod: Math.max(0.1, Math.min(payback, 12)),
    });
  }, [teamSize, tasksPerWeek, minutesPerTask, hourlyWage]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4">ROI Calculator</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Calculate Your <span className="bg-clip-text text-transparent bg-gradient-primary">Potential Savings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how much time and money you could save with AI automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Your Details</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="teamSize">Team Size</Label>
                  <Input
                    id="teamSize"
                    type="number"
                    min="1"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="tasksPerWeek">Repetitive Tasks per Week</Label>
                  <Input
                    id="tasksPerWeek"
                    type="number"
                    min="1"
                    value={tasksPerWeek}
                    onChange={(e) => setTasksPerWeek(parseInt(e.target.value) || 1)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="minutesPerTask">Average Minutes per Task</Label>
                  <Input
                    id="minutesPerTask"
                    type="number"
                    min="1"
                    value={minutesPerTask}
                    onChange={(e) => setMinutesPerTask(parseInt(e.target.value) || 1)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="hourlyWage">Average Hourly Wage ($)</Label>
                  <Input
                    id="hourlyWage"
                    type="number"
                    min="1"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(parseInt(e.target.value) || 1)}
                    className="mt-2"
                  />
                </div>
              </div>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-primary text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6" />
                  <h4 className="text-lg font-semibold">Hours Saved per Month</h4>
                </div>
                <motion.div
                  key={results.hoursSavedPerMonth}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl font-bold"
                >
                  {results.hoursSavedPerMonth}
                </motion.div>
                <p className="text-sm opacity-90 mt-1">hours back to your team</p>
              </Card>

              <Card className="p-6 bg-gradient-accent">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-accent" />
                  <h4 className="text-lg font-semibold">Cost Savings per Month</h4>
                </div>
                <motion.div
                  key={results.costSavingsPerMonth}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl font-bold text-accent"
                >
                  ${results.costSavingsPerMonth.toLocaleString()}
                </motion.div>
                <p className="text-sm text-muted-foreground mt-1">in labor costs saved</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-cyan" />
                  <h4 className="text-lg font-semibold">Payback Period</h4>
                </div>
                <motion.div
                  key={results.paybackPeriod}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl font-bold text-cyan"
                >
                  {results.paybackPeriod.toFixed(1)}
                </motion.div>
                <p className="text-sm text-muted-foreground mt-1">months to ROI</p>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6" />
                  <h4 className="font-semibold">Annual Impact</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="opacity-90">Annual Hours Saved:</span>
                    <span className="font-bold">{(results.hoursSavedPerMonth * 12).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Annual Cost Savings:</span>
                    <span className="font-bold">${(results.costSavingsPerMonth * 12).toLocaleString()}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoiCalculator;
