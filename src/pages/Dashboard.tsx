import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Code, Zap, LogOut, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Welcome back, <span className="gradient-text">{user.user_metadata?.full_name || "Developer"}</span>
                </h1>
                <p className="text-muted-foreground">
                  Ready to fix some code? Let's get started.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleSignOut}
                className="border-border/50 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {/* Fix Code Card */}
            <Link to="/fix" className="group">
              <div className="glass-panel rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 glow-box">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fix Code</h3>
                <p className="text-muted-foreground mb-4">
                  Paste your buggy Python code and let AI fix it instantly.
                </p>
                <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                  <span className="text-sm font-medium">Start fixing</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* View Docs Card */}
            <Link to="/docs" className="group">
              <div className="glass-panel rounded-xl p-6 h-full transition-all duration-300 hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to write better bug descriptions and get the best results.
                </p>
                <div className="flex items-center text-accent group-hover:gap-2 transition-all">
                  <span className="text-sm font-medium">Read docs</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Profile Card */}
            <div className="glass-panel rounded-xl p-6 h-full">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Your Profile</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="text-foreground truncate max-w-[180px]">{user.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Member since</span>
                  <span className="text-foreground">
                    {new Date(user.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
            <div className="glass-panel rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">1</div>
                  <div className="text-muted-foreground">Describe your bug</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">2</div>
                  <div className="text-muted-foreground">Paste broken code</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">3</div>
                  <div className="text-muted-foreground">Get fixed code</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
