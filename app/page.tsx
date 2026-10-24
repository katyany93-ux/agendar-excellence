"use client";

import { useEffect } from "react";

const agendamentos = [
  {
    nome: "Agendar com Cabeleireira",
    icone: "💇‍♀️",
    link: "https://calendar.app.google/pkfHoDHpikok799W9",
  },
  {
    nome: "Agendar com Manicure",
    icone: "💅",
    link: "https://calendar.app.google/Vf6JCDdZHQWCrRABA",
  },
  {
    nome: "Agendar Cílios",
    icone: "👁️",
    link: "https://calendar.app.google/enaRcvgFDea3Qpmx8",
  },
];

const linkAvaliacaoDra =
  "https://calendar.app.google/sDgZA2FgNW95ckS6A";

const linkWhatsApp =
  "https://wa.me/message/A6OJKD6MBH2FJ1";

const linkFormulario =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtpqE-3s28JbtBovFGTw6DGUZpOP12nKpafP7XBlQk2MuLRg/viewform";

const redes = [
  {
    nome: "Salão",
    icone: "✨",
    link: "https://www.instagram.com/excellence.studiodebeleza",
  },
  {
    nome: "Dra. Katiane",
    icone: "👩‍⚕️",
    link: "https://www.instagram.com/dra.katiane.barbosa.bizol",
  },
  {
    nome: "Loja",
    icone: "🛍️",
    link: "https://www.instagram.com/store.excellence.online",
  },
];

export default function ExcellenceCliente() {
  useEffect(() => {
    async function registrarAcesso() {
      try {
        const { supabase } = await import("../lib/supabase");

        await supabase.from("acessos").insert([
          {
            pagina: "home",
            data: new Date().toISOString(),
          },
        ]);
      } catch {
        // Uma falha no registro não impede a página de abrir.
      }
    }

    void registrarAcesso();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF5F6] text-[#4A4A4A] px-5 py-6 font-sans flex flex-col items-center">
      <header className="w-full max-w-md text-center flex flex-col items-center pb-8">
        <img
          src="/logo.png"
          alt="Excellence — Estética Avançada e Studio de Beleza"
          width={220}
          height={160}
          style={{
            width: 220,
            maxWidth: "100%",
            height: 160,
            objectFit: "contain",
            background: "transparent",
          }}
        />

        <h1 className="mt-4 text-xl font-semibold text-[#B8860B]">
          Seu momento de cuidado começa aqui.
        </h1>

        <p className="mt-2 text-sm leading-relaxed">
          Escolha o atendimento abaixo e agende seu horário.
        </p>
      </header>

      <main className="w-full max-w-md space-y-8">
        <section
          aria-labelledby="titulo-agendas"
          className="space-y-4"
        >
          <h2
            id="titulo-agendas"
            className="text-[11px] font-bold text-[#B8860B] uppercase tracking-[0.2em] ml-1"
          >
            Nossas agendas
          </h2>

          {agendamentos.map((agenda) => (
            <a
              key={agenda.link}
              href={agenda.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-white p-5 rounded-2xl shadow-sm border border-[#B8860B]/30 hover:border-[#B8860B] transition-all active:scale-95"
            >
              <span className="text-xs font-bold uppercase tracking-[0.05em] text-gray-600">
                {agenda.nome}
              </span>

              <span aria-hidden="true" className="text-xl">
                {agenda.icone}
              </span>
            </a>
          ))}

          <a
            href={linkAvaliacaoDra}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#FFFCF5] p-5 rounded-2xl shadow-sm border border-[#B8860B]/40 text-[#B8860B] text-sm font-bold hover:bg-white transition-all active:scale-95"
          >
            Agendar avaliação com a Dra. Kati
          </a>
        </section>

        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-white p-5 rounded-2xl shadow-sm border border-[#D8A7B1]/40 text-[#4A4A4A] text-sm font-bold transition-all active:scale-95"
        >
          💬 Tirar dúvidas pelo WhatsApp
        </a>

        <section aria-labelledby="titulo-instagram">
          <h2
            id="titulo-instagram"
            className="text-center text-sm font-bold text-[#B8860B] mb-4"
          >
            Acompanhe no Instagram
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 8,
            }}
          >
            {redes.map((rede) => (
              <a
                key={rede.link}
                href={rede.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram — ${rede.nome}`}
                className="flex flex-col items-center justify-center gap-2 bg-white px-2 py-4 rounded-2xl shadow-sm text-center transition-all active:scale-95"
              >
                <span aria-hidden="true" className="text-xl">
                  {rede.icone}
                </span>

                <span className="text-xs font-bold">
                  {rede.nome}
                </span>
              </a>
            ))}
          </div>
        </section>

        <a
          href={linkFormulario}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-4 py-5 bg-[#D8A7B1] text-white text-sm font-bold rounded-2xl shadow-sm hover:bg-[#C696A0] transition-all active:scale-95"
        >
          ⭐ Avalie sua experiência Excellence
        </a>
      </main>

      <footer className="mt-12 mb-6 text-center text-[9px] uppercase tracking-[0.2em] text-[#D8A7B1]">
        Excellence • Luxury Experience
      </footer>
    </div>
  );
}
