import type { Metadata } from 'next';
import { ARTIGOS } from '@/data/blog';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CardArtigo } from '@/components/CardArtigo';

export const metadata: Metadata = {
  title: 'Blog Felice Locações | Dicas de Equipamentos para Obra na Serra Gaúcha',
  description: 'Dicas para escolher e alugar andaimes, plataformas elevatórias, betoneiras, geradores, compactadores e mais em Gramado, Canela e Serra Gaúcha.',
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  const [primeiro, ...resto] = ARTIGOS;
  return (
    <div className="mx-auto max-w-site px-4 py-10">
      <Breadcrumb itens={[{ nome: 'Blog', href: '/blog' }]} />
      <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Blog da Felice</h1>
      <p className="mt-3 max-w-2xl text-lg text-aco">
        Como escolher o equipamento certo para cada etapa da obra, direto de quem aluga máquinas em Gramado e Canela.
      </p>
      <div className="mt-10 border-b border-zinc-200 pb-12">
        <CardArtigo a={primeiro} destaque />
      </div>
      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {resto.map((a) => (
          <CardArtigo key={a.slug} a={a} />
        ))}
      </div>
    </div>
  );
}
