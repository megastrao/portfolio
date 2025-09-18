import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seu Nome — Desenvolvedor",
  description: "Portfólio com projetos, stack e contatos.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Seu Nome — Desenvolvedor", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
