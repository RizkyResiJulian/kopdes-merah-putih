import {site} from "@/data/site";
export default function Footer(){return <footer className="footer"><div className="container footer-grid">
 <div><a className="brand footer-brand" href="/"><img className="brand-logo" src="/images/brand/logo-kopdes.png" alt="Logo KOPDES Merah Putih"/><span className="brand-name"><strong>Koperasi Desa/Kelurahan</strong><small>Merah Putih</small></span></a><p>Koperasi sebagai wadah usaha bersama untuk memperkuat layanan, produk lokal, dan kemandirian ekonomi masyarakat desa.</p></div>
 <div><b>Jelajahi</b><a href="/tentang">Tentang Kami</a><a href="/unit-usaha">Unit Usaha</a><a href="/produk">Katalog Produk</a><a href="/keanggotaan">Keanggotaan</a></div>
 <div><b>Hubungi</b><span>Alamat kantor/gerai KDKMP</span><span>WhatsApp: +62 896-5559-1884</span><span>{site.partnershipEmail}</span></div>
 </div><div className="container footer-bottom"><span>© 2026 Koperasi Desa/Kelurahan Merah Putih</span><span>Company Profile & Information Portal</span></div></footer>}
