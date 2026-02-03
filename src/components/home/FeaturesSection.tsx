import { motion } from "framer-motion";
import { Sparkles, Shield, Truck, CreditCard } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Qualité Premium",
    description: "Parfums français identiques aux originaux des grandes maisons",
  },
  {
    icon: Shield,
    title: "Garantie Satisfaction",
    description: "Produits authentiques et conformes à vos attentes",
  },
  {
    icon: Truck,
    title: "Livraison Express",
    description: "Expédition rapide vers toutes les wilayas d'Algérie",
  },
  {
    icon: CreditCard,
    title: "Paiement à la Livraison",
    description: "Payez en espèces à la réception de votre commande",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gold/20 rounded-full flex items-center justify-center border-2 border-gold/30">
                <feature.icon className="h-10 w-10 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
