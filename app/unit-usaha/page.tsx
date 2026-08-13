import Image from "next/image";
import Link from "next/link";

import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import UnitIcon from "@/components/UnitIcon";

import { units } from "@/data/site";

export default function Page() {
  return (
    <Shell>
      {/* Hero */}
      <PageHero
        kicker="UNIT USAHA"
        title="Layanan KOPDES untuk kebutuhan desa."
        text="Pilih unit usaha untuk melihat layanan, informasi, dan contoh aktivitasnya."
        image="/images/units/gerai-ritel.png"
      />

      {/* Unit Usaha */}
      <section className="section">
        <div className="container unit-directory">
          {units.map((unit, index) => (
            <Link
              key={unit.slug}
              href={`/unit-usaha/${unit.slug}`}
              className="directory-photo-card"
            >
              {/* Gambar Unit */}
              <div className="directory-image">
                <Image
                  src={unit.image}
                  alt={unit.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>

              {/* Informasi Unit */}
              <div className="directory-body">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <UnitIcon type={unit.icon} />

                <h2>{unit.title}</h2>

                <p>{unit.description}</p>

                <b>Pelajari Selengkapnya →</b>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}