"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { RESTAURANT_WHATSAPP } from "@/lib/config";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function SiteHeader() {
  const { count, setDrawerOpen } = useCart();
  const whatsapp = createWhatsAppUrl("Bonjour Jardin de Bayonne, je souhaite vous contacter.");
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Jardin de Bayonne, accueil">
      <span className="brand-mark">JB</span><span className="brand-copy"><strong>Jardin de Bayonne</strong><small>RESTO-BAR · TAPAS · TRAITEUR</small></span>
    </Link>
    <nav className="desktop-nav" aria-label="Navigation principale">
      <Link href="/">Accueil</Link><Link href="/menu">Menu</Link><Link href="/reservation">Réservation</Link><Link href="/traiteur">Traiteur</Link><Link href="/contact">Contact</Link>
    </nav>
    <div className="header-actions">
      <button className="cart-trigger" onClick={() => setDrawerOpen(true)} aria-label={`Ouvrir le panier, ${count} article${count > 1 ? "s" : ""}`}>
        Panier <span className="cart-count">{count}</span>
      </button>
      <a className="header-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label={RESTAURANT_WHATSAPP ? "Nous écrire sur WhatsApp" : "Ouvrir WhatsApp"}>WhatsApp <span aria-hidden="true">↗</span></a>
    </div>
    <nav className="mobile-nav" aria-label="Navigation mobile">
      <Link href="/">Accueil</Link><Link href="/menu">Menu</Link><button onClick={() => setDrawerOpen(true)}>Panier <span>{count}</span></button><Link href="/reservation">Réserver</Link><Link href="/contact">Contact</Link>
    </nav>
  </header>;
}