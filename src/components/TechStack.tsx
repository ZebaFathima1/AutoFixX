import { motion } from "framer-motion";

const technologies = [
  { name: "Python", color: "from-yellow-500 to-blue-500" },
  { name: "Hugging Face", color: "from-yellow-400 to-orange-500" },
  { name: "FastAPI", color: "from-teal-400 to-green-500" },
  { name: "Cloudflare", color: "from-orange-400 to-red-500" },
];

const TechStack = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built With Modern <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powered by industry-leading tools and frameworks
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="glass-panel rounded-xl px-6 py-4 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 border-cyan-500/20">
                <div className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-mono font-bold text-sm`}>
                  {tech.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
