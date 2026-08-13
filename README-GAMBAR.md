# KDKMP Company Profile V3

Versi ini sudah memiliki struktur folder gambar. Placeholder SVG sengaja dibuat agar website tetap bisa berjalan tanpa download gambar dari internet.

## Cara mengganti gambar

Cukup ganti file placeholder dengan gambar milik KDKMP. Rekomendasi:
- Foto: JPG/JPEG/WebP
- Logo: PNG/SVG
- Rasio foto umum: 3:2 atau 16:10

Folder:
public/images/brand
public/images/hero
public/images/about
public/images/units
public/images/produk
public/images/kegiatan
public/images/potensi

Contoh:
public/images/produk/beras-placeholder.svg
diganti menjadi:
public/images/produk/beras.jpg

Setelah mengganti nama file, sesuaikan path di data/site.ts jika nama file berbeda.

## Jalankan

npm install
npm run dev

Lalu buka http://localhost:3000
