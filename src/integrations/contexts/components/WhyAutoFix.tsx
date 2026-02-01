import { motion } from "framer-motion";
import { Brain, Bug, Code2, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Trained on Real Bug Fixes",
    description: "Our model learned from thousands of real-world Python bug fixes to understand common patterns and solutions.",
  },
  {
    icon: Bug,
    title: "Handles Real Logic Errors",
    description: "Goes beyond syntax errors to fix actual logic bugs like off-by-one errors, null checks, and more.",
  },
  {
    icon: Code2,
    title: "Built for Developers",
    description: "Clean interface designed by developers, for developers. No unnecessary complexity.",
  },
  {
    icon: Shield,
    title: "Fast & Secure",
    description: "Your code is processed securely and never stored. Get fixes in seconds, not minutes.",
  },
];

const WhyAutoFix = () => {
  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">AutoFix</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful AI that understands your code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAutoFix;
