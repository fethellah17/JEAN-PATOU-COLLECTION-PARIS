import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";

type CategoryFilter = "all" | "homme" | "femme";
type PriceFilter = "all" | "retail" | "wholesale" | "superWholesale";

const Boutique = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (categoryFilter !== "all" && product.category !== categoryFilter) {
        return false;
      }
      return true;
    });
  }, [categoryFilter]);

  const clearFilters = () => {
    setCategoryFilter("all");
    setPriceFilter("all");
  };

  const hasActiveFilters = categoryFilter !== "all" || priceFilter !== "all";

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
              Collection Complète
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">
              Notre Boutique
            </h1>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Découvrez notre sélection de parfums français de luxe, inspirés des plus grandes maisons parisiennes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtres
              </Button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Catégorie:</span>
                {[
                  { value: "all", label: "Tous" },
                  { value: "homme", label: "Homme" },
                  { value: "femme", label: "Femme" },
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant={categoryFilter === option.value ? "gold" : "ghost"}
                    size="sm"
                    onClick={() => setCategoryFilter(option.value as CategoryFilter)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-2 ml-6">
                <span className="text-sm text-muted-foreground mr-2">Prix:</span>
                {[
                  { value: "all", label: "Tous" },
                  { value: "retail", label: "Détail" },
                  { value: "wholesale", label: "Gros" },
                  { value: "superWholesale", label: "Super Gros" },
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant={priceFilter === option.value ? "gold" : "ghost"}
                    size="sm"
                    onClick={() => setPriceFilter(option.value as PriceFilter)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-1" />
                Effacer les filtres
              </Button>
            )}

            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mb-8 p-4 bg-muted rounded-sm"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Catégorie</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "all", label: "Tous" },
                      { value: "homme", label: "Homme" },
                      { value: "femme", label: "Femme" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant={categoryFilter === option.value ? "gold" : "outline"}
                        size="sm"
                        onClick={() => setCategoryFilter(option.value as CategoryFilter)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Prix</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "all", label: "Tous" },
                      { value: "retail", label: "Détail" },
                      { value: "wholesale", label: "Gros" },
                      { value: "superWholesale", label: "Super Gros" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant={priceFilter === option.value ? "gold" : "outline"}
                        size="sm"
                        onClick={() => setPriceFilter(option.value as PriceFilter)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Aucun produit ne correspond à vos critères.</p>
              <Button variant="goldOutline" className="mt-4" onClick={clearFilters}>
                Voir tous les produits
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Boutique;
