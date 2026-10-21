import Link from 'next/link';
import type { Equipamento } from '@/data/equipamentos';
import { MOSTRAR_PRECOS } from '@/data/equipamentos';
import { getCategoria } from '@/data/categorias';
import { AdicionarCotacao } from './BotoesCotacao';

export function CardEquipamento({ e }: { e: Equipamento }) {
  const cat = getCategoria(e.categoria);
  const href = `/locacao/${e.categoria}/${e.slug}`;
  return (
    <article className="flex flex-col overflow-hidden rounded border border-zinc-200 bg-white">
      <Link href={href} className="block aspect-[16/10] overflow-hidden bg-concreto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={e.imagem ?? cat?.imagem} alt={e.nome} loading="lazy" className="h-full w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold text-aco">{cat?.nome}</p>
        <h3 className="mt-1 text-lg font-bold leading-tight">
          <Link href={href} className="hover:underline">{e.nome}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-aco">{e.resumo}</p>
        {MOSTRAR_PRECOS && e.precoDiaria && (
          <p className="mt-3 text-sm">A partir de <strong>R$ {e.precoDiaria}</strong>/dia</p>
        )}
        <div className="mt-4 flex items-center justify-between gap-2">
          <Link href={href} className="text-sm font-semibold underline">Ver detalhes</Link>
          <AdicionarCotacao slug={e.slug} nome={e.nome} categoria={e.categoria} compacto />
        </div>
      </div>
    </article>
  );
}
