import { motion } from "framer-motion";
import { BookOpen, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Docs = () => {
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
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Everything you need to know about using AutoFix effectively.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* How to Write Good Bug Descriptions */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Writing Good Bug Descriptions</h2>
                  <p className="text-muted-foreground mt-1">Help AutoFix understand your problem</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  The quality of your bug description directly affects how well AutoFix can repair your code. 
                  Here are some tips for writing effective descriptions:
                </p>

                <div className="code-block p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Good:</p>
                      <p className="text-sm">"Function crashes with ZeroDivisionError when the input list is empty"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Good:</p>
                      <p className="text-sm">"Loop goes out of bounds when iterating over the array"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Bad:</p>
                      <p className="text-sm">"Code doesn't work" or "Fix this"</p>
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Be specific about the error or unexpected behavior</li>
                  <li>Mention any error messages you're seeing</li>
                  <li>Describe the expected vs actual behavior</li>
                  <li>Include relevant context (input values, edge cases)</li>
                </ul>
              </div>
            </motion.section>

            {/* What Bugs Can AutoFix Handle */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Supported Bug Types</h2>
                  <p className="text-muted-foreground mt-1">What AutoFix can fix</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="code-block p-4">
                  <h3 className="font-semibold text-foreground mb-2">Logic Errors</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Off-by-one errors</li>
                    <li>• Incorrect conditionals</li>
                    <li>• Wrong operators</li>
                    <li>• Missing null/empty checks</li>
                  </ul>
                </div>
                <div className="code-block p-4">
                  <h3 className="font-semibold text-foreground mb-2">Common Mistakes</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ZeroDivisionError</li>
                    <li>• IndexError</li>
                    <li>• KeyError</li>
                    <li>• TypeError</li>
                  </ul>
                </div>
                <div className="code-block p-4">
                  <h3 className="font-semibold text-foreground mb-2">Control Flow</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Infinite loops</li>
                    <li>• Missing return statements</li>
                    <li>• Incorrect loop bounds</li>
                    <li>• Early termination issues</li>
                  </ul>
                </div>
                <div className="code-block p-4">
                  <h3 className="font-semibold text-foreground mb-2">Data Handling</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Incorrect type conversions</li>
                    <li>• Missing data validation</li>
                    <li>• Scope issues</li>
                    <li>• Variable shadowing</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Current Limitations */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Current Limitations</h2>
                  <p className="text-muted-foreground mt-1">What AutoFix cannot do (yet)</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  While AutoFix is powerful, it has some limitations you should be aware of:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Python Only:</span>
                      <span className="ml-2">Currently only supports Python code. Support for other languages is planned.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Single File:</span>
                      <span className="ml-2">Works best with single-file code snippets. Multi-file project support is limited.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Code Size:</span>
                      <span className="ml-2">Best results with functions under 100 lines. Larger codebases may have reduced accuracy.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Complex Logic:</span>
                      <span className="ml-2">Highly complex algorithms or domain-specific logic may not be fixed accurately.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">External Dependencies:</span>
                      <span className="ml-2">Issues related to external libraries or APIs may require manual intervention.</span>
                    </div>
                  </li>
                </ul>

                <p className="mt-6 text-sm">
                  We're continuously improving AutoFix. Have feedback or suggestions? 
                  Reach out to us on GitHub.
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Docs;
