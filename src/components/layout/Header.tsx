import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Phone, Shield } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "/JeanPatouCollection.jpg";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/grossistes", label: "Grossistes" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const location = useLocation();
  const itemCount = getItemCount();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Jean Patou Paris" className="h-14 w-14 rounded-full object-cover" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-body text-sm tracking-wide transition-colors duration-300 gold-underline ${
                  location.pathname === link.href
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/213698324145"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            <Link
              to="/admin/login"
              className="p-2 text-foreground hover:text-gold transition-colors"
              title="Admin Login"
            >
              <Shield className="h-6 w-6" />
            </Link>

            <Link
              to="/panier"
              className="relative p-2 text-foreground hover:text-gold transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-5 w-5 bg-gold text-noir text-xs font-semibold rounded-full flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-body text-base py-2 transition-colors ${
                    location.pathname === link.href
                      ? "text-gold"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/213770965737"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground py-2"
              >
                <Phone className="h-4 w-4" />
                Contactez-nous sur WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
