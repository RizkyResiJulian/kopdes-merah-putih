# KOPDES Merah Putih — Company Profile V3 Developed

Versi ini dikembangkan dari `kdkmp-company-profile-v3-images` yang kamu kirim, bukan membuat project baru dari nol.

## Perubahan utama
- Tampilan homepage mengikuti referensi: navbar putih, logo KOPDES, hero foto besar, statistik mengambang, kartu unit usaha bergambar, dan CTA keanggotaan.
- Logo KOPDES contoh sudah dipasang di navbar dan footer.
- Foto contoh lokal sudah dimasukkan agar website langsung terlihat hidup.
- Semua menu utama memiliki halaman sendiri.
- Unit Usaha memiliki halaman detail.
- Gerai Ritel memiliki katalog produk dengan harga, stok, kategori, dan detail produk.
- Keanggotaan memiliki panduan dan tombol ke domain pendaftaran contoh.
- Kegiatan, Potensi Desa, Kemitraan, Kontak, dan Tentang dibuat lebih lengkap.
- Responsive untuk desktop, tablet, dan mobile.

## Jalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Data yang perlu diganti

Edit `data/site.ts` untuk:
- nama koperasi
- URL pendaftaran anggota
- email kemitraan
- WhatsApp
- statistik
- unit usaha
- produk, harga, dan stok

## Gambar

Foto contoh berada di `public/images/`. Kamu bisa menggantinya dengan foto asli KOPDES tanpa mengubah struktur halaman.

Logo utama:
`public/images/brand/logo-kopdes.png`

Hero:
`public/images/hero/kantor-contoh.jpg`

Foto unit usaha:
`public/images/units/`

Produk:
`public/images/produk/`
