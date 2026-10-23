"use client";

import { useEffect } from "react";

export default function ExcellenceCliente() {
  useEffect(() => {
    // Uma falha no registro de acesso não impede a página de abrir.
    async function registrarAcesso() {
      try {
        const { supabase } = await import("../lib/supabase");

        const { error } = await supabase.from("acessos").insert([
          {
            pagina: "home",
            data: new Date().toISOString(),
          },
        ]);

        if (error) {
          console.warn("Não foi possível registrar o acesso.");
        }
      } catch {
        console.warn("Registro de acesso indisponível.");
      }
    }

    void registrarAcesso();
  }, []);

  const linkCabelo =
    "https://calendar.app.google/pkfHoDHpikok799W9";

  const linkManicure =
    "https://calendar.app.google/Vf6JCDdZHQWCrRABA";

  // Coloque o link de agendamento de cílios entre as aspas.
  const linkCilios = "";

  const linkWhatsEstetica =
    "https://wa.me/message/A6OJKD6MBH2FJ1";

  const linkAvaliacao =
    "https://docs.google.com/forms/d/e/1FAIpQLSdtpqE-3s28JbtBovFGTw6DGUZpOP12nKpafP7XBlQk2MuLRg/viewform";

  const estiloAgenda =
    "flex items-center justify-between gap-3 bg-white p-5 rounded-2xl shadow-md border border-[#B8860B]/30 hover:border-[#B8860B] transition-all active:scale-95";

  const estiloTextoAgenda =
    "text-[11px] font-bold uppercase tracking-[0.1em] text-gray-600";

  const redesSociais = [
    {
      nome: "Salão",
      descricao: "Instagram do Salão Excellence",
      link: "https://www.instagram.com/excellence.studiodebeleza",
      icone: "✨",
    },
    {
      nome: "Dra. Katiane",
      descricao: "Instagram da Dra. Katiane",
      link: "https://www.instagram.com/dra.katiane.barbosa.bizol",
      icone: "👩‍⚕️",
    },
    {
      nome: "Loja",
      descricao: "Instagram da Store Excellence",
      link: "https://www.instagram.com/store.excellence.online",
      icone: "🛍️",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F6] text-[#4A4A4A] p-6 font-sans flex flex-col items-center">
      <header className="py-10 text-center w-full max-w-md flex flex-col items-center">
        <div className="w-24 h-24 bg-white rounded-full shadow-lg border-2 border-[#D8A7B1]/20 flex items-center justify-center mb-6 overflow-hidden">
          <img
            src="/logo.png"
            alt="Excellence"
            width={96}
            height={96}
            className="w-full h-full object-contain p-2"
          />
        </div>

        <h1 className="text-3xl font-light tracking-[0.3em] text-[#B8860B] uppercase mb-1">
          Excellence
        </h1>

        <p className="text-[9px] text-[#D8A7B1] uppercase tracking-[0.4em] font-bold">
          Estética Avançada &amp; Studio
        </p>

        <div className="h-px w-12 bg-[#B8860B] opacity-20 mt-4" />
      </header>

      <main className="w-full max-w-md space-y-8">
        <section aria-labelledby="titulo-agendas" className="space-y-4">
          <h2
            id="titulo-agendas"
            className="text-[10px] font-bold text-[#D8A7B1] uppercase tracking-[0.2em] ml-1"
          >
            Nossas agendas
          </h2>

          <a
            href={linkCabelo}
            target="_blank"
            rel="noopener noreferrer"
            className={estiloAgenda}
          >
            <span className={estiloTextoAgenda}>
              Agendar com Cabeleireiro
            </span>
            <span aria-hidden="true" className="text-xl">
              💇‍♀️
            </span>
          </a>

          <a
            href={linkManicure}
            target="_blank"
            rel="noopener noreferrer"
            className={estiloAgenda}
          >
            <span className={estiloTextoAgenda}>
              Agendar com Manicure
            </span>
            <span aria-hidden="true" className="text-xl">
              💅
            </span>
          </a>

          {linkCilios ? (
            <a
              href={linkCilios}
              target="_blank"
              rel="noopener noreferrer"
              className={estiloAgenda}
            >
              <span className={estiloTextoAgenda}>
                Agendar Cílios
              </span>
              <span aria-hidden="true" className="text-xl">
                👁️
              </span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="w-full flex items-center justify-between gap-3 bg-white p-5 rounded-2xl border border-[#B8860B]/20 opacity-60 cursor-not-allowed text-left"
            >
              <span>
                <span className={`block ${estiloTextoAgenda}`}>
                  Agendar Cílios
                </span>
                <span className="block text-xs text-gray-500 mt-1">
                  Agenda em breve
                </span>
              </span>
              <span aria-hidden="true" className="text-xl">
                👁️
              </span>
            </button>
          )}

          <a
            href={linkWhatsEstetica}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#FFFCF5] p-5 rounded-2xl shadow-md border border-[#B8860B]/40 hover:bg-white transition-all active:scale-95"
          >
            <span className="text-[11px] text-center font-bold uppercase tracking-[0.15em] text-[#B8860B]">
              Agendar Procedimentos Estéticos
            </span>
          </a>
        </section>

        <section aria-labelledby="titulo-instagram">
          <h2
            id="titulo-instagram"
            className="text-center text-sm font-bold text-[#B8860B] mb-4"
          >
            Acompanhe no Instagram
          </h2>

          <div
            className="grid grid-cols-3 gap-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "8px",
            }}
          >
            {redesSociais.map((rede) => (
              <a
                key={rede.link}
                href={rede.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={rede.descricao}
                className="flex flex-col items-center justify-center gap-2 bg-white px-2 py-4 rounded-2xl shadow-md border border-[#D8A7B1]/20 text-center hover:border-[#B8860B] transition-all active:scale-95"
              >
                <span aria-hidden="true" className="text-xl">
                  {rede.icone}
                </span>
                <span className="text-[11px] font-bold text-gray-600">
                  {rede.nome}
                </span>
              </a>
            ))}
          </div>
        </section>

        <a
          href={linkAvaliacao}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center px-4 py-5 bg-[#D8A7B1] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl shadow-lg hover:bg-[#C696A0] transition-all active:scale-95"
        >
          ⭐ Avalie sua experiência Excellence
        </a>
      </main>

      <footer className="mt-16 mb-6 text-center text-[9px] uppercase tracking-[0.3em] text-[#D8A7B1]">
        Excellence • Luxury Experience
      </footer>
    </div>
  );
}
