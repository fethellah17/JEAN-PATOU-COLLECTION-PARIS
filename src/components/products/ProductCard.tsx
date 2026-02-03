import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product, formatPrice } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/produit/${product.id}`}
        className="group block card-luxury"
      >
        <div className="relative overflow-hidden bg-muted aspect-square rounded-sm">
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span
                className={
                  product.badge === "bestseller"
                    ? "badge-bestseller"
                    : "badge-new"
                }
              >
                {product.badge === "bestseller" ? "Best Seller" : "Nouveau"}
              </span>
            </div>
          )}

          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-all duration-500 flex items-center justify-center">
            <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-display text-lg tracking-wide">
              Découvrir
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-2">
          <p className="text-xs text-gold tracking-widest uppercase">
            {product.category === "homme" ? "Pour Homme" : "Pour Femme"}
          </p>
          <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{product.inspiration}</p>
          <p className="text-lg font-semibold text-foreground">
            {formatPrice(product.priceRetail)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};
