import { MenuBrowser } from "@/components/MenuBrowser";

export default function MenuPage() {
  return <section className="page-shell page-width">
    <div className="page-heading"><span className="eyebrow">CUISINE AFRICAINE · SONGOLO</span><h1>À la carte</h1><p>Grillades, poissons braisés, mabokés, tapas et plats cuisinés.</p></div>
    <MenuBrowser />
    <p className="menu-footnote">Les plats sont préparés à la commande. Pour connaître les allergènes ou adapter un plat, écrivez-nous.</p>
  </section>;
}