import Link from "next/link";
import { RESTAURANT_ADDRESS, RESTAURANT_PHONE_NUMBERS, RESTAURANT_SPECIALTIES, RESTAURANT_WHATSAPP_NUMBERS } from "@/lib/config";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const mapUrl = RESTAURANT_ADDRESS ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT_ADDRESS)}` : "";
  return <section className="page-shell page-width contact-page">
    <div className="page-heading"><span className="eyebrow">POINTE-NOIRE · SONGOLO</span><h1>À votre écoute.</h1><p>Une question sur la carte, une réservation ou un événement ? Retrouvez-nous en face d’El Maestro.</p></div>
    <div className="contact-grid">
      <article className="contact-block"><span className="eyebrow">TÉLÉPHONES</span>{RESTAURANT_PHONE_NUMBERS.map((contact) => <a key={contact.number} href={`tel:+${contact.number}`}>{contact.label}</a>)}<span className="contact-note">Appelez-nous pour toute question.</span></article>
      <article className="contact-block"><span className="eyebrow">WHATSAPP</span>{RESTAURANT_WHATSAPP_NUMBERS.map((contact) => <a key={contact.number} href={createWhatsAppUrl("Bonjour Jardin de Bayonne, je souhaite vous contacter.", contact.number)} target="_blank" rel="noreferrer">{contact.label} ↗</a>)}<span className="contact-note">Écrivez au numéro de votre choix.</span></article>
      <article className="contact-block"><span className="eyebrow">NOUS TROUVER</span><a href={mapUrl} target="_blank" rel="noreferrer">{RESTAURANT_ADDRESS} ↗</a><span className="contact-note"><a href={mapUrl} target="_blank" rel="noreferrer">Ouvrir Google Maps ↗</a></span></article>
      <article className="contact-block"><span className="eyebrow">NOTRE CUISINE</span><p>{RESTAURANT_SPECIALTIES}</p><span className="contact-note">Resto-Bar · Tapas · Service Traiteur</span></article>
    </div>
    <div className="contact-cta"><span>Une envie précise ?</span><Link className="button button-dark" href="/reservation">Réserver une table ↗</Link></div>
  </section>;
}