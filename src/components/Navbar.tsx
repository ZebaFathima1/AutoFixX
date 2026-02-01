import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, LogIn, LayoutDashboard } from "lucide-react";
import AutoFixXLogo from "./AutoFixXLogo";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();
  // Dark mode toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (!root.classList.contains("dark")) {
      root.classList.add("dark");
    }
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/fix", label: "Try AutoFix" },
    { href: "/docs", label: "Docs" },
    { href: "/about", label: "About" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/10 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <AutoFixXLogo />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AutoFixX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                  : "text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          {!loading && (
            user ? (
              <Link to="/dashboard">
                <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-cyan-400">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                    Get Started
                  </Button>
                </Link>
              </>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-cyan-500/10 bg-card/50 backdrop-blur px-6 py-4 space-y-2"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive(link.href)
                  ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                  : "text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {!loading && (
            user ? (
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full mt-2">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                    Get Started
                  </Button>
                </Link>
              </>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
