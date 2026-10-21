"use client";
import React, { useEffect, useState } from 'react';

export default function ExcellenceCliente() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // LINKS OFICIAIS INTEGRADOS
  const linkCabelo = "https://calendar.app.google/pkfHoDHpikok799W9";
  const linkManicure = "https://calendar.app.google/Vf6JCDdZHQWCrRABA";
  const linkCilios = "#"; // COLE O LINK DA DÉBORA AQUI QUANDO TIVER
  const linkWhatsEstetica = "https://wa.me/message/A6OJKD6MBH2FJ1";
  const linkAvaliacao = "https://docs.google.com/forms/d/e/1FAIpQLSdtpqE-3s28JbtBovFGTw6DGUZpOP12nKpafP7XBlQk2MuLRg/viewform";
  
  const instaSalao = "https://www.instagram.com/excellence.studiodebeleza";
  const instaBiomedica = "https://www.instagram.com/dra.katiane.barbosa.bizol";
  const instaLoja = "https://www.instagram.com/store.excellence.online";

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
             className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-[0_10px_30px_-5px_rgba(216,167,177,0.4)] border border-[#B8860B]/30 hover:border-[#B8860B] transition-all active:scale-95 group">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-600 group-hover:text-[#B8860B]">Agendar com Cabeleireiro</span>
            <span className="text-xl">💇‍♀️</span>
          </a>

          <a href={linkManicure} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-[0_10px_30px_-5px_rgba(216,167,177,0.4)] border border-[#B8860B]/30 hover:border-[#B8860B] transition-all active:scale-95 group">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-600 group-hover:text-[#B8860B]">Agendar com Manicure</span>
            <span className="text-xl">💅</span>
          </a>

          <a href={linkCilios} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-[0_10px_30px_-5px_rgba(216,167,177,0.4)] border border-[#B8860B]/30 hover:border-[#B8860B] transition-all active:scale-95 group">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-600 group-hover:text-[#B8860B]">Agendar Cílios</span>
            <span className="text-xl">👁️</span>
          </a>

          <a href={linkWhatsEstetica} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-center bg-[#FFFCF5] p-5 rounded-2xl shadow-[0_8px_20px_-5px_rgba(216,167,177,0.3)] border border-[#B8860B]/40 hover:bg-white transition-all active:scale-95">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">Agendar Procedimentos Estéticos</span>
          </a>
        </div>

        <div className="pt-8 bg-white/40 p-6 rounded-[2.5rem] border border-white/60 shadow-inner">
          <p className="text-[10px] font-bold text-[#D8A7B1] uppercase tracking-[0.2em] text-center mb-6">Acompanhe no Instagram</p>
          <div className="grid grid-cols-3 gap-4">
            <a href={instaSalao} target="_blank" className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Studio</span>
            </a>
            <a href={instaBiomedica} target="_blank" className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-xl">👩‍⚕️</span>
                </div>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Dra. Katiane</span>
            </a>
            <a href={instaLoja} target="_blank" className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-xl">🛍️</span>
                </div>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Store</span>
            </a>
          </div>
        </div>

        <a href={linkAvaliacao} target="_blank" rel="noopener noreferrer"
           className="w-full block text-center py-5 mt-10 bg-[#D8A7B1] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl shadow-lg hover:bg-[#C696A0] transition-all active:scale-95 border-b-4 border-black/5">
          ⭐ Avalie sua experiência Excellence
        </a>
      </div>

      <footer className="mt-20 opacity-20 text-[8px] uppercase tracking-[0.8em] text-[#D8A7B1]">
        Excellence • Luxury Experience
      </footer>
    </div>
  );
}
