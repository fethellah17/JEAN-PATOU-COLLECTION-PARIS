import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products, formatPrice, Product } from "@/lib/products";
import { useCart, PriceType } from "@/context/CartContext";
import { ShoppingBag, Minus, Plus, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedPriceType, setSelectedPriceType] = useState<PriceType>("retail");

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl mb-4">Produit non trouvé</h1>
            <Button asChild variant="goldOutline">
              <Link to="/boutique">Retour à la boutique</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const getPrice = (p: Product, type: PriceType): number => {
    switch (type) {
      case "wholesale":
        return p.priceWholesale;
      case "superWholesale":
        return p.priceSuperWholesale;
      default:
        return p.priceRetail;
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedPriceType);
    toast.success("Produit ajouté au panier", {
      description: `${product.name} x${quantity}`,
    });
  };

  const priceOptions = [
    { type: "retail" as PriceType, label: "Détail", price: product.priceRetail, minQty: "1 unité" },
    { type: "wholesale" as PriceType, label: "Gros", price: product.priceWholesale, minQty: "12+ unités" },
    { type: "superWholesale" as PriceType, label: "Super Gros", price: product.priceSuperWholesale, minQty: "48+ unités" },
  ];

  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link
            to="/boutique"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la boutique
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square bg-muted rounded-sm overflow-hidden">
                {product.badge && (
                  <div className="absolute top-6 left-6 z-10">
                    <span
                      className={
                        product.badge === "bestseller" ? "badge-bestseller" : "badge-new"
                      }
                    >
                      {product.badge === "bestseller" ? "Best Seller" : "Nouveau"}
                    </span>
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-gold text-sm tracking-widest uppercase mb-2">
                  {product.category === "homme" ? "Pour Homme" : "Pour Femme"}
                </p>
                <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
                  {product.name}
                </h1>
                <p className="text-muted-foreground italic">{product.inspiration}</p>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                {product.description}
              </p>

              {/* Olfactory Notes */}
              <div className="space-y-4 py-6 border-y border-border">
                <h3 className="font-display text-lg text-foreground">Notes Olfactives</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gold uppercase tracking-wider mb-2">Tête</p>
                    <p className="text-sm text-foreground/80">
                      {product.notes.top.join(", ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gold uppercase tracking-wider mb-2">Cœur</p>
                    <p className="text-sm text-foreground/80">
                      {product.notes.heart.join(", ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gold uppercase tracking-wider mb-2">Fond</p>
                    <p className="text-sm text-foreground/80">
                      {product.notes.base.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Selection */}
              <div className="space-y-4">
                <h3 className="font-display text-lg text-foreground">Choisir votre tarif</h3>
                <div className="grid gap-3">
                  {priceOptions.map((option) => (
                    <button
                      key={option.type}
                      onClick={() => setSelectedPriceType(option.type)}
                      className={`flex items-center justify-between p-4 rounded-sm border-2 transition-all ${
                        selectedPriceType === option.type
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedPriceType === option.type
                              ? "border-gold bg-gold"
                              : "border-muted-foreground"
                          }`}
                        >
                          {selectedPriceType === option.type && (
                            <Check className="h-3 w-3 text-noir" />
                          )}
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-foreground">{option.label}</p>
                          <p className="text-xs text-muted-foreground">{option.minQty}</p>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-foreground">
                        {formatPrice(option.price)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="gold"
                  size="lg"
                  className="flex-1"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </Button>
              </div>

              {/* Total */}
              <div className="p-4 bg-muted rounded-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total</span>
                  <span className="text-2xl font-display font-semibold text-foreground">
                    {formatPrice(getPrice(product, selectedPriceType) * quantity)}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
