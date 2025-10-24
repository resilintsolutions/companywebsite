import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Resilient Solutions cut our manual triage time by 70%. Our team now focuses on strategic work instead of busywork.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechCorp Inc.",
    initials: "SC",
  },
  {
    quote: "The ROI was immediate. Within 3 months, we automated 80% of our repetitive tasks and saw a 3x improvement in workflow speed.",
    author: "Michael Rodriguez",
    role: "Chief Innovation Officer",
    company: "Global Retail Co.",
    initials: "MR",
  },
  {
    quote: "Their agentic AI approach is revolutionary. It's like having a tireless team that never sleeps and always delivers quality results.",
    author: "Dr. Emily Watson",
    role: "Director of Research",
    company: "MedTech Solutions",
    initials: "EW",
  },
  {
    quote: "Compliance used to be a nightmare. Now with built-in checks, we're always audit-ready and our legal team can breathe easier.",
    author: "James Patterson",
    role: "General Counsel",
    company: "FinServe Group",
    initials: "JP",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="bg-clip-text text-transparent bg-gradient-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from companies transforming their operations.
            </p>
          </div>

          <div className="relative">
            <Card className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="w-12 h-12 text-accent mb-6" />
                  
                  <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 bg-gradient-primary">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-semibold">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={previous}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-accent w-8" : "bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
