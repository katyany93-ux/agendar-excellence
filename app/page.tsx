
'use client';

import { useState } from 'react';
import FormularioVenda from '../components/FormularioVenda';

export default function Home() {
  const [mostrarPromocoes, setMostrarPromocoes] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">

      {/* CABEÇALHO */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-500">
          EXCELLENCE
        </h1>

        <p className="text-zinc-400">
          Gestão de Salão e Clínica
        </p>
      </div>

      {/* BOTÃO BLACK NOVEMBER */}
      <div className="w-full max-w-md mb-6">
        <button
          type="button"
          onClick={() => setMostrarPromocoes(true)}
          className="w-full rounded-xl border-2 border-yellow-500 bg-zinc-900 px-6 py-5 text-center font-bold text-yellow-400 shadow-lg"
        >
          🖤 VER PROMOÇÕES BLACK NOVEMBER
        </button>
      </div>

      {/* BOTÃO AVALIAÇÃO */}
      <div className="w-full max-w-md mb-6">
        <a
          href="https://agendar-excellence-gold.vercel.app/"
          className="block w-full rounded-xl bg-yellow-500 px-6 py-5 text-center font-bold uppercase text-black shadow-lg"
        >
          AGENDAR AVALIAÇÃO COM DRA KATI
        </a>
      </div>

      {/* FORMULÁRIO ORIGINAL */}
      <FormularioVenda />

      {/* JANELA DAS PROMOÇÕES */}
      {mostrarPromocoes && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Promoções Black November"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <div className="relative flex max-h-[95vh] w-full max-w-lg flex-col rounded-2xl border border-yellow-500 bg-zinc-900 p-3 shadow-2xl">

            {/* FECHAR */}
            <button
              type="button"
              onClick={() => setMostrarPromocoes(false)}
              aria-label="Fechar promoções"
              className="absolute right-4 top-4 z-10 rounded-full bg-black px-4 py-2 font-bold text-white"
            >
              ✕
            </button>

            {/* IMAGEM DAS PROMOÇÕES */}
            <div className="overflow-y-auto">
              <img
                src="/black-november.png"
                alt="Promoções Black November Studio Excellence"
                className="w-full rounded-lg"
              />
            </div>

            {/* BOTÃO DE AGENDAMENTO */}
            <a
              href="https://agendar-excellence-gold.vercel.app/"
              onClick={() => setMostrarPromocoes(false)}
              className="mt-3 block rounded-xl bg-yellow-500 p-4 text-center font-bold uppercase text-black"
            >
              AGENDAR AVALIAÇÃO COM DRA KATI
            </a>

          </div>
        </div>
      )}
    </main>
  );
}
