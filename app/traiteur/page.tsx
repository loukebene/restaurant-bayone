import Image from "next/image";
import { RESTAURANT_CATERING_EVENTS } from "@/lib/config";
import { RequestForm } from "@/components/RequestForm";

export default function CateringPage() {
  return <>
    <section className="catering-hero"><div className="catering-photo"><Image src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=85" alt="Buffet préparé pour un événement" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="catering-intro"><span className="eyebrow">LE JARDIN S&apos;INVITE CHEZ VOUS</span><h1>Les grandes<br /><em>occasions</em><br />ont du goût.</h1><p>Un déjeuner en famille, une fête de village ou un moment d&apos;équipe : nous imaginons une table généreuse à votre image.</p><a className="underlined-link" href="#devis">Parler de votre événement <span aria-hidden="true">↓</span></a></div></section>
    <section className="catering-details page-width"><div><span className="eyebrow">À VOTRE MESURE</span><h2>Vos événements,<br /><em>à votre image.</em></h2></div><p>{RESTAURANT_CATERING_EVENTS.join(" · ")}. Partagez-nous le lieu, la date, le nombre d&apos;invités et le type de prestation souhaité pour demander votre devis.</p></section>
    <section className="page-shell page-width form-page catering-form" id="devis"><div className="page-heading"><span className="eyebrow">ON IMAGINE ENSEMBLE</span><h2>Parlons de votre projet.</h2></div><RequestForm kind="catering" /></section>
  </>;
}