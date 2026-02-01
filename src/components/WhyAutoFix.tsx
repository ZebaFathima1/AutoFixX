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
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AutoFix</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the power of AI trained on real-world Python bug fixes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-panel rounded-2xl p-8 h-full hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group-hover:-translate-y-2 border-cyan-500/20">
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500/60 transition-all group-hover:scale-110">
                      <feature.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
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
