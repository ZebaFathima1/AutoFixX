import { Link } from "react-router-dom";
import { Terminal, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-semibold text-foreground">AutoFix</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              AutoFix uses AI trained on real-world bug fixes to automatically repair your Python code in seconds.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fix" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Try AutoFix
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} AutoFix — AI for fixing code
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Built with Python, Hugging Face, FastAPI & Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
