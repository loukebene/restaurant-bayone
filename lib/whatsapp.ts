import { RESTAURANT_WHATSAPP } from "@/lib/config";

export function createWhatsAppUrl(message: string, recipient = RESTAURANT_WHATSAPP) {
  const phone = recipient.replace(/\D/g, "");
  const destination = phone ? `https://wa.me/${phone}` : "https://wa.me/";
  return `${destination}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.location.assign(createWhatsAppUrl(message));
}