"use client";
import React from 'react';

export default function ExcellenceCliente() {
  const linkCabelo = "https://calendar.app.google/pkfHoDHpikok799W9";
  const linkManicure = "https://calendar.app.google/Vf6JCDdZHQWCrRABA";
  const linkWhatsEstetica = "https://wa.me/5549991776280?text=Olá! Gostaria de agendar um procedimento estético.";
  const instaSalao = "https://www.instagram.com/excellence.studiodebeleza";
  const instaBiomedica = "https://www.instagram.com/dra.katiane.barbosa.bizol";
  const instaLoja = "https://www.instagram.com/store.excellence.online";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D4A373] via-[#B8860B] to-[#AA8439] p-6 font-sans flex flex-col items-center">
      
      {/* Header com Logo em Destaque */}
      <header className="py-10 text-center w-full max-w-md flex flex-col items-center">
        <div className="w-28 h-28 bg-black rounded-full shadow-2xl border-4 border-[#D4A373] flex items-center justify-center mb-6 overflow-hidden">
          <img 
            src="/logo.png" 
            alt="Excellence Logo" 
            className="w-full h-full object-contain p-3" 
            onError={(e) => e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=EK&backgroundColor=000000&textColor=D4A373"} 
          />
        </div>
        
        <h1 className="text-4xl font-black tracking-tighter text-black uppercase mb-1 drop-shadow-sm">Excellence</h1>
        <p className="text-[10px] text-black font-bold uppercase tracking-[0.3em] opacity-80">Estética Avançada & Studio</p>
      </header>

      <div className="w-full max-w-md space-y-4">
        
        {/* Botões de Agendamento - Preto com Dourado */}
        <div className="space-y-3">
          <a href={linkCabelo} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-between bg-black p-5 rounded-2xl shadow-xl border border-[#D4A373]/30 hover:scale-[1.02] transition-all active:scale-95">
            <div className="flex items-center gap-4">
              <span className="text-2xl">💇‍♀️</span>
              <span className="text-sm font-bold text-[#D4A373] uppercase tracking-wider">Agendar Cabelo</span>
            </div>
            <span className="text-[#D4A373] opacity-50">➜</span>
          </a>

          <a href={linkManicure} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-between bg-black p-5 rounded-2xl shadow-xl border border-[#D4A373]/30 hover:scale-[1.02] transition-all active:scale-95">
            <div className="flex items-center gap-4">
              <span className="text-2xl">💅</span>
              <span className="text-sm font-bold text-[#D4A373] uppercase tracking-wider">Agendar Manicure</span>
            </div>
            <span className="text-[#D4A373] opacity-50">➜</span>
          </a>

          <a href={linkWhatsEstetica} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-between bg-[#F5F5F5] p-5 rounded-2xl shadow-xl border-2 border-black hover:scale-[1.02] transition-all active:scale-95">
            <div className="flex items-center gap-4">
              <span className="text-2xl">💉</span>
              <span className="text-sm font-black text-black uppercase tracking-wider">Procedimentos Estéticos</span>
            </div>
            <span className="text-black">💬</span>
          </a>
        </div>

        {/* Redes Sociais - Estilo Dark Gold */}
        <div className="pt-8">
          <p className="text-[10px] font-black text-black uppercase tracking-[0.2em] text-center mb-4">Nossas Redes Oficiais</p>
          <div className="grid grid-cols-3 gap-3">
            <a href={instaSalao} target="_blank" className="bg-black/10 backdrop-blur-sm py-4 rounded-xl border border-black/20 flex flex-col items-center gap-1 hover:bg-black hover:text-[#D4A373] transition-all">
              <span className="text-xl">✨</span>
              <span className="text-[8px] font-bold uppercase text-black hover:text-[#D4A373]">Studio</span>
            </a>
            <a href={instaBiomedica} target="_blank" className="bg-black/10 backdrop-blur-sm py-4 rounded-xl border border-black/20 flex flex-col items-center gap-1 hover:bg-black hover:text-[#D4A373] transition-all">
              <span className="text-xl">👩‍⚕️</span>
              <span className="text-[8px] font-bold uppercase text-black hover:text-[#D4A373]">Dra. Katiane</span>
            </a>
            <a href={instaLoja} target="_blank" className="bg-black/10 backdrop-blur-sm py-4 rounded-xl border border-black/20 flex flex-col items-center gap-1 hover:bg-black hover:text-[#D4A373] transition-all">
              <span className="text-xl">🛍️</span>
              <span className="text-[8px] font-bold uppercase text-black hover:text-[#D4A373]">Store</span>
            </a>
          </div>
        </div>

        {/* Botão de Avaliação Chamativo */}
        <button className="w-full py-5 mt-10 text-[10px] font-black uppercase tracking-[0.3em] bg-white text-black rounded-full shadow-2xl hover:bg-black hover:text-white transition-all border-2 border-black">
          ⭐ Avalie sua Experiência Excellence
        </button>
      </div>

      <footer className="mt-16 text-black/40 text-[8px] font-bold uppercase tracking-[0.5em]">
        Excellence • Luxury Beauty
      </footer>
    </div>
  );
}
