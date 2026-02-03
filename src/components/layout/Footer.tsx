import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-noir text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <img src={logo} alt="Jean Patou Paris" className="h-20 w-20 rounded-full object-cover" />
            <p className="text-cream/70 text-sm leading-relaxed">
              L'élégance parisienne accessible en Algérie. Parfums de luxe inspirés des grandes maisons françaises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/boutique", label: "Boutique" },
                { href: "/grossistes", label: "Espace Grossistes" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Catégories</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/boutique?category=homme"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Parfums Homme
                </Link>
              </li>
              <li>
                <Link
                  to="/boutique?category=femme"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Parfums Femme
                </Link>
              </li>
              <li>
                <Link
                  to="/grossistes"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Offres Gros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold mt-0.5" />
                <div className="text-sm">
                  <p className="text-cream/70">+213 XX XX XX XX</p>
                  <p className="text-cream/50 text-xs">WhatsApp disponible</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold mt-0.5" />
                <p className="text-cream/70 text-sm">contact@jeanpatou-dz.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <p className="text-cream/70 text-sm">
                  Livraison dans toutes les 58 wilayas d'Algérie
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © 2026 Jean Patou Collection Paris. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-cream/50">
              <span>Paiement à la livraison</span>
              <span>•</span>
              <span>Livraison nationale</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
