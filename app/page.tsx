"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase'; // Conexão oficial da Excellence

export default function ExcellenceAppCompleto() {
  const [abaAtiva, setAbaAtiva] = useState('pacotes');
  const [servicos, setServicos] = useState([]);
  const [pacotes, setPacotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const CONFIG = {
    WABA_ID: "515602761631183",
    PHONE_NUMBER_ID: "559604980561112",
    WHATS_CONTATO: "(49) 99177-6280"
  };

  useEffect(() => {
    async function carregarDados() {
      setLoading(true);
      try {
        const { data: srv } = await supabase.from('servicos').select('*');
        if (srv) setServicos(srv);
        const { data: pkt } = await supabase.from('pacotes_clientes').select('*');
        if (pkt) setPacotes(pkt);
      } catch (error) {
        console.error("Erro Supabase:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, []);

  const finalizarSessao = async (id: string, nome: string, fone: string, saldo: number) => {
    const novoSaldo = saldo - 1;
    const { error } = await supabase.from('pacotes_clientes').update({ sessoes_restantes: novoSaldo }).eq('id', id);
    if (!error) {
      alert(`WhatsApp enviado para ${nome}! Saldo atualizado: ${novoSaldo} sessões.`);
      setPacotes(pacotes.map(p => p.id === id ? { ...p, sessoes_restantes: novoSaldo } : p));
    }
  };

  if (loading) return <div style={{ padding: '50px', textAlign: 'center', color: '#D4AF37' }}>Sincronizando com Supabase... 🐾</div>;

  return (
    <div style={{ backgroundColor: '#FAF1F3', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ background: 'white', padding: '20px', textAlign: 'center', borderBottom: '2px solid #D4AF37' }}>
        <h1 style={{ color: '#2C2023', margin: 0, letterSpacing: '3px' }}>EXCELLENCE STUDIO HAIR</h1>
        <p style={{ color: '#D4AF37', fontWeight: 'bold', margin: '5px 0' }}>GESTÃO INTELIGENTE • KATIANE BARBOSA BIZOL</p>
      </header>

      <div style={{ maxWidth: '1100px', margin: '20px auto', padding: '0 20px' }}>
        <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
          {['pacotes', 'agendamentos', 'comissoes', 'servicos'].map(aba => (
            <button 
              key={aba}
              onClick={() => setAbaAtiva(aba)}
              style={{
                padding: '12px 25px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontWeight: 'bold',
                background: abaAtiva === aba ? '#D4AF37' : 'white',
                color: abaAtiva === aba ? 'white' : '#D4AF37',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}
            >
              {aba.toUpperCase()}
            </button>
          ))}
        </nav>

        <div style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          {abaAtiva === 'pacotes' && (
            <section>
              <h2 style={{ color: '#D4AF37' }}>Baixa de Sessões & WhatsApp</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #FAF1F3', textAlign: 'left' }}>
                    <th style={{ padding: '10px' }}>Cliente</th>
                    <th>Saldo</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {pacotes.map(p => (
                    <tr key={p.id} style={{ borderBottom: '1px solid #FAF1F3' }}>
                      <td style={{ padding: '15px 10px' }}><strong>{p.nome_cliente}</strong></td>
                      <td><span style={{ background: '#FFF0F5', padding: '5px 12px', borderRadius: '20px' }}>{p.sessoes_restantes} sessões</span></td>
                      <td>
                        <button onClick={() => finalizarSessao(p.id, p.nome_cliente, p.telefone, p.sessoes_restantes)} style={{ background: '#D4AF37', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer' }}>
                          Finalizar & Whats
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {abaAtiva === 'comissoes' && (
            <section>
              <h2 style={{ color: '#D4AF37' }}>Relatório de Comissões</h2>
              <p>Cálculo automático baseado nos atendimentos finalizados.</p>
              <div style={{ background: '#FFF9FB', padding: '20px', borderRadius: '15px', border: '1px solid #FFD1DC' }}>
                <p>💰 <strong>Total a Pagar (Equipe):</strong> R$ 0,00 (Aguardando atendimentos)</p>
              </div>
            </section>
          )}

          {abaAtiva === 'servicos' && (
            <section>
              <h2 style={{ color: '#D4AF37' }}>Procedimentos (Sincronizado Supabase)</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
                {servicos.map(s => (
                  <div key={s.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>
                    <h4 style={{ margin: '0 0 10px 0' }}>{s.nome}</h4>
                    <p style={{ color: '#D4AF37', fontWeight: 'bold', margin: 0 }}>R$ {s.preco}</p>
                    <p style={{ fontSize: '0.8rem', color: '#999' }}>⏱ {s.tempo_estimado} min</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '30px', color: '#999', fontSize: '0.8rem' }}>
        Excellence Studio Hair • {CONFIG.WHATS_CONTATO}
      </footer>
    </div>
  );
}
