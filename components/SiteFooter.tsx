import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer">
    <Link className="footer-brand" href="/">Jardin de Bayonne<span>RESTO-BAR · TAPAS · TRAITEUR</span></Link>
    <p>Plus qu’un restaurant, une expérience.</p>
    <div className="footer-links"><Link href="/menu">Le menu</Link><Link href="/reservation">Réserver</Link><Link href="/traiteur">Traiteur</Link><Link href="/contact">Nous trouver</Link></div>
    <small>© {new Date().getFullYear()} Jardin de Bayonne</small>
  </footer>;
}