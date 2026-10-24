import Image from "next/image";
import {
  ArrowRight,
  Users,
  Store,
  ShoppingBag,
  BarChart3,
  WalletCards,
  Package,
  Truck,
} from "lucide-react";

import Shell from "@/components/Shell";
import { site, stats, units } from "@/data/site";

function UnitIcon({ type }: { type: string }) {
  if (type === "store") {
    return <Store />;
  }

  if (type === "wallet") {
    return <WalletCards />;
  }

  if (type === "package") {
    return <Package />;
  }

  return <Truck />;
}

export default function Home() {
  return (
    <Shell>
      <section className="hero-home">
        <div className="hero-bg">
          <Image
            src="/images/about/kdkmp-karangwangi.png"
            alt="Contoh kantor KOPDES Merah Putih"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-pill">
              KOPERASI DESA / KELURAHAN MERAH PUTIH KARANGWANGI
            </div>

            <h1>
              Bersama Membangun
              <br />
              <em>Ekonomi Desa</em>
            </h1>

            <p>
              Kopdes Merah Putih hadir untuk meningkatkan kesejahteraan
              masyarakat melalui usaha bersama, layanan berkualitas, dan
              pemanfaatan potensi desa secara optimal.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="/keanggotaan"
              >
                Panduan Menjadi Anggota
                <ArrowRight size={17} />
              </a>

              <a
                className="btn btn-outline-light"
                href="/tentang"
              >
                Tentang Kami
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-float">
        <div className="container stats-card">
          {stats.map((s, i) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-icon">
                {i === 0 ? (
                  <Users />
                ) : i === 1 ? (
                  <Store />
                ) : i === 2 ? (
                  <ShoppingBag />
                ) : (
                  <BarChart3 />
                )}
              </div>

              <div>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-units">
        <div className="container">
          <div className="center-heading">
            <div className="section-kicker">
              UNIT USAHA KAMI
            </div>

            <h2>
              Layanan untuk <span>Kesejahteraan Desa</span>
            </h2>

            <p>
              Berbagai layanan KOPDES Merah Putih untuk mendukung
              kebutuhan masyarakat dan pertumbuhan ekonomi lokal.
            </p>
          </div>

          <div className="unit-photo-grid">
            {units.map((u, i) => (
              <article
                className="unit-photo-card"
                key={u.slug}
              >
                <div className="unit-photo">
                  <Image
                    src={u.image}
                    alt={u.title}
                    fill
                    sizes="(max-width: 800px) 100vw, 25vw"
                  />
                </div>

                <div className="unit-card-body">
                  <div className="unit-badge">
                    <UnitIcon type={u.icon} />
                  </div>

                  <h3>{u.title}</h3>

                  <p>{u.short}</p>

                  <a href={"/unit-usaha/" + u.slug}>
                    Pelajari Selengkapnya
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-band">
        <div className="container about-band-grid">
          <div>
            <div className="section-kicker">
              TENTANG KAMI
            </div>

            <h2>
              Koperasi yang tumbuh{" "}
              <span>bersama masyarakat.</span>
            </h2>
          </div>

          <div>
            <p className="lead">
              Kami membangun ekosistem yang mempertemukan anggota,
              produk lokal, layanan, dan pasar agar manfaat ekonomi
              dapat berputar lebih kuat di desa.
            </p>

            <a
              className="text-link"
              href="/tentang"
            >
              Kenali KOPDES Merah Putih
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section membership-section">
        <div className="container membership-banner">
          <div>
            <div className="section-kicker">
              KEANGGOTAAN
            </div>

            <h2>
              Sudah siap menjadi bagian dari{" "}
              <span>KOPDES?</span>
            </h2>

            <p>
              Pelajari manfaat, persyaratan, alur pendaftaran, lalu
              lanjutkan ke website pendaftaran anggota.
            </p>
          </div>

          <div className="membership-actions">
            <a
              className="btn btn-primary"
              href="/keanggotaan"
            >
              Panduan Menjadi Anggota
            </a>

            <a
              className="btn btn-outline"
              href={site.registrationUrl}
            >
              Daftar Sekarang
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                JELAJAHI KOPDES
              </div>

              <h2>
                Informasi <span>yang kamu butuhkan.</span>
              </h2>
            </div>
          </div>

          <div className="quick-grid">
            {[
              [
                "🛒",
                "Katalog Produk",
                "Lihat produk, harga, stok, dan kategori.",
                "/produk",
              ],
              [
                "📰",
                "Kegiatan",
                "Informasi kegiatan dan perkembangan koperasi.",
                "/kegiatan",
              ],
              [
                "🌱",
                "Potensi Desa",
                "Kenali peluang ekonomi yang dapat dikembangkan.",
                "/potensi-desa",
              ],
              [
                "🤝",
                "Kemitraan",
                "Buka peluang kerja sama dengan KOPDES.",
                "/kemitraan",
              ],
            ].map((x) => (
              <a href={x[3]} key={x[1]}>
                <strong>
                  {x[0]} {x[1]}
                </strong>

                <span>{x[2]}</span>

                <b>Pelajari →</b>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}