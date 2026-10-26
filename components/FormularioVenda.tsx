"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase'; // Ajuste o caminho se necessário

export default function FormularioVenda() {
  const [categoria, setCategoria] = useState<'salao' | 'clinica' | null>(null);
  const [profissionais, setProfissionais] = useState<any[]>([]);
  const [servicos, setServicos] = useState<any[]>([]);
  const [selecionado, setSelecionado] = useState({
    profissionalId: '',
    servicoId: '',
    valorBruto: 0,
    comissaoValor: 0
  });

  // 1. Busca profissionais do seu banco real
  useEffect(() => {
    async function carregarDados() {
      const { data: profs } = await supabase.from('profissionais').select('*');
      if (profs) setProfissionais(profs);
    }
    carregarDados();
  }, []);

  // 2. Busca serviços filtrados por categoria
  useEffect(() => {
    if (categoria) {
      async function carregarServicos() {
        const { data: servs } = await supabase
          .from('servicos')
          .select('*')
          .eq('categoria', categoria);
        if (servs) setServicos(servs);
      }
      carregarServicos();
    }
  }, [categoria]);

  // 3. Lógica de cálculo de comissão automática
  const handleServicoChange = (id: string) => {
    const servico = servicos.find(s => s.id.toString() === id);
    if (servico && selecionado.profissionalId) {
      const prof = profissionais.find(p => p.id.toString() === selecionado.profissionalId);
      const comissao = servico.preco_bruto * (prof?.comissao_percentual || 0);
      
      setSelecionado(prev => ({
        ...prev,
        servicoId: id,
        valorBruto: servico.preco_bruto,
        comissaoValor: comissao
      }));
    }
  };

  const salvarVenda = async () => {
    const { error } = await supabase.from('atendimentos').insert([{
      profissional_id: parseInt(selecionado.profissionalId),
      servico_id: parseInt(selecionado.servicoId),
      valor_total: selecionado.valorBruto,
      valor_comissao: selecionado.comissaoValor,
      categoria_venda: categoria
    }]);

    if (!error) {
      alert('Venda da Excellence registrada com sucesso! 🐾');
      setCategoria(null);
    } else {
      console.error(error);
    }
  };

  return (
    <div className="bg-black text-white p-6 rounded-xl border border-yellow-500 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Lançar Atendimento</h2>

      {/* Seleção de Categoria */}
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setCategoria('salao')}
          className={`flex-1 py-3 rounded-lg font-bold border-2 ${categoria === 'salao' ? 'bg-yellow-500 text-black border-yellow-500' : 'border-yellow-500 text-yellow-500'}`}
        >
          SALÃO
        </button>
        <button 
          onClick={() => setCategoria('clinica')}
          className={`flex-1 py-3 rounded-lg font-bold border-2 ${categoria === 'clinica' ? 'bg-yellow-500 text-black border-yellow-500' : 'border-yellow-500 text-yellow-500'}`}
        >
          CLÍNICA
        </button>
      </div>

      {categoria && (
        <div className="space-y-4">
          {/* Seleção de Profissional */}
          <div>
            <label className="block text-sm mb-1">Profissional</label>
            <select 
              className="w-full bg-zinc-900 border border-zinc-700 p-2 rounded"
              onChange={(e) => setSelecionado({...selecionado, profissionalId: e.target.value})}
            >
              <option value="">Selecione...</option>
              {profissionais.map(p => <option key={p.id} value={p.id}>{p.nome} ({p.funcao})</option>)}
            </select>
          </div>

          {/* Seleção de Serviço */}
          <div>
            <label className="block text-sm mb-1">Serviço</label>
            <select 
              className="w-full bg-zinc-900 border border-zinc-700 p-2 rounded"
              onChange={(e) => handleServicoChange(e.target.value)}
            >
              <option value="">Selecione o serviço...</option>
              {servicos.map(s => <option key={s.id} value={s.id}>{s.nome} - R$ {s.preco_bruto}</option>)}
            </select>
          </div>

          {/* Resumo Financeiro */}
          {selecionado.valorBruto > 0 && (
            <div className="bg-zinc-900 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-sm">Valor Bruto: <span className="font-bold">R$ {selecionado.valorBruto.toFixed(2)}</span></p>
              <p className="text-yellow-500 text-lg font-bold">Comissão: R$ {selecionado.comissaoValor.toFixed(2)}</p>
            </div>
          )}

          <button 
            onClick={salvarVenda}
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg mt-4 hover:bg-yellow-400 transition-colors"
          >
            FINALIZAR LANÇAMENTO
          </button>
        </div>
      )}
    </div>
  );
}
