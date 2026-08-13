import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";
import {
  CheckCircle2,
  ArrowRight,
  UserRound,
} from "lucide-react";

const steps = [
  [
    "01",
    "Kenali Koperasi",
    "Pahami profil, manfaat, dan layanan KOPDES Merah Putih.",
  ],
  [
    "02",
    "Siapkan Persyaratan",
    "Siapkan identitas dan dokumen sesuai ketentuan resmi.",
  ],
  [
    "03",
    "Isi Pendaftaran",
    "Lengkapi formulir melalui website pendaftaran anggota.",
  ],
  [
    "04",
    "Verifikasi Data",
    "Data diproses dan diverifikasi pengelola koperasi.",
  ],
];

export default function Page() {
  return (
    <Shell>
      <PageHero
        kicker="KEANGGOTAAN"
        title="Jadi bagian dari koperasi."
        text="Panduan sederhana untuk memahami manfaat, persyaratan, dan alur menjadi anggota."
      />

      <section className="section">
        <div className="container prose-grid">
          <div>
            <div className="section-kicker">MANFAAT</div>

            <h2>
              Kenapa <span>bergabung?</span>
            </h2>

            <p className="lead">
              Menjadi anggota berarti ikut memiliki, menggunakan,
              dan mengembangkan koperasi sesuai aturan yang berlaku.
            </p>
          </div>

          <div className="benefit-list">
            <p>
              <CheckCircle2 />
              Menjadi bagian dari ekosistem ekonomi koperasi.
            </p>

            <p>
              <CheckCircle2 />
              Memanfaatkan layanan dan unit usaha sesuai ketentuan.
            </p>

            <p>
              <CheckCircle2 />
              Berpartisipasi dalam pengembangan koperasi.
            </p>

            <p>
              <CheckCircle2 />
              Mendukung produk dan usaha masyarakat desa.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="steps-large">
            {steps.map((step) => (
              <div key={step[0]}>
                <span>{step[0]}</span>

                <h3>{step[1]}</h3>

                <p>{step[2]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="registration-box">
            <div>
              <UserRound />

              <div className="section-kicker light">
                PENDAFTARAN ONLINE
              </div>

              <h2>Siap menjadi anggota?</h2>

              <p>
                Klik tombol berikut untuk menuju website pendaftaran
                anggota. Domain ini adalah contoh dan dapat kamu ganti.
              </p>
            </div>

            <a
              className="btn btn-primary"
              href={site.registrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Buka Pendaftaran
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Shell>
  );
}