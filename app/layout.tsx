import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KDKMP | Koperasi Desa/Kelurahan Merah Putih",
  description:
    "Portal informasi Koperasi Desa/Kelurahan Merah Putih.",

  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}