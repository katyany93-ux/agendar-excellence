import FormularioVenda from '../components/FormularioVenda';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-500">EXCELLENCE</h1>
        <p className="text-zinc-400">Gestão de Salão e Clínica</p>
      </div>

      <a
        href="/black-novembro.png"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 block w-full max-w-md rounded-xl bg-yellow-400 px-5 py-4 text-center font-bold text-black"
      >
        VER PROMOÇÃO BLACK NOVEMBRO
      </a>

      <FormularioVenda />
    </main>
  );
}
