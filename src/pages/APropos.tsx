import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Sparkles, Award, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Nous sélectionnons rigoureusement chaque fragrance pour garantir une qualité irréprochable.",
  },
  {
    icon: Award,
    title: "Authenticité",
    description: "Nos parfums sont fidèlement inspirés des créations des plus grandes maisons parisiennes.",
  },
  {
    icon: Heart,
    title: "Accessibilité",
    description: "Rendre le luxe accessible à tous les Algériens, sans compromis sur la qualité.",
  },
  {
    icon: Globe,
    title: "Proximité",
    description: "Un service client réactif et une livraison dans toutes les wilayas d'Algérie.",
  },
];

const APropos = () => {
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
              Notre Histoire
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">
              À Propos de Jean Patou Collection
            </h1>
            <p className="text-cream/70 max-w-2xl mx-auto">
              L'élégance parisienne au cœur de l'Algérie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Notre Vision
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Jean Patou Collection Paris est née d'une passion pour l'art de la parfumerie française. 
                Notre mission est simple : offrir aux Algériens l'opportunité de découvrir des fragrances 
                d'exception, inspirées des plus grandes créations parisiennes, à des prix accessibles.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Chaque flacon de notre collection est le fruit d'un travail minutieux, 
                alliant savoir-faire français et respect des traditions olfactives. 
                Nous sélectionnons les meilleures matières premières pour recréer 
                des fragrances qui rivalisent avec les originaux.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Présents dans toutes les wilayas d'Algérie, nous accompagnons aussi bien 
                les particuliers que les professionnels de la parfumerie dans leur quête 
                de senteurs raffinées.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Nos Valeurs
            </h2>
            <div className="divider-gold mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8 rounded-sm text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 bg-noir text-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Notre Engagement
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Chez Jean Patou Collection Paris, nous nous engageons à vous offrir 
              une expérience d'achat exceptionnelle. De la qualité de nos parfums 
              à la rapidité de notre livraison, en passant par notre service client 
              disponible, nous mettons tout en œuvre pour votre satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <p className="text-4xl font-display text-gold">5000+</p>
                <p className="text-cream/60 text-sm mt-1">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-4xl font-display text-gold">58</p>
                <p className="text-cream/60 text-sm mt-1">Wilayas livrées</p>
              </div>
              <div>
                <p className="text-4xl font-display text-gold">100%</p>
                <p className="text-cream/60 text-sm mt-1">Qualité garantie</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
