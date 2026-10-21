'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { ItemCotacao } from '@/lib/whatsapp';
import { capturarOrigem, track } from '@/lib/tracking';

type Ctx = {
  itens: ItemCotacao[];
  aberta: boolean;
  abrir: () => void;
  fechar: () => void;
  adicionar: (item: Omit<ItemCotacao, 'quantidade' | 'periodo' | 'duracao'> & Partial<ItemCotacao>) => void;
  atualizar: (slug: string, dados: Partial<ItemCotacao>) => void;
  remover: (slug: string) => void;
  limpar: () => void;
};

const CotacaoContext = createContext<Ctx | null>(null);
const CHAVE = 'felice_cesta';

export function CotacaoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCotacao[]>([]);
  const [aberta, setAberta] = useState(false);

  useEffect(() => {
    capturarOrigem();
    try {
      const salvo = localStorage.getItem(CHAVE);
      if (salvo) setItens(JSON.parse(salvo));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(itens));
    } catch {}
  }, [itens]);

  const adicionar: Ctx['adicionar'] = (novo) => {
    setItens((atual) => {
      const existe = atual.find((i) => i.slug === novo.slug);
      if (existe) {
        return atual.map((i) => (i.slug === novo.slug ? { ...i, quantidade: i.quantidade + 1 } : i));
      }
      return [...atual, { quantidade: 1, periodo: 'semana', duracao: 1, ...novo }];
    });
    track('adicionar_cesta', { equipamento: novo.slug, categoria: novo.categoria });
    setAberta(true);
  };

  const atualizar: Ctx['atualizar'] = (slug, dados) =>
    setItens((atual) => atual.map((i) => (i.slug === slug ? { ...i, ...dados } : i)));

  const remover = (slug: string) => setItens((atual) => atual.filter((i) => i.slug !== slug));

  return (
    <CotacaoContext.Provider
      value={{
        itens,
        aberta,
        abrir: () => setAberta(true),
        fechar: () => setAberta(false),
        adicionar,
        atualizar,
        remover,
        limpar: () => setItens([]),
      }}
    >
      {children}
    </CotacaoContext.Provider>
  );
}

export function useCotacao() {
  const ctx = useContext(CotacaoContext);
  if (!ctx) throw new Error('useCotacao precisa estar dentro de CotacaoProvider');
  return ctx;
}
