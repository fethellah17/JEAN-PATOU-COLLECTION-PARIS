import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "+213 XX XX XX XX",
    subtitle: "Du samedi au jeudi, 9h-18h",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+213 XX XX XX XX",
    subtitle: "Réponse rapide garantie",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@jeanpatou-dz.com",
    subtitle: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    title: "Livraison",
    content: "Toute l'Algérie",
    subtitle: "58 wilayas couvertes",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès", {
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
              Nous Contacter
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">
              À Votre Écoute
            </h1>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Une question ? Une commande ? Notre équipe est disponible pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-muted rounded-sm text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{info.title}</h3>
                {info.isWhatsApp ? (
                  <a
                    href={`https://wa.me/213XXXXXXXXX`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground">{info.content}</p>
                )}
                <p className="text-sm text-muted-foreground mt-1">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl text-foreground mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom complet</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+213 XX XX XX XX"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@exemple.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Comment pouvons-nous vous aider ?"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Votre message..."
                    rows={5}
                    required
                    className="bg-background"
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full md:w-auto">
                  Envoyer le message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <div className="bg-noir text-cream p-8 rounded-sm">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="h-8 w-8 text-noir" />
                </div>
                <h3 className="font-display text-2xl mb-4">
                  Préférez WhatsApp ?
                </h3>
                <p className="text-cream/70 mb-6">
                  Pour une réponse instantanée, contactez-nous directement sur WhatsApp. 
                  Notre équipe est disponible pour répondre à toutes vos questions.
                </p>
                <a
                  href="https://wa.me/213XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="gold" size="lg" className="w-full">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Ouvrir WhatsApp
                  </Button>
                </a>

                <div className="mt-8 pt-6 border-t border-cream/10">
                  <div className="flex items-center gap-3 text-cream/70">
                    <Clock className="h-5 w-5" />
                    <div>
                      <p className="font-medium text-cream">Horaires d'ouverture</p>
                      <p className="text-sm">Samedi - Jeudi : 9h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
