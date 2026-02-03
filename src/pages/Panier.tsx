import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart, PriceType } from "@/context/CartContext";
import { formatPrice, wilayas, Product } from "@/lib/products";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Panier = () => {
  const { items, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wilaya: "",
    address: "",
  });

  const getPrice = (product: Product, priceType: PriceType): number => {
    switch (priceType) {
      case "wholesale":
        return product.priceWholesale;
      case "superWholesale":
        return product.priceSuperWholesale;
      default:
        return product.priceRetail;
    }
  };

  const getPriceLabel = (type: PriceType) => {
    switch (type) {
      case "wholesale":
        return "Gros";
      case "superWholesale":
        return "Super Gros";
      default:
        return "Détail";
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Commande confirmée !", {
      description: "Nous vous contacterons bientôt pour la livraison.",
    });
    clearCart();
    setShowCheckout(false);
    setFormData({ name: "", phone: "", wilaya: "", address: "" });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <section className="py-24 bg-background min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl text-foreground mb-4">
                Votre panier est vide
              </h1>
              <p className="text-muted-foreground mb-8">
                Découvrez notre collection de parfums d'exception
              </p>
              <Button asChild variant="gold" size="lg">
                <Link to="/boutique">
                  Découvrir la boutique
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <Link
            to="/boutique"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continuer les achats
          </Link>

          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8">
            Votre Panier
          </h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.product.id}-${item.priceType}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-4 bg-muted rounded-sm"
                >
                  <div className="w-24 h-24 flex-shrink-0 bg-background rounded-sm overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <Link
                        to={`/produit/${item.product.id}`}
                        className="font-display text-lg text-foreground hover:text-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        Tarif: {getPriceLabel(item.priceType)}
                      </p>
                      <p className="text-gold font-semibold mt-1">
                        {formatPrice(getPrice(item.product, item.priceType))}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-background transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-background transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="font-semibold min-w-[100px] text-right">
                        {formatPrice(getPrice(item.product, item.priceType) * item.quantity)}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary / Checkout */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-muted p-6 rounded-sm sticky top-24"
              >
                {!showCheckout ? (
                  <>
                    <h2 className="font-display text-xl mb-6">Récapitulatif</h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Sous-total</span>
                        <span>{formatPrice(getTotal())}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Livraison</span>
                        <span className="text-gold">À définir</span>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4 mb-6">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-gold">{formatPrice(getTotal())}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Paiement à la livraison
                      </p>
                    </div>
                    <Button
                      variant="gold"
                      size="lg"
                      className="w-full"
                      onClick={() => setShowCheckout(true)}
                    >
                      Commander
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <h2 className="font-display text-xl mb-4">Informations de livraison</h2>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Nom complet</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Téléphone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+213 XX XX XX XX"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Wilaya</label>
                      <Select
                        value={formData.wilaya}
                        onValueChange={(value) => setFormData({ ...formData, wilaya: value })}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Sélectionnez votre wilaya" />
                        </SelectTrigger>
                        <SelectContent>
                          {wilayas.map((wilaya) => (
                            <SelectItem key={wilaya} value={wilaya}>
                              {wilaya}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Adresse</label>
                      <Input
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Votre adresse complète"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between mb-4">
                        <span className="font-medium">Total à payer</span>
                        <span className="text-gold font-semibold">{formatPrice(getTotal())}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        💵 Paiement à la livraison (Cash on Delivery)
                      </p>
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      Confirmer la commande
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="w-full"
                      onClick={() => setShowCheckout(false)}
                    >
                      Retour
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Panier;
