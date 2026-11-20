
'use client';

import { useState } from 'react';
import FormularioVenda from '@/components/FormularioVenda';

export default function Home() {
  const [mostrarPromocoes, setMostrarPromocoes] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      {/* Cabeçalho Excellence */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-500">
          EXCELLENCE
        </h1>
        <p className="text-zinc-400">
          Gestão de Salão e Clínica
        </p>
      </div>

      {/* Botão das promoções */}
      <button
        type="button"
        onClick={() => setMostrarPromocoes(true)}
        className="mb-6 rounded-xl border border-yellow-500 bg-zinc-900 px-6 py-4 text-center font-bold text-yellow-400 shadow-lg"
      >
        🖤 VER PROMOÇÕES BLACK NOVEMBER
      </button>

      {/* Formulário existente */}
      <FormularioVenda />

      {/* Janela das promoções */}
      {mostrarPromocoes && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Promoções Black November"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <div className="relative flex max-h-[95vh] w-full max-w-lg flex-col rounded-xl bg-zinc-900 p-3">
            <button
              type="button"
              onClick={() => setMostrarPromocoes(false)}
              aria-label="Fechar promoções"
              className="absolute right-4 top-4 z-10 rounded-full bg-black px-3 py-2 font-bold text-white"
            >
              ✕
            </button>

            <div className="overflow-y-auto">
              <img
                src="/black-november.png"
                alt="Promoções Black November do Studio Excellence"
                className="w-full rounded-lg"
              />
            </div>

            <a
              href="https://agendar-excellence-gold.vercel.app/"
              className="mt-3 rounded-lg bg-yellow-500 p-3 text-center font-bold text-black"
            >
              📅 AGENDAR MEU HORÁRIO
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
