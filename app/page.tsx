"use client";

import { useEffect, useState } from "react";

type Categoria = "cabeleireira" | "manicure" | "cilios";

type Servico = {
  id: number;
  nome: string;
  preco: number | string | null;
  duracao_minutos: number | null;
  categoria: Categoria;
};

const categorias: { id: Categoria; nome: string }[] = [
  { id: "cabeleireira", nome: "💇‍♀️ Cabeleireira" },
  { id: "manicure", nome: "💅 Manicure" },
  { id: "cilios", nome: "👁️ Cílios" },
];

const agendas: Record<Categoria, string> = {
  cabeleireira: "https://calendar.app.google/pkfHoDHpikok799W9",
  manicure: "https://calendar.app.google/Vf6JCDdZHQWCrRABA",
  cilios: "https://calendar.app.google/3XqGkueqkoPA7d2S8",
};

const nomesCategorias: Record<Categoria, string> = {
  cabeleireira: "cabeleireira",
  manicure: "manicure",
  cilios: "cílios",
};

const linkAvaliacaoDra =
  "https://calendar.app.google/3XqGkueqkoPA7d2S8";

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

function formatarPreco(valor: Servico["preco"]) {
  if (valor === null || valor === "") {
    return "Valor a consultar";
  }

  const numero = Number(valor);

  if (!Number.isFinite(numero) || numero <= 0) {
    return "Valor a consultar";
  }

  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatarDuracao(valor: number | null) {
  if (!valor || valor <= 0) {
    return "Duração a confirmar";
  }

  const horas = Math.floor(valor / 60);
  const minutos = valor % 60;

  if (!horas) return `${minutos} min`;
  if (!minutos) return `${horas} h`;

  return `${horas} h ${minutos} min`;
}

export default function ExcellenceCliente() {
  const [categoria, setCategoria] =
    useState<Categoria>("cabeleireira");

  const [servicos, setServicos] = useState<Servico[]>([]);
  const [servicoId, setServicoId] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [tentativa, setTentativa] = useState(0);

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

  useEffect(() => {
    let cancelado = false;

    async function carregarServicos() {
      setCarregando(true);
      setErro("");

      try {
        const { supabase } = await import("../lib/supabase");

        const { data, error } = await supabase
          .from("servicos")
          .select("id, nome, preco, duracao_minutos, categoria")
          .in("categoria", ["cabeleireira", "manicure", "cilios"])
          .order("nome", { ascending: true });

        if (error) throw error;

        if (!cancelado) {
          setServicos((data ?? []) as Servico[]);
        }
      } catch {
        if (!cancelado) {
          setErro(
            "Não foi possível carregar os serviços. Você pode tentar novamente ou abrir a agenda abaixo."
          );
        }
      } finally {
        if (!cancelado) {
          setCarregando(false);
        }
      }
    }

    void carregarServicos();

    return () => {
      cancelado = true;
    };
  }, [tentativa]);

  const servicosDaCategoria = servicos.filter(
    (servico) => servico.categoria === categoria
  );

  const selecionado = servicosDaCategoria.find(
    (servico) => String(servico.id) === servicoId
  );

  function mudarCategoria(novaCategoria: Categoria) {
    setCategoria(novaCategoria);
    setServicoId("");
  }

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
          Escolha a categoria e conheça nossos serviços.
        </p>
      </header>

      <main className="w-full max-w-md space-y-8">
        <section aria-labelledby="titulo-servicos">
          <h2
            id="titulo-servicos"
            className="text-sm font-bold text-[#B8860B] mb-4"
          >
            Qual cuidado você procura?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 8,
            }}
          >
            {categorias.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={categoria === item.id}
                onClick={() => mudarCategoria(item.id)}
                className="rounded-2xl px-2 py-4 text-xs font-bold border transition-colors"
                style={{
                  backgroundColor:
                    categoria === item.id ? "#D8A7B1" : "#FFFFFF",
                  color:
                    categoria === item.id ? "#FFFFFF" : "#4A4A4A",
                  borderColor:
                    categoria === item.id ? "#D8A7B1" : "#E8DCC4",
                }}
              >
                {item.nome}
              </button>
            ))}
          </div>

          <div className="mt-4 bg-white rounded-2xl p-5 shadow-sm border border-[#E8DCC4]">
            {carregando ? (
              <p role="status" className="text-sm">
                Carregando serviços…
              </p>
            ) : erro ? (
              <div role="alert">
                <p className="text-sm">{erro}</p>

                <button
                  type="button"
                  onClick={() => setTentativa((valor) => valor + 1)}
                  className="mt-3 text-sm font-bold text-[#B8860B] underline"
                >
                  Tentar novamente
                </button>
              </div>
            ) : servicosDaCategoria.length === 0 ? (
              <p role="status" className="text-sm leading-relaxed">
                A lista de serviços desta categoria está
                indisponível no momento. Você pode abrir a
                agenda abaixo ou tirar dúvidas pelo WhatsApp.
              </p>
            ) : (
              <>
                <label
                  htmlFor="servico"
                  className="block text-sm font-semibold mb-2"
                >
                  Escolha o serviço
                </label>

                <select
                  id="servico"
                  value={servicoId}
                  onChange={(evento) =>
                    setServicoId(evento.target.value)
                  }
                  className="w-full min-w-0 rounded-xl border border-[#D8A7B1] bg-white p-3 text-base"
                >
                  <option value="">Selecione uma opção</option>

                  {servicosDaCategoria.map((servico) => (
                    <option key={servico.id} value={servico.id}>
                      {servico.nome}
                    </option>
                  ))}
                </select>

                {selecionado && (
                  <div
                    aria-live="polite"
                    className="mt-4 rounded-xl bg-[#FFF5F6] p-4 space-y-2"
                  >
                    <h3 className="font-semibold">
                      {selecionado.nome}
                    </h3>

                    <p className="text-sm">
                      Valor:{" "}
                      <strong>
                        {formatarPreco(selecionado.preco)}
                      </strong>
                    </p>

                    <p className="text-sm">
                      Duração prevista:{" "}
                      <strong>
                        {formatarDuracao(
                          selecionado.duracao_minutos
                        )}
                      </strong>
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-4">
            <a
              href={agendas[categoria]}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#D8A7B1] text-white p-4 rounded-2xl font-bold text-sm shadow-sm"
            >
              Abrir agenda de {nomesCategorias[categoria]}
            </a>

            <p className="mt-3 text-xs leading-relaxed text-gray-600">
              A agenda abre em outra página. O serviço escolhido
              aqui e sua duração não são enviados automaticamente.
              Confira se o horário reservado comporta o procedimento.
              Em caso de dúvida, fale com a profissional.
            </p>
          </div>
        </section>

        <section
          aria-label="Avaliação e contato"
          className="space-y-4"
        >
          <a
            href={linkAvaliacaoDra}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#FFFCF5] p-5 rounded-2xl shadow-sm border border-[#B8860B]/40 text-[#B8860B] text-sm font-bold"
          >
            Agendar avaliação com a Dra. Kati
          </a>

          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-white p-5 rounded-2xl shadow-sm border border-[#D8A7B1]/40 text-[#4A4A4A] text-sm font-bold"
          >
            💬 Tirar dúvidas pelo WhatsApp
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
                className="flex flex-col items-center justify-center gap-2 bg-white px-2 py-4 rounded-2xl shadow-sm text-center"
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
          className="block text-center px-4 py-5 bg-[#D8A7B1] text-white text-sm font-bold rounded-2xl shadow-sm"
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
