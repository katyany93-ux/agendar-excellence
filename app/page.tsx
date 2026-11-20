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
            AGENDAR AVALIAÇÃO COM DRA KATI
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
