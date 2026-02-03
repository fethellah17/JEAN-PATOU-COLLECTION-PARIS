import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Truck, BadgePercent, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: BadgePercent,
    title: "Prix Compétitifs",
    description: "Tarifs dégressifs selon les quantités commandées",
  },
  {
    icon: Package,
    title: "Stock Permanent",
    description: "Disponibilité garantie en grandes quantités",
  },
  {
    icon: Truck,
    title: "Livraison Nationale",
    description: "Expédition dans les 58 wilayas d'Algérie",
  },
];

export const WholesaleSection = () => {
  return (
    <section className="py-24 bg-noir text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(201, 169, 98, 0.1) 35px,
              rgba(201, 169, 98, 0.1) 70px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              Espace Professionnel
            </p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Devenez Partenaire
              <span className="block text-gold">Jean Patou Collection</span>
            </h2>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">
              Vous êtes propriétaire d'une boutique de parfumerie ou revendeur en Algérie ?
              Découvrez nos offres grossistes et super gros avec des tarifs exceptionnels.
            </p>

            <Button asChild variant="gold" size="lg">
              <Link to="/grossistes">
                Découvrir les offres
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-5 p-6 bg-cream/5 rounded-sm border border-cream/10 hover:border-gold/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-cream mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-cream/60 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
