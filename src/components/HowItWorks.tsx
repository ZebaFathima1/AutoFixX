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
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
            How It <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to fix your Python bugs with AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500/40 to-transparent" />
              )}

              <div className="glass-panel rounded-2xl p-8 h-full hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group-hover:-translate-y-2 border-cyan-500/20">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500/60 transition-all group-hover:scale-110">
                    <step.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-foreground">
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
