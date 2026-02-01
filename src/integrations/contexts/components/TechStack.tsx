import { motion } from "framer-motion";

const technologies = [
  { name: "Python", color: "from-yellow-500 to-blue-500" },
  { name: "Hugging Face", color: "from-yellow-400 to-orange-500" },
  { name: "FastAPI", color: "from-teal-400 to-green-500" },
  { name: "Cloudflare", color: "from-orange-400 to-red-500" },
];

const TechStack = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built With Modern <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powered by industry-leading tools and frameworks
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-panel rounded-xl px-8 py-4 hover:border-primary/30 transition-all duration-300"
            >
              <span className="font-mono font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
