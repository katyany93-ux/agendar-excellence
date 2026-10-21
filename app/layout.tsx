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
      <body className="bg-white m-0 p-0">{children}</body>
    </html>
  );
}
