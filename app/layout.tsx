import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Excellence Agendamentos",
  description: "Agende seu horário na Excellence Estética & Beleza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
