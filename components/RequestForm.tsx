"use client";

import { FormEvent } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

type RequestKind = "reservation" | "catering";

export function RequestForm({ kind }: { kind: RequestKind }) {
  const isReservation = kind === "reservation";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fields = isReservation
      ? ["date", "time", "people", "message"]
      : ["event", "date", "people", "place", "service", "message"];
    const labels: Record<string, string> = {
      date: "Date", time: "Heure souhaitée", people: "Nombre de personnes", message: "Message",
      event: "Type d'événement", place: "Lieu", service: "Prestation souhaitée",
    };
    const lines = fields.map((key) => {
      const value = String(formData.get(key) || "").trim();
      return value ? `${labels[key]} : ${value}` : "";
    }).filter(Boolean);
    const greeting = isReservation
      ? "Bonjour Jardin de Bayonne, je souhaite réserver une table."
      : "Bonjour Jardin de Bayonne, je souhaite demander un devis traiteur.";
    const message = [greeting, "", `Nom : ${String(formData.get("name") || "").trim()}`, `Téléphone : ${String(formData.get("phone") || "").trim()}`, ...lines].join("\n");
    openWhatsApp(message);
  }

  return <form className="request-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Nom complet<input name="name" autoComplete="name" required /></label>
      <label>Téléphone<input name="phone" type="tel" autoComplete="tel" required /></label>
      {!isReservation && <label>Type d&apos;événement<select name="event" defaultValue="" required><option value="" disabled>Choisir un événement</option><option>Mariage</option><option>Anniversaire</option><option>Réception</option><option>Événement privé</option><option>Repas d’entreprise</option></select></label>}
      <label>Date<input name="date" type="date" required /></label>
      {isReservation && <label>Heure<input name="time" type="time" required /></label>}
      <label>Nombre de personnes<input name="people" type="number" min="1" max="5000" required /></label>
      {!isReservation && <>
        <label>Lieu<input name="place" placeholder="Ville ou adresse" required /></label>
        <label>Type de prestation<select name="service" defaultValue="" required><option value="" disabled>Choisir une prestation</option><option>Resto-Bar</option><option>Tapas</option><option>Service traiteur</option><option>À définir ensemble</option></select></label>
      </>}
      <label className="form-wide">{isReservation ? "Commentaire" : "Votre projet"}<textarea name="message" rows={4} placeholder="Précisions, préférences ou contraintes…" /></label>
    </div>
    <button className="button button-dark" type="submit">{isReservation ? "Confirmer sur WhatsApp" : "Demander un devis"} <span aria-hidden="true">↗</span></button>
    <p className="form-note">Votre demande est préparée dans WhatsApp. Aucune information n&apos;est enregistrée sur ce site.</p>
  </form>;
}