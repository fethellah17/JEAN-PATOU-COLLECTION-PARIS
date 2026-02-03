import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Package, Truck, BadgePercent, Users, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  {
    icon: BadgePercent,
    title: "Tarifs Dégressifs",
    description: "Plus vous commandez, plus le prix unitaire baisse. Jusqu'à 40% d'économies sur les grandes quantités.",
  },
  {
    icon: Package,
    title: "Stock Permanent",
    description: "Disponibilité garantie sur tous nos produits. Jamais de rupture grâce à notre gestion optimisée.",
  },
  {
    icon: Truck,
    title: "Livraison Nationale",
    description: "Expédition rapide vers toutes les 58 wilayas d'Algérie. Service de livraison professionnel.",
  },
  {
    icon: Users,
    title: "Support Dédié",
    description: "Un interlocuteur dédié pour répondre à toutes vos questions et suivre vos commandes.",
  },
];

const pricingTiers = [
  {
    name: "Gros",
    minOrder: "12 unités",
    discount: "Jusqu'à 30%",
    features: ["Prix réduits sur toute la gamme", "Livraison offerte dès 50 unités", "Support prioritaire"],
  },
  {
    name: "Super Gros",
    minOrder: "48 unités",
    discount: "Jusqu'à 40%",
    features: [
      "Meilleurs tarifs du marché",
      "Livraison offerte",
      "Interlocuteur dédié",
      "Délais de paiement négociables",
    ],
    highlighted: true,
  },
];

const Grossistes = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    wilaya: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée avec succès", {
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    setFormData({ company: "", name: "", email: "", phone: "", wilaya: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-noir py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              Espace Professionnel B2B
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">
              Devenez Partenaire Grossiste
            </h1>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Rejoignez notre réseau de revendeurs en Algérie et bénéficiez de tarifs exceptionnels sur notre collection de parfums de luxe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Avantages Partenaires
            </h2>
            <div className="divider-gold mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Nos Offres Grossistes
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des tarifs adaptés à vos besoins, quelle que soit la taille de votre activité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative p-8 rounded-sm ${
                  tier.highlighted
                    ? "bg-noir text-cream border-2 border-gold"
                    : "bg-background border border-border"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-bestseller">Recommandé</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl mb-2">{tier.name}</h3>
                  <p className={tier.highlighted ? "text-cream/60" : "text-muted-foreground"}>
                    Minimum: {tier.minOrder}
                  </p>
                  <p className="text-gold text-3xl font-display mt-4">{tier.discount}</p>
                  <p className="text-sm mt-1 opacity-70">de réduction</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className={`text-sm ${tier.highlighted ? "text-cream/80" : "text-foreground/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlighted ? "gold" : "goldOutline"}
                  className="w-full"
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Nous contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Demande de Partenariat
              </h2>
              <p className="text-muted-foreground">
                Remplissez ce formulaire et notre équipe vous contactera dans les 24h.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Votre entreprise"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@exemple.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+213 XX XX XX XX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Wilaya</label>
                <Input
                  value={formData.wilaya}
                  onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
                  placeholder="Votre wilaya"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre activité et vos besoins..."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                Envoyer ma demande
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Grossistes;
