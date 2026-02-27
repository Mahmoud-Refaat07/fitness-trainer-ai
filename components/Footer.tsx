import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-orange-600/20 bg-black/60 backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-orange-600/10 border border-orange-600/20 rounded group-hover:bg-orange-600/20 transition-colors">
                <ZapIcon className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-xl font-bold font-mono tracking-tight">
                Fitt<span className="text-orange-500">Trainer</span>
                <span className="text-orange-600/50">.ai</span>
              </span>
            </Link>
            <p className="text-xs text-gray-600 font-mono">
              © 2026 fittTrainer.ai — All rights reserved by Mahmoud Refaat
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm font-mono">
            {["About", "Terms", "Privacy", "Contact", "Blog", "Help"].map(
              (label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className="text-gray-500 hover:text-orange-400 transition-colors duration-200"
                >
                  {label}
                </Link>
              ),
            )}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-2 border border-orange-600/20 rounded-md bg-black/40 font-mono">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-xs text-orange-400 tracking-widest">
              SYSTEM OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-600/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
