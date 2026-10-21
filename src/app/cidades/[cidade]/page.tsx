import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CIDADES, getCidade } from '@/data/cidades';
import { CATEGORIAS } from '@/data/categorias';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WhatsAppLink } from '@/components/BotoesCotacao';

type P = { params: { cidade: string } };

export function generateStaticParams() {
  return CIDADES.map((c) => ({ cidade: c.slug }));
}

export function generateMetadata({ params }: P): Metadata {
  const c = getCidade(params.cidade);
  if (!c) return {};
  return {
    title: `Locação de Equipamentos para Construção em ${c.nome} RS | Felice Locações`,
    description: `Aluguel de andaimes, plataformas elevatórias, geradores, betoneiras e mais em ${c.nome}. Entrega na obra pela Felice Locações.`,
    alternates: { canonical: `/cidades/${c.slug}` },
  };
}

export default function PaginaCidade({ params }: P) {
  const c = getCidade(params.cidade);
  if (!c) notFound();
  return (
    <div className="mx-auto max-w-site px-4 py-10">
      <Breadcrumb itens={[{ nome: `Locação em ${c.nome}`, href: `/cidades/${c.slug}` }]} />
      <h1 className="mt-4 text-4xl font-extrabold">Locação de equipamentos em {c.nome}</h1>
      <p className="mt-4 max-w-2xl text-lg text-aco">{c.texto}</p>
      {c.distanciaKm > 0 && (
        <p className="mt-2 text-sm text-aco">Cerca de {c.distanciaKm} km da nossa matriz em Gramado.</p>
      )}
      <div className="mt-6">
        <WhatsAppLink
          texto={`Olá! Vim pelo site e preciso de equipamento para uma obra em ${c.nome}.`}
          rotulo="Pedir orçamento no WhatsApp"
          local={`cidade:${c.slug}`}
          className="rounded bg-trator px-6 py-3 font-bold text-carvao hover:brightness-95"
        />
      </div>
      <h2 className="mt-12 text-2xl font-bold">Equipamentos disponíveis em {c.nome}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIAS.map((cat) => (
          <li key={cat.slug}>
            <Link href={`/locacao/${cat.slug}`} className="block rounded border border-zinc-200 p-4 font-semibold hover:border-carvao">
              {cat.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
