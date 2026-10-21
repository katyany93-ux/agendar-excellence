import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excellence | Agendamentos",
  description: "Portal de agendamentos Excellence Estética & Beleza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#FFFFFF' }}>{children}</body>
    </html>
  );
}
