"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { menu, menuCategories, MenuCategory, formatPrice } from "@/data/menu";
import { useCart } from "@/components/CartProvider";

export function MenuBrowser() {
  const [category, setCategory] = useState<MenuCategory | "Tout">("Tout");
  const [search, setSearch] = useState("");
  const { add, setDrawerOpen } = useCart();
  const filtered = useMemo(() => menu.filter((dish) =>
    (category === "Tout" || dish.category === category) &&
    `${dish.name} ${dish.description}`.toLocaleLowerCase("fr").includes(search.toLocaleLowerCase("fr")),
  ), [category, search]);

  return <>
    <div className="menu-tools">
      <label className="search-field"><span className="visually-hidden">Rechercher dans le menu</span><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Un plat, une envie…" /></label>
      <div className="category-tabs" role="group" aria-label="Filtrer les plats">
        {menuCategories.map((item) => <button key={item} className={category === item ? "category-tab active" : "category-tab"} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}
      </div>
    </div>
    {filtered.length ? <div className="dish-grid">{filtered.map((dish, index) => <article className="dish-card" key={dish.id} style={{ animationDelay: `${index * 45}ms` }}>
      <div className="dish-image"><Image src={dish.image} alt={dish.name} fill priority={index === 0} sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" />{dish.popular && <span className="dish-tag">Favori de la maison</span>}</div>
      <div className="dish-body"><div className="dish-heading"><div><span className="dish-category">{dish.category}</span><h2>{dish.name}</h2></div><strong>{formatPrice(dish.price)}</strong></div>
        <p>{dish.description}</p>
        <details className="dish-details"><summary>En savoir plus</summary><p>Préparé à la commande avec des produits soigneusement sélectionnés. Allergènes et adaptations : contactez-nous sur WhatsApp.</p></details>
        <button className="add-to-cart" onClick={() => { add(dish.id); setDrawerOpen(true); }}>Ajouter au panier <span aria-hidden="true">+</span></button>
      </div>
    </article>)}</div> : <p className="no-results">Aucun plat ne correspond à votre recherche.</p>}
  </>;
}