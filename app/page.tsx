"use client";

import { useEffect, useState } from "react";

type Categoria = "cabeleireira" | "manicure" | "cilios";

type Servico = {
  id: number;
  nome: string;
  preco: number | string | null;
  duracao_minutos: number | null;
  categoria: string | null;
};

const categorias: { id: Categoria; nome: string }[] = [
  { id: "cabeleireira", nome: "💇‍♀️ Cabeleireira" },
  { id: "manicure", nome: "💅 Manicure" },
  { id: "cilios", nome: "👁️ Cílios" },
];

const agendas: Record<Categoria, string> = {
  cabeleireira: "https://calendar.app.google/pkfHoDHpikok799W9",
  manicure: "https://calendar.app.google/Vf6JCDdZHQWCrRABA",
  // Cole o link da agenda de cílios entre as aspas.
  cilios: "",
};

const linkEstetica = "https://wa.me/message/A6OJKD6MBH2FJ1";

const linkAvaliacao =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtpqE-3s28JbtBovFGTw6DGUZpOP12nKpafP7XBlQk2MuLRg/viewform";

const redes = [
  {
    nome: "Salão",
    icone: "✨",
    link: "https://www.instagram.com/excellence.studiodebeleza",
  },
  {
    nome: "Dra. Katiane",
    icone: "👩‍⚕️",
    link: "https://www.instagram.com/dra.katiane.barbosa.bizol",
  },
  {
    nome: "Loja",
    icone: "🛍️",
    link: "https://www.instagram.com/store.excellence.online",
  },
];

function formatarPreco(valor: Servico["preco"]) {
  if (valor === null || valor === "") return "Valor a consultar";

  const numero = Number(valor);

  if (!Number.isFinite(numero) || numero <= 0) {
    return "Valor a consultar";
  }

  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatarDuracao(valor: number | null) {
  if (!valor || valor <= 0) return "Duração a confirmar";

  const horas = Math.floor(valor / 60);
  const minutos = valor % 60;

  if (!horas) return `${minutos} min`;
  if (!minutos) return `${horas} h`;

  return `${horas} h ${minutos} min`;
}

export default function ExcellenceCliente() {
  const [categoria, setCategoria] = useState<Categoria>("cabeleireira");
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [servicoId, setServicoId] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [tentativa, setTentativa] = useState(0);
  const [totalRecebido, setTotalRecebido] = useState(0);

  useEffect(() => {
    async function registrarAcesso() {
      try {
        const { supabase } = await import("../lib/supabase");

        await supabase.from("acessos").insert([
          {
            pagina: "home",
            data: new Date().toISOString(),
          },
