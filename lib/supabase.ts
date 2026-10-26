import { createClient } from '@supabase/supabase-js';

// Estas variáveis buscam os valores que você salvará no arquivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Verificação de segurança para garantir que o app não quebre se as chaves faltarem
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Erro: Variáveis de ambiente do Supabase não encontradas.');
}

// Criação da conexão oficial com o banco de dados da Excellence
export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);
