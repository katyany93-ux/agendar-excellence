import FormularioVenda from '@/components/FormularioVenda';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      {/* Cabeçalho Excellence */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-500">EXCELLENCE</h1>
        <p className="text-zinc-400">Gestão de Salão e Clínica</p>
      </div>

      {/* O seu formulário de vendas */}
      <FormularioVenda />
    </main>
  );
}
