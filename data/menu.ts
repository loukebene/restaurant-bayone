export type MenuCategory = "Entrées" | "Plats" | "Accompagnements" | "Desserts" | "Boissons" | "Menus spéciaux";

export type MenuDish = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  popular?: boolean;
};

export const menuCategories: Array<MenuCategory | "Tout"> = [
  "Tout",
  "Entrées",
  "Plats",
  "Accompagnements",
  "Desserts",
  "Boissons",
  "Menus spéciaux",
];

export const menu: MenuDish[] = [
  {
    id: "pastels",
    name: "Pastels du jardin",
    description: "Petits beignets dorés, poisson frais, herbes et sauce tomate maison.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    category: "Entrées",
    popular: true,
  },
  {
    id: "salade-mangue",
    name: "Mangue & avocat",
    description: "Mangue mûre, avocat, jeunes pousses et vinaigrette citronnée.",
    price: 5500,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    category: "Entrées",
  },
  {
    id: "poulet-braise",
    name: "Poulet braisé",
    description: "Mariné aux épices douces, grillé à la flamme et servi avec son jus.",
    price: 10000,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    category: "Plats",
    popular: true,
  },
  {
    id: "poisson-braise",
    name: "Poisson braisé",
    description: "Poisson du marché, braisé minute, citron vert et sauce relevée.",
    price: 14000,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
    category: "Plats",
  },
  {
    id: "mafe-vegetal",
    name: "Mafé végétal",
    description: "Légumes de saison mijotés dans une sauce à l'arachide onctueuse.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    category: "Plats",
  },
  {
    id: "riz-parfume",
    name: "Riz parfumé",
    description: "Riz long grain subtilement parfumé aux épices du jardin.",
    price: 2000,
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    category: "Accompagnements",
  },
  {
    id: "alloco",
    name: "Alloco croustillant",
    description: "Bananes plantain mûres, dorées à cœur et légèrement salées.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=900&q=85",
    category: "Accompagnements",
    popular: true,
  },
  {
    id: "fondant-chocolat",
    name: "Fondant au chocolat",
    description: "Cœur coulant, chocolat noir et pointe de fleur de sel.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    category: "Desserts",
  },
  {
    id: "jus-bissap",
    name: "Bissap maison",
    description: "Infusion d'hibiscus, menthe fraîche et juste ce qu'il faut de douceur.",
    price: 2000,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=85",
    category: "Boissons",
  },
  {
    id: "menu-decouverte",
    name: "Le jardin à partager",
    description: "Une entrée, deux plats au choix, trois accompagnements et deux douceurs.",
    price: 32000,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    category: "Menus spéciaux",
    popular: true,
  },
];

export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("fr-FR").format(price)} FCFA`;
}