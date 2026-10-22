"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase'; // Agora a ponte existe!

export default function ExcellenceCliente() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => { 
    setMounted(true);
    // Exemplo: Registrar que alguém abriu o app (opcional)
    const logAcesso = async () => {
      await supabase.from('acessos').insert([{ pagina: 'home' }]);
    };
    logAcesso();
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
          <img src="/logo.png" alt="Excellence" className="w-full h-full object-contain p-2" 
               onError={(e) => e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=EK&backgroundColor=D8A7B1&textColor=ffffff"} />
        </div>
        <h1 className="text-3xl font-light tracking-[0.3em] text-[#B8860B] uppercase mb-1">Excellence</h1>
        <p className="text-[9px] text-[#D8A7B1] uppercase tracking-[0.4em] font-bold">Estética Avançada & Studio</p>
      </header>

      <div className="w-full max-w-md space-y-5">
        {/* Botões com borda dourada */}
        <a href={linkWhatsEstetica} target="_blank" className="flex items-center justify-center bg-[#FFFCF5] p-5 rounded-2xl shadow-md border border-[#B8860B]/40 transition-all active:scale-95">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">Agendar Procedimentos Estéticos</span>
        </a>

        <a href={linkAvaliacao} target="_blank" className="w-full block text-center py-5 mt-10 bg-[#D8A7B1] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl shadow-lg">
          ⭐ Avalie sua experiência Excellence
        </a>
      </div>
    </div>
  );
}
