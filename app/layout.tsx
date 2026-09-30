import type { Metadata } from "next";
import { CartProvider } from "@/components/CartProvider";
import { CartDrawer } from "@/components/CartDrawer";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RESTAURANT_SLOGAN } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Jardin de Bayonne | Resto-Bar, Tapas & Traiteur à Pointe-Noire",
  description: `Le Jardin de Bayonne à Songolo, Pointe-Noire. Resto-Bar, tapas, cuisine africaine et service traiteur. ${RESTAURANT_SLOGAN}`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><CartProvider><SiteHeader /><main>{children}</main><SiteFooter /><CartDrawer /></CartProvider></body></html>;
}