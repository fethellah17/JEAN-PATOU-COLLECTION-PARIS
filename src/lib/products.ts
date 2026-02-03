import perfumeHomme1 from "@/assets/perfume-homme-1.jpg";
import perfumeHomme2 from "@/assets/perfume-homme-2.jpg";
import perfumeHomme3 from "@/assets/perfume-homme-3.jpg";
import perfumeFemme1 from "@/assets/perfume-femme-1.jpg";
import perfumeFemme2 from "@/assets/perfume-femme-2.jpg";
import perfumeFemme3 from "@/assets/perfume-femme-3.jpg";

export interface Product {
  id: string;
  name: string;
  inspiration: string;
  description: string;
  category: "homme" | "femme";
  image: string;
  priceRetail: number;
  priceWholesale: number;
  priceSuperWholesale: number;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  badge?: "bestseller" | "nouveau";
}

export const products: Product[] = [
  {
    id: "1",
    name: "L'Homme Noir",
    inspiration: "Inspiré de Sauvage",
    description: "Un parfum masculin intense et mystérieux qui capture l'essence de l'élégance parisienne. Notes boisées et épicées pour l'homme moderne.",
    category: "homme",
    image: perfumeHomme1,
    priceRetail: 4500,
    priceWholesale: 3200,
    priceSuperWholesale: 2800,
    notes: {
      top: ["Bergamote", "Poivre noir"],
      heart: ["Lavande", "Géranium"],
      base: ["Cèdre", "Ambroxan"],
    },
    badge: "bestseller",
  },
  {
    id: "2",
    name: "Bois d'Ambre",
    inspiration: "Inspiré de Oud Wood",
    description: "Une fragrance masculine raffinée aux notes boisées profondes et enveloppantes. L'essence du luxe parisien.",
    category: "homme",
    image: perfumeHomme2,
    priceRetail: 5200,
    priceWholesale: 3800,
    priceSuperWholesale: 3200,
    notes: {
      top: ["Cardamome", "Rose de mai"],
      heart: ["Oud", "Santal"],
      base: ["Vétiver", "Ambre"],
    },
  },
  {
    id: "3",
    name: "Nuit Orientale",
    inspiration: "Inspiré de Ombre Leather",
    description: "Un parfum oriental captivant avec des accords de cuir et d'épices orientales. Pour l'homme qui ose.",
    category: "homme",
    image: perfumeHomme3,
    priceRetail: 4800,
    priceWholesale: 3500,
    priceSuperWholesale: 3000,
    notes: {
      top: ["Safran", "Cardamome"],
      heart: ["Cuir", "Jasmin"],
      base: ["Oud", "Mousse de chêne"],
    },
    badge: "nouveau",
  },
  {
    id: "4",
    name: "Rose de Paris",
    inspiration: "Inspiré de La Vie Est Belle",
    description: "Un parfum féminin envoûtant qui célèbre la beauté et la joie de vivre. L'essence de la femme parisienne.",
    category: "femme",
    image: perfumeFemme1,
    priceRetail: 4500,
    priceWholesale: 3200,
    priceSuperWholesale: 2800,
    notes: {
      top: ["Cassis", "Poire"],
      heart: ["Iris", "Jasmin"],
      base: ["Patchouli", "Praliné"],
    },
    badge: "bestseller",
  },
  {
    id: "5",
    name: "Fleur d'Orient",
    inspiration: "Inspiré de Black Opium",
    description: "Une fragrance féminine audacieuse et sensuelle. Un voyage olfactif entre Paris et l'Orient.",
    category: "femme",
    image: perfumeFemme2,
    priceRetail: 4800,
    priceWholesale: 3500,
    priceSuperWholesale: 3000,
    notes: {
      top: ["Café", "Orange"],
      heart: ["Jasmin", "Amande"],
      base: ["Vanille", "Cèdre"],
    },
  },
  {
    id: "6",
    name: "Vanille Ambrée",
    inspiration: "Inspiré de Coco Mademoiselle",
    description: "Un parfum féminin sophistiqué aux notes gourmandes et sensuelles. Le luxe accessible.",
    category: "femme",
    image: perfumeFemme3,
    priceRetail: 5000,
    priceWholesale: 3600,
    priceSuperWholesale: 3100,
    notes: {
      top: ["Orange", "Bergamote"],
      heart: ["Rose", "Jasmin"],
      base: ["Patchouli", "Vanille"],
    },
    badge: "nouveau",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price) + " DA";
};

export const wilayas = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra",
  "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret",
  "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda",
  "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem",
  "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj",
  "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
  "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent",
  "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal",
  "Béni Abbès", "In Salah", "In Guezzam", "Touggourt", "Djanet", "El M'Ghair", "El Meniaa"
];
