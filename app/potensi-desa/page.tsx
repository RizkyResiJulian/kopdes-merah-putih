import Image from "next/image";

import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";

import { potentials } from "@/data/site";

const images = [
  "/images/potensi/pertanian.webp",
  "/images/potensi/umkm.jpg",
  "/images/potensi/perdagangan.jpg",
  "/images/potensi/pangan.jpg",
  "/images/potensi/potensi-alam.jpg",
  "/images/potensi/digital.jpg",
];

export default function Page() {
  return (
    <Shell>
      {/* Hero */}
      <PageHero
        kicker="POTENSI DESA"
        title="Potensi lokal, peluang yang lebih luas."
        text="KOPDES menjadi penghubung antara potensi desa, masyarakat, dan pasar."
      />

      {/* Potensi Desa */}
      <section className="section">
        <div className="container potential-full">
          {potentials.map((potential, index) => (
            <div
              className="potential-card"
              key={potential[1]}
            >
              {/* Gambar */}
              <div className="potential-image">
                <Image
                  src={images[index]}
                  alt={potential[1]}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>

              {/* Informasi */}
              <div className="potential-body">
                <span>{potential[0]}</span>

                <h2>{potential[1]}</h2>

                <p>{potential[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}