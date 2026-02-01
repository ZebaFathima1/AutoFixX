import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Copy, Check, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { fixCode } from "@/lib/api";

const FixPage = () => {
  const [bugDescription, setBugDescription] = useState("");
  const [brokenCode, setBrokenCode] = useState("");
  const [fixedCode, setFixedCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Auto-fix when both inputs have content
  const handleBrokenCodeChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const code = e.target.value;
    setBrokenCode(code);
    setError("");
    setSuccess(false);

    // Auto-trigger fix if we have both bug description and code
    if (bugDescription.trim() && code.trim() && code.length > 10) {
      setIsLoading(true);
      await autoFixCode(bugDescription, code);
    }
  };

  const handleBugDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBugDescription(e.target.value);
  };

  const autoFixCode = async (description: string, code: string) => {
    try {
      const response = await fixCode({
        bugDescription: description,
        brokenCode: code,
      });

      if (response.success && response.fixedCode) {
        setFixedCode(response.fixedCode);
        setSuccess(true);
      } else {
        setFixedCode("");
        setError(response.explanation || "No meaningful fix detected.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred while fixing the code.";
      setError(errorMessage);
      setFixedCode("");
      console.error("Fix error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFixCode = async () => {
    if (!bugDescription.trim() || !brokenCode.trim()) {
      const msg = "Please provide both a bug description and your broken code.";
      setError(msg);
      toast({
        title: "Missing Input",
        description: msg,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess(false);
    setFixedCode("");

    try {
      const response = await fixCode({
        bugDescription,
        brokenCode,
      });

      if (response.success && response.fixedCode) {
        setFixedCode(response.fixedCode);
        setSuccess(true);
        toast({
          title: "Success!",
          description: "Your code has been fixed successfully.",
        });
      } else {
        const errorMsg = response.explanation || "No meaningful fix detected. Try rephrasing the bug.";
        setError(errorMsg);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred while fixing the code. Please try again.";
      setError(errorMessage);
      console.error("Fix error:", err);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fixedCode);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Fixed code copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fix Your <span className="gradient-text">Python Code</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Describe the bug, paste your code, and let AI fix it for you.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Bug Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel rounded-xl overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-muted-foreground">Bug Description</span>
                </div>
                <textarea
                  value={bugDescription}
                  onChange={handleBugDescriptionChange}
                  placeholder="Describe the bug in plain English...&#10;&#10;Example: 'The function crashes when the list is empty'"
                  className="w-full h-48 p-4 bg-transparent text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none"
                />
              </motion.div>

              {/* Broken Code */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-panel rounded-xl overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="text-sm font-medium text-muted-foreground">Broken Python Code</span>
                </div>
                <textarea
                  value={brokenCode}
                  onChange={handleBrokenCodeChange}
                  placeholder="Paste your broken Python code here..."
                  className="w-full h-48 p-4 bg-transparent text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none font-mono text-sm"
                  spellCheck={false}
                />
              </motion.div>
            </div>

            {/* Fix Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={handleFixCode}
                disabled={isLoading}
                className="min-w-48"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Fixing bug... please wait
                  </>
                ) : (
                  "Fix Code"
                )}
              </Button>
            </motion.div>

            {/* Status Messages */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 justify-center mb-6 text-destructive"
              >
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 justify-center mb-6 text-success"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Bug fixed successfully</span>
              </motion.div>
            )}

            {/* Fixed Code Output */}
            {fixedCode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-xl overflow-hidden glow-box"
              >
                <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-sm font-medium text-muted-foreground">Fixed Code</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">{fixedCode}</code>
                </pre>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FixPage;
