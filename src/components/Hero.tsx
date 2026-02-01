import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced animated background with multiple glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.6, 0.25],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:border-cyan-500/50 transition-colors">
              <Sparkles className="w-4 h-4 animate-pulse" />
              ✨ AI-Powered Code Repair
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
              Fix Your Code
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-pulse">
                Instantly
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Let AI trained on thousands of real-world bug fixes handle your Python errors. Fast, secure, and simple.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/fix" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 group">
                <Zap className="w-5 h-5 mr-2" />
                Try AutoFix Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50">
                <Code2 className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </a>
          </motion.div>

          {/* Code preview mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="glass-panel rounded-2xl p-1 glow-box border-cyan-500/30 relative">
              <div className="bg-card/80 rounded-xl overflow-hidden backdrop-blur">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-border/50 bg-card/40">
                  <motion.div 
                    animate={{ backgroundColor: ["rgb(239, 68, 68)", "rgb(239, 68, 68)"] }}
                    className="w-3 h-3 rounded-full bg-destructive/70"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">calculate.py</span>
                </div>
                
                {/* Code content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="flex gap-6 min-w-max">
                    <div className="text-muted-foreground/40 select-none whitespace-pre">1
2
3
4
5
6
7</div>
                    <div className="whitespace-pre">
                      <span className="text-cyan-400">def</span> <span className="text-blue-400">calculate_total</span>(items):
                          total = <span className="text-cyan-400">0</span>
                          <span className="text-red-400 line-through">for i in range</span> <span className="text-green-400"># ✗ Buggy</span>
                          
                          <span className="text-green-400">for</span> item <span className="text-green-400">in</span> items:
                              total += item
                          <span className="text-green-400">return</span> total  <span className="text-emerald-400"># ✓ Fixed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div 
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-8 mt-12 w-full justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">98%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">&lt;2s</div>
                <div className="text-xs text-muted-foreground">Fix Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">∞</div>
                <div className="text-xs text-muted-foreground">Free Uses</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 section-fade" />
    </section>
  );
};

export default Hero;
