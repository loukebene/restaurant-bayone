import Image from "next/image";
import Link from "next/link";
import { RESTAURANT_CATERING_EVENTS, RESTAURANT_SPECIALTIES } from "@/lib/config";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  return <>
    <section className="hero">
      <Image className="hero-image" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90" alt="Salle chaleureuse du Jardin de Bayonne, dressée pour le dîner" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <span className="eyebrow light-eyebrow">POINTE-NOIRE · SONGOLO</span>
        <h1>Plus qu’un restaurant,<br /><em>une expérience.</em></h1>
        <p>Resto-Bar · Tapas · Service Traiteur. {RESTAURANT_SPECIALTIES}</p>
        <div className="hero-actions"><Link className="button button-light" href="/menu">Découvrir le menu <span aria-hidden="true">↗</span></Link><a className="button button-outline" href={createWhatsAppUrl("Bonjour Jardin de Bayonne, je souhaite commander.")} target="_blank" rel="noreferrer">Commander sur WhatsApp <span aria-hidden="true">↗</span></a><Link className="button button-outline" href="/reservation">Réserver une table</Link></div>
        <span className="hero-caption">Pointe-Noire, Songolo · En face d’El Maestro</span>
      </div>
      <div className="hero-index"><span>01</span><i /><span>03</span></div>
    </section>
    <section className="intro-band page-width">
      <span className="eyebrow">LE JARDIN DE BAYONNE</span><h2>Plus qu’un restaurant,<br /><em>une expérience.</em></h2>
      <p>{RESTAURANT_SPECIALTIES} Retrouvez-nous à Songolo, en face d’El Maestro.</p>
      <Link className="underlined-link" href="/contact">Découvrir notre maison <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="home-feature">
      <div className="feature-image"><Image src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85" alt="Table généreuse de cuisine fraîche et colorée" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
      <div className="feature-copy"><span className="eyebrow">CUISINE AFRICAINE</span><h2>Grillades, poissons braisés,<br /><em>tapas & mabokés.</em></h2><p>Une carte de cuisine africaine, avec des plats cuisinés à découvrir et à partager.</p><Link className="button button-dark" href="/menu">Voir le menu <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section className="service-strip page-width">
      <Link href="/reservation"><span className="service-number">01 / LA TABLE</span><strong>Un dîner au jardin</strong><span>Réserver votre table ↗</span></Link>
      <Link href="/traiteur"><span className="service-number">02 / SERVICE TRAITEUR</span><strong>Mariages, réceptions & événements</strong><span>{RESTAURANT_CATERING_EVENTS.join(" · ")} ↗</span></Link>
    </section>
  </>;
}