import { RequestForm } from "@/components/RequestForm";

export default function ReservationPage() {
  return <section className="page-shell page-width form-page">
    <div className="page-heading"><span className="eyebrow">ON VOUS GARDE UNE PLACE</span><h1>À bientôt<br /><em>autour de la table.</em></h1><p>Partagez-nous vos envies. Votre demande s&apos;ouvrira dans WhatsApp pour que nous la confirmions ensemble.</p></div>
    <RequestForm kind="reservation" />
  </section>;
}