import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    title: "The Future of AI-Powered Business Automation",
    excerpt: "Explore how agentic AI is transforming business operations and what it means for your organization.",
    category: "AI & Automation",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "5 Signs Your Business Needs Intelligent Automation",
    excerpt: "Learn the key indicators that your organization is ready to scale with AI-powered workflows.",
    category: "Business Strategy",
    date: "Dec 10, 2024",
    readTime: "4 min read",
  },
  {
    title: "How to Calculate ROI on Automation Investments",
    excerpt: "A practical guide to measuring the real impact of automation on your bottom line.",
    category: "Finance",
    date: "Dec 5, 2024",
    readTime: "7 min read",
  },
  {
    title: "Case Study: Reducing Manual Triage by 70%",
    excerpt: "How a legal firm transformed their document processing workflow with Resilient AI.",
    category: "Case Study",
    date: "Nov 28, 2024",
    readTime: "6 min read",
  },
  {
    title: "Compliance in the Age of AI Automation",
    excerpt: "Understanding how to maintain regulatory compliance while leveraging AI agents.",
    category: "Compliance",
    date: "Nov 20, 2024",
    readTime: "8 min read",
  },
  {
    title: "Building a Human + AI Collaborative Workflow",
    excerpt: "Best practices for integrating AI agents with your existing team structure.",
    category: "Team Management",
    date: "Nov 15, 2024",
    readTime: "5 min read",
  },
];

const Resources = () => {
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
              Resources & <span className="bg-clip-text text-transparent bg-gradient-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert insights on AI automation, business strategy, and digital transformation.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <Badge className="w-fit mb-4">Featured Article</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    The Complete Guide to Agentic AI for Business Leaders
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to know about implementing AI agents in your organization, from strategy to execution.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Dec 18, 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      12 min read
                    </span>
                  </div>
                  <Button className="w-fit bg-gradient-primary">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-gradient-accent rounded-lg h-64 md:h-auto flex items-center justify-center">
                  <p className="text-muted-foreground">Featured image placeholder</p>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Blog Grid */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-shadow group cursor-pointer">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-20"
          >
            <Card className="p-12 text-center bg-gradient-primary text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
              <p className="text-lg mb-6 opacity-90">
                Subscribe to our newsletter for the latest insights on AI automation and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
