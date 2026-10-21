"use client";
import React from 'react';

export default function ExcellenceCliente() {
  const linkCabelo = "https://calendar.app.google/pkfHoDHpikok799W9";
  const linkManicure = "https://calendar.app.google/Vf6JCDdZHQWCrRABA";
  const linkWhatsEstetica = "https://wa.me/5549991776280?text=Olá! Gostaria de agendar um procedimento estético.";
  const instaSalao = "https://www.instagram.com/excellence.studiodebeleza";
  const instaBiomedica = "https://www.instagram.com/dra.katiane.barbosa.bizol";
  const instaLoja = "https://www.instagram.com/store.excellence.online";
  const linkSatisfacao = "#"; 

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff1f2', padding: '20px', fontFamily: 'sans-serif' }}>
      <script src="https://cdn.tailwindcss.com"></script>
      <header className="bg-white p-6 rounded-3xl shadow-sm mb-6 text-center border-b-4 border-pink-200">
        <h1 className="text-3xl font-bold text-pink-600 tracking-tight">Excellence</h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest">Estética & Beleza</p>
      </header>
      <div className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <a href={linkCabelo} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100 flex items-center gap-4 hover:bg-pink-50 transition-all active:scale-95">
            <span className="text-2xl">💇‍♀️</span>
            <span className="font-bold text-pink-700">Agendar Cabelo</span>
          </a>
          <a href={linkManicure} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100 flex items-center gap-4 hover:bg-pink-50 transition-all active:scale-95">
            <span className="text-2xl">💅</span>
            <span className="font-bold text-pink-700">Agendar Manicure</span>
          </a>
          <a href={linkWhatsEstetica} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-rose-400 p-4 rounded-2xl shadow-md flex items-center gap-4 text-white hover:opacity-90 transition-all active:scale-95">
            <span className="text-2xl">💉</span>
            <span className="font-bold text-sm">Procedimentos Estéticos (WhatsApp)</span>
          </a>
        </div>
        <div className="pt-4">
          <p className="text-xs font-bold text-pink-400 uppercase mb-3 ml-2 tracking-widest">Nossas Redes</p>
          <div className="grid grid-cols-3 gap-2">
            <a href={instaSalao} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-xl shadow-sm border border-pink-50 flex flex-col items-center hover:bg-pink-50 transition-all">
              <span className="text-xl mb-1">✨</span>
              <span className="text-[10px] font-bold text-gray-600 text-center">Salão</span>
            </a>
            <a href={instaBiomedica} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-xl shadow-sm border border-pink-50 flex flex-col items-center hover:bg-pink-50 transition-all">
              <span className="text-xl mb-1">👩‍⚕️</span>
              <span className="text-[10px] font-bold text-gray-600 text-center">Dra. Katiane</span>
            </a>
            <a href={instaLoja} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-xl shadow-sm border border-pink-50 flex flex-col items-center hover:bg-pink-50 transition-all">
              <span className="text-xl mb-1">🛍️</span>
              <span className="text-[10px] font-bold text-gray-600 text-center">Loja</span>
            </a>
          </div>
        </div>
        <a href={linkSatisfacao} className="w-full bg-pink-100 p-4 rounded-2xl flex items-center justify-center gap-3 text-pink-700 font-bold mt-6 border-2 border-dashed border-pink-300 hover:bg-pink-200 transition-all">
          <span>⭐</span> Avalie seu Atendimento
        </a>
      </div>
      <footer className="text-center text-gray-400 text-[10px] mt-10 uppercase tracking-widest">Excellence App • 2026 🐾</footer>
    </div>
  );
}
