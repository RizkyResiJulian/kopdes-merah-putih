// ============================================================
// KDKMP — Website Data
// Koperasi Desa/Kelurahan Merah Putih
// ============================================================

/**
 * Informasi utama website
 */
export const site = {
  name: "Koperasi Desa/Kelurahan Merah Putih",
  shortName: "KOPDES Merah Putih",

  registrationUrl: "https://simkopdes.go.id/daftar/anggota",

  loginUrl: "https://simkopdes.go.id/masuk",

  partnershipEmail: "kemitraan@kdkmp-merahputih.id",

  whatsapp: "https://wa.me/6289655591884",
};

/**
 * Statistik utama koperasi
 */
export const stats = [
  {
    value: "3.700+",
    label: "Warga Desa",
  },
  {
    value: "4",
    label: "Unit Usaha",
  },
  {
    value: "100+",
    label: "Produk Tersedia",
  },
  {
    value: "Rp -",
    label: "Volume Usaha / Bulan",
  },
];

/**
 * Unit usaha KDKMP
 */
export const units = [
  {
    slug: "gerai-ritel",
    title: "Gerai Ritel",
    short: "Kebutuhan harian masyarakat dengan harga terjangkau.",
    description:
      "Gerai Ritel menjadi pusat pemenuhan kebutuhan masyarakat sekaligus etalase produk anggota dan UMKM desa.",
    icon: "store",
    image: "/images/units/gerai-ritel.webp",
  },

  {
    slug: "simpan-pinjam",
    title: "Simpan Pinjam",
    short: "Layanan Simpan Pinjam. (Segera Tersedia)",
    description:
      "Layanan simpan pinjam dirancang untuk mendukung kebutuhan ekonomi anggota dengan tata kelola yang tertib sesuai ketentuan koperasi.",
    icon: "wallet",
    image: "/images/units/keuangan.jpg",
  },

  {
    slug: "produk-lokal",
    title: "Produk Lokal & UMKM",
    short: "Mengangkat produk unggulan desa ke pasar lebih luas.",
    description:
      "KDKMP membantu mengembangkan, mengkurasi, dan memasarkan produk lokal agar memiliki nilai tambah dan akses pasar.",
    icon: "package",
    image: "/images/units/umkm.webp",
  },

  {
    slug: "distribusi-subsidi",
    title: "Distribusi Subsidi",
    short: "Penyaluran barang subsidi agar lebih tepat sasaran.",
    description:
      "Unit distribusi subsidi LPG 3Kg, Beras SPHP 5Kg, Minyak Kitas 1L, Pupuk Subsidi kepada masyarakat desa agar lebih tepat sasaran dan di nikmati oleh seluruh masyarakat.",
    icon: "truck",
    image: "/images/units/sphp.webp",
  },
];

/**
 * Katalog produk Gerai Ritel
 */
export const products = [
  {
    id: "BRG001",
    name: "Beras Premium 5 Kg",
    category: "Sembako",
    price: 75000,
    stock: 24,
    unit: "sak",
    image: "/images/produk/beras-placeholder.svg",
    description: "Beras premium untuk kebutuhan rumah tangga.",
  },

  {
    id: "BRG002",
    name: "Gula Pasir 1 Kg",
    category: "Sembako",
    price: 18000,
    stock: 35,
    unit: "pcs",
    image: "/images/produk/gula-placeholder.svg",
    description:
      "Gula pasir kemasan untuk kebutuhan rumah tangga.",
  },

  {
    id: "BRG003",
    name: "Minyak Goreng 1 Liter",
    category: "Sembako",
    price: 20000,
    stock: 32,
    unit: "pcs",
    image: "/images/produk/minyak-placeholder.svg",
    description:
      "Minyak goreng kemasan untuk kebutuhan sehari-hari.",
  },

  {
    id: "BRG004",
    name: "Tepung Mocaf Premium 500 g",
    category: "Produk Lokal",
    price: 18000,
    stock: 18,
    unit: "pcs",
    image: "/images/produk/mocaf-placeholder.svg",
    description:
      "Tepung mocaf premium sebagai alternatif bahan pangan berbasis singkong.",
  },

  {
    id: "BRG005",
    name: "Kopi Bubuk Lokal 200 g",
    category: "Produk Lokal",
    price: 28000,
    stock: 12,
    unit: "pcs",
    image: "/images/produk/kopi-placeholder.svg",
    description:
      "Kopi bubuk dari potensi hasil perkebunan lokal.",
  },

  {
    id: "BRG006",
    name: "Pupuk Organik 5 Kg",
    category: "Pertanian",
    price: 25000,
    stock: 20,
    unit: "sak",
    image: "/images/produk/pupuk-placeholder.svg",
    description:
      "Pupuk organik untuk mendukung kebutuhan pertanian.",
  },
];

/**
 * Potensi desa yang dikembangkan KDKMP
 *
 * Format:
 * [nomor, kategori, deskripsi]
 */
export const potentials = [
  [
    "01",
    "Pertanian",
    "Komoditas, hasil bumi, dan sarana produksi pertanian.",
  ],

  [
    "02",
    "UMKM",
    "Produk olahan, kerajinan, kuliner, dan usaha masyarakat.",
  ],

  [
    "03",
    "Perdagangan",
    "Jaringan distribusi dan kebutuhan masyarakat.",
  ],

  [
    "04",
    "Pangan",
    "Pengolahan dan pemasaran produk pangan lokal.",
  ],

  [
    "05",
    "Potensi Alam",
    "Sumber daya lokal yang dapat dikembangkan berkelanjutan.",
  ],

  [
    "06",
    "Digital",
    "Digitalisasi layanan, pemasaran, dan administrasi koperasi.",
  ],
];