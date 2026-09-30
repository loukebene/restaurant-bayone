"use client";

import { FormEvent } from "react";
import { menu, formatPrice } from "@/data/menu";
import { openWhatsApp } from "@/lib/whatsapp";
import { useCart } from "@/components/CartProvider";

export function CartDrawer() {
  const { lines, subtotal, drawerOpen, setDrawerOpen, setQuantity, clear } = useCart();
  if (!drawerOpen) return null;

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const address = String(form.get("address") || "").trim();
    const instructions = String(form.get("instructions") || "").trim();
    const order = lines.map((line) => {
      const dish = menu.find((item) => item.id === line.id);
      return dish ? `• ${line.quantity} × ${dish.name} — ${formatPrice(dish.price)} / unité` : "";
    }).filter(Boolean).join("\n");

    openWhatsApp([
      "Bonjour Jardin de Bayonne, je souhaite passer une commande.",
      "",
      order,
      "",
      `Total : ${formatPrice(subtotal)}`,
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      address ? `Adresse / livraison : ${address}` : "",
      instructions ? `Instructions : ${instructions}` : "",
    ].filter(Boolean).join("\n"));
  }

  return (
    <div className="drawer-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setDrawerOpen(false)}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-heading">
          <div><span className="eyebrow">À votre table</span><h2 id="cart-title">Votre panier</h2></div>
          <button className="icon-button" aria-label="Fermer le panier" onClick={() => setDrawerOpen(false)}>×</button>
        </div>
        <div className="cart-lines">
          {lines.length === 0 ? <p className="empty-cart">Votre panier est encore vide.</p> : lines.map((line) => {
            const dish = menu.find((item) => item.id === line.id);
            if (!dish) return null;
            return <div className="cart-line" key={line.id}>
              <div className="cart-line-copy"><strong>{dish.name}</strong><span>{formatPrice(dish.price)}</span></div>
              <div className="quantity-control">
                <button aria-label={`Retirer un ${dish.name}`} onClick={() => setQuantity(line.id, line.quantity - 1)}>−</button>
                <span>{line.quantity}</span>
                <button aria-label={`Ajouter un ${dish.name}`} onClick={() => setQuantity(line.id, line.quantity + 1)}>+</button>
              </div>
            </div>;
          })}
        </div>
        {lines.length > 0 && <>
          <div className="cart-total"><span>Sous-total</span><strong>{formatPrice(subtotal)}</strong></div>
          <button className="text-button clear-cart" onClick={clear}>Vider le panier</button>
          <form className="order-form" onSubmit={submitOrder}>
            <label>Votre nom<input name="name" autoComplete="name" required /></label>
            <label>Téléphone<input name="phone" type="tel" autoComplete="tel" required /></label>
            <label>Adresse de livraison <span className="optional">(facultatif)</span><input name="address" autoComplete="street-address" /></label>
            <label>Instructions <span className="optional">(facultatif)</span><textarea name="instructions" rows={2} /></label>
            <button className="button button-dark full-width" type="submit">Commander sur WhatsApp <span aria-hidden="true">↗</span></button>
          </form>
        </>}
      </aside>
    </div>
  );
}