import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">AutoFix</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              AutoFix is an AI-powered tool that automatically repairs buggy Python code. 
              We're on a mission to make debugging faster and less frustrating for developers everywhere.
            </p>
          </motion.div>

          {/* What is AutoFix */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">What is AutoFix?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AutoFix is an intelligent code repair tool that uses machine learning models 
                    trained on thousands of real-world Python bug fixes. Unlike simple linters or 
                    syntax checkers, AutoFix understands the context of your code and can fix 
                    actual logic errors.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Simply describe the bug you're experiencing, paste your broken code, and 
                    AutoFix will analyze the problem and generate a corrected version. It's like 
                    having a senior developer review your code instantly.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why AutoFix Exists */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Why We Built This</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Debugging is one of the most time-consuming parts of software development. 
                    Developers spend hours tracking down bugs that could be fixed in seconds 
                    with the right tools.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We built AutoFix to leverage the power of AI to automate this tedious work. 
                    By training on real bug-fix patterns, our model understands common mistakes 
                    and knows how to correct them—saving you time and frustration.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Who It's For */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Who It's For</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Students & Learners</h3>
                      <p className="leading-relaxed">
                        Learning to code is hard. AutoFix helps you understand what went wrong 
                        and shows you the correct approach, accelerating your learning.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Professional Developers</h3>
                      <p className="leading-relaxed">
                        Ship faster by automating tedious debugging. Focus on building features 
                        instead of hunting down bugs.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Development Teams</h3>
                      <p className="leading-relaxed">
                        Improve code quality across your team. AutoFix catches common mistakes 
                        before they make it to production.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
