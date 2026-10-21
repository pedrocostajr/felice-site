import type { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIAS } from '@/data/categorias';
import { equipamentosDa } from '@/data/equipamentos';
import { CardEquipamento } from '@/components/CardEquipamento';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Equipamentos para Locação em Gramado e Canela | Felice Locações',
  description: 'Catálogo completo de equipamentos para construção civil: andaimes, plataformas, geradores, betoneiras, rompedores, compactadores, bombas e containers.',
  alternates: { canonical: '/locacao' },
};

export default function Catalogo() {
  return (
    <div className="mx-auto max-w-site px-4 py-10">
      <Breadcrumb itens={[{ nome: 'Equipamentos', href: '/locacao' }]} />
      <h1 className="mt-4 text-4xl font-extrabold">Equipamentos para locação</h1>
      <nav aria-label="Categorias" className="mt-6 flex flex-wrap gap-2">
        {CATEGORIAS.map((c) => (
          <a key={c.slug} href={`#${c.slug}`} className="rounded border border-zinc-300 px-3 py-1 text-sm hover:border-carvao">
            {c.nome}
          </a>
        ))}
      </nav>
      {CATEGORIAS.map((c) => (
        <section key={c.slug} id={c.slug} className="mt-12 scroll-mt-32">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold">{c.nome}</h2>
            <Link href={`/locacao/${c.slug}`} className="text-sm font-semibold underline">Ver categoria</Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {equipamentosDa(c.slug).map((e) => (
              <CardEquipamento key={e.slug} e={e} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
