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
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] p-6 font-sans flex flex-col items-center">
      <header className="py-12 text-center w-full max-w-md flex flex-col items-center">
        {/* Espaço para o seu Logo BK / Excellence */}
        <div className="w-24 h-24 bg-white rounded-full shadow-sm border border-gray-50 flex items-center justify-center mb-6 overflow-hidden">
          <img src="/logo.png" alt="Excellence Logo" className="w-full h-full object-contain p-2" 
               onError={(e) => e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=EK&backgroundColor=b8860b"} />
        </div>
        
        <h1 className="text-3xl font-light tracking-[0.3em] text-[#B8860B] uppercase mb-1">Excellence</h1>
        <p className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-medium text-center">Estética Avançada & Studio de Beleza</p>
        <div className="h-[1px] w-16 bg-[#B8860B] opacity-20 mt-4"></div>
      </header>

      <div className="w-full max-w-md space-y-5">
        <div className="space-y-3">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] ml-1">Agendamentos</p>
          
          <a href={linkCabelo} target="_blank" rel="noopener noreferrer" 
             className="group bg-white p-5 rounded-xl shadow-sm border border-gray-50 flex items-center justify-between hover:border-[#B8860B]/30 transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                <span className="text-lg">💇‍♀️</span>
              </div>
              <span className="text-sm font-medium tracking-wide">Design & Cabelo</span>
            </div>
            <span className="text-xs text-gray-300">📅</span>
          </a>

          <a href={linkManicure} target="_blank" rel="noopener noreferrer" 
             className="group bg-white p-5 rounded-xl shadow-sm border border-gray-50 flex items-center justify-between hover:border-[#B8860B]/30 transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                <span className="text-lg">💅</span>
              </div>
              <span className="text-sm font-medium tracking-wide">Manicure & Pedicure</span>
            </div>
            <span className="text-xs text-gray-300">📅</span>
          </a>

          <a href={linkWhatsEstetica} target="_blank" rel="noopener noreferrer" 
             className="group bg-[#1A1A1A] p-5 rounded-xl shadow-lg flex items-center justify-between hover:bg-black transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#B8860B]/20 rounded-full flex items-center justify-center">
                <span className="text-lg">💉</span>
              </div>
              <span className="text-sm font-bold tracking-wide text-white">Procedimentos Estéticos</span>
            </div>
            <span className="text-xs text-[#B8860B]">💬</span>
          </a>
        </div>

        <div className="pt-8">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] ml-1 mb-4">Acompanhe no Instagram</p>
          <div className="grid grid-cols-3 gap-3">
            <a href={instaSalao} target="_blank" className="bg-white py-5 rounded-xl border border-gray-50 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
              <span className="text-xl">✨</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Studio</span>
            </a>
            <a href={instaBiomedica} target="_blank" className="bg-white py-5 rounded-xl border border-gray-50 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
              <span className="text-xl">👩‍⚕️</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Dra. Katiane</span>
            </a>
            <a href={instaLoja} target="_blank" className="bg-white py-5 rounded-xl border border-gray-50 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
              <span className="text-xl">🛍️</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Store</span>
            </a>
          </div>
        </div>

        <button className="w-full py-4 mt-12 text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300 border border-gray-100 rounded-full hover:bg-black hover:text-white hover:border-black transition-all">
          Avalie sua experiência Excellence
        </button>
      </div>

      <footer className="mt-20 opacity-10 text-[8px] uppercase tracking-[0.6em]">Excellence • Estética Avançada</footer>
    </div>
  );
}
