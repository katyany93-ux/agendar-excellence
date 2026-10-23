"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase'; // Caminho relativo corrigido para a Vercel

export default function ExcellenceCliente() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { 
    setMounted(true);
    // Log de acesso opcional ao Supabase
    const registrarAcesso = async () => {
      try {
        await supabase.from('acessos').insert([{ pagina: 'home', data: new Date().toISOString() }]);
      } catch (e) {
        console.log("Erro ao conectar com Supabase, mas o site continua rodando!");
      }
    };
    registrarAcesso();
  }, []);

  const linkCabelo = "https://calendar.app.google/pkfHoDHpikok799W9";
  const linkManicure = "https://calendar.app.google/Vf6JCDdZHQWCrRABA";
  const linkWhatsEstetica = "https://wa.me/message/A6OJKD6MBH2FJ1";
  const linkAvaliacao = "https://docs.google.com/forms/d/e/1FAIpQLSdtpqE-3s28JbtBovFGTw6DGUZpOP12nKpafP7XBlQk2MuLRg/viewform";

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFF5F6] text-[#4A4A4A] p-6 font-sans flex flex-col items-center">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}} />
      
      <header className="py-10 text-center w-full max-w-md flex flex-col items-center">
        <div className="w-24 h-24 bg-white rounded-full shadow-lg border-2 border-[#D8A7B1]/20 flex items-center justify-center mb-6 overflow-hidden">
          <img 
            src="/logo.png" 
            alt="Excellence" 
            className="w-full h-full object-contain p-2" 
            onError={(e) => e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=EK&backgroundColor=D8A7B1&textColor=ffffff"} 
          />
        </div>
        <h1 className="text-3xl font-light tracking-[0.3em] text-[#B8860B] uppercase mb-1">Excellence</h1>
        <p className="text-[9px] text-[#D8A7B1] uppercase tracking-[0.4em] font-bold">Estética Avançada & Studio</p>
        <div className="h-[1px] w-12 bg-[#B8860B] opacity-20 mt-4"></div>
      </header>

      <div className="w-full max-w-md space-y-5">
        <div className="space-y-4">
          <p className="text-[10px] font-bold text-[#D8A7B1] uppercase tracking-[0.2em] ml-1">Nossas Agendas</p>
          
          <a href={linkCabelo} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-md border border-[#B8860B]/30 hover:border-[#B8860B] transition-all active:scale-95">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-600">Agendar com Cabeleireiro</span>
            <span className="text-xl">💇‍♀️</span>
          </a>

          <a href={linkManicure} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-md border border-[#B8860B]/30 hover:border-[#B8860B] transition-all active:scale-95">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-600">Agendar com Manicure</span>
            <span className="text-xl">💅</span>
          </a>

          <a href={linkWhatsEstetica} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-center bg-[#FFFCF5] p-5 rounded-2xl shadow-md border border-[#B8860B]/40 hover:bg-white transition-all active:scale-95">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">Agendar Procedimentos Estéticos</span>
          </a>
        </div>
        <div className="pt-8 space-y-4">
          <p className="text-center text-sm font-bold text-[#B8860B]">
            Acompanhe no Instagram
          </p>

          <a
            href="https://www.instagram.com/excellence.studiodebeleza"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-5 rounded-2xl shadow-md text-center"
          >
            ✨ Instagram do Salão Excellence
          </a>

          <a
            href="https://www.instagram.com/dra.katiane.barbosa.bizol"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-5 rounded-2xl shadow-md text-center"
          >
            👩‍⚕️ Instagram da Dra. Katiane
          </a>

          <a
            href="https://www.instagram.com/store.excellence.online"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-5 rounded-2xl shadow-md text-center"
          >
            🛍️ Instagram da Store Excellence
          </a>
        </div>
        <a href={linkAvaliacao} target="_blank" rel="noopener noreferrer"
           className="w-full block text-center py-5 mt-10 bg-[#D8A7B1] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl shadow-lg hover:bg-[#C696A0] transition-all active:scale-95">
          ⭐ Avalie sua experiência Excellence
        </a>
      </div>

      <footer className="mt-20 opacity-20 text-[8px] uppercase tracking-[0.8em] text-[#D8A7B1]">
        Excellence • Luxury Experience
      </footer>
    </div>
  );
}
