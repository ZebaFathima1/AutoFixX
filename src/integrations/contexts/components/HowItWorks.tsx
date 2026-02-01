import { motion } from "framer-motion";
import { MessageSquare, Code, Zap } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe the Bug",
    description: "Tell AutoFix what's wrong with your code in plain English.",
    color: "primary",
  },
  {
    icon: Code,
    title: "Paste Your Code",
    description: "Paste the broken Python code that needs to be fixed.",
    color: "glow-secondary",
  },
  {
    icon: Zap,
    title: "Get Fixed Code",
    description: "Receive corrected code instantly, ready to use.",
    color: "success",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fix your Python bugs in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="glass-panel rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
