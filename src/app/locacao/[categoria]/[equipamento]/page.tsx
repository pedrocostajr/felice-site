import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoria } from '@/data/categorias';
import { EQUIPAMENTOS, equipamentosDa, getEquipamento } from '@/data/equipamentos';
import { SITE } from '@/data/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CardEquipamento } from '@/components/CardEquipamento';
import { JsonLd } from '@/components/JsonLd';
import { AdicionarCotacao, WhatsAppEquipamento } from '@/components/BotoesCotacao';

type P = { params: { categoria: string; equipamento: string } };

export function generateStaticParams() {
  return EQUIPAMENTOS.map((e) => ({ categoria: e.categoria, equipamento: e.slug }));
}

export function generateMetadata({ params }: P): Metadata {
  const e = getEquipamento(params.categoria, params.equipamento);
  if (!e) return {};
  const title = `Aluguel de ${e.nome} em Gramado e Canela | Felice Locações`;
  return {
    title,
    description: `${e.resumo} Locação com entrega na obra em Gramado, Canela e Serra Gaúcha. Peça seu orçamento.`,
    alternates: { canonical: `/locacao/${e.categoria}/${e.slug}` },
  };
}

export default function PaginaEquipamento({ params }: P) {
  const e = getEquipamento(params.categoria, params.equipamento);
  const c = getCategoria(params.categoria);
  if (!e || !c) notFound();
  const specs = e.specs.filter((s) => s.valor !== 'TODO');
  const relacionados = equipamentosDa(c.slug).filter((o) => o.slug !== e.slug).slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-site px-4 py-8">
        <Breadcrumb
          itens={[
            { nome: 'Equipamentos', href: '/locacao' },
            { nome: c.nome, href: `/locacao/${c.slug}` },
            { nome: e.nome, href: `/locacao/${c.slug}/${e.slug}` },
          ]}
        />
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={e.imagem ?? c.imagem} alt={e.nome} className="aspect-[4/3] w-full rounded bg-concreto object-cover" />
          <div>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">{e.nome}</h1>
            {e.normas && (
              <ul className="mt-3 flex gap-2" aria-label="Normas">
                {e.normas.map((n) => (
                  <li key={n} className="rounded bg-carvao px-2 py-1 text-xs font-bold text-white">{n}</li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-lg text-aco">{e.descricao}</p>

            {specs.length > 0 && (
              <table className="mt-6 w-full text-sm">
                <caption className="mb-2 text-left font-bold">Especificações</caption>
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.label} className="border-t border-zinc-200">
                      <th scope="row" className="py-2 pr-4 text-left font-normal text-aco">{s.label}</th>
                      <td className="py-2 font-semibold">{s.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <AdicionarCotacao slug={e.slug} nome={e.nome} categoria={e.categoria} />
              <WhatsAppEquipamento nome={e.nome} slug={e.slug} />
            </div>
            <p className="mt-3 text-sm text-aco">Entrega na obra em Gramado, Canela e região.</p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Onde usar</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {e.aplicacoes.map((a) => (
              <li key={a} className="border-l-4 border-trator bg-concreto px-4 py-3 font-semibold">{a}</li>
            ))}
          </ul>
        </section>

        {relacionados.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Outros modelos de {c.nome.toLowerCase()}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((r) => (
                <CardEquipamento key={r.slug} e={r} />
              ))}
            </div>
          </section>
        )}
      </div>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: e.nome,
          description: e.descricao,
          image: e.imagem ?? c.imagem,
          category: c.nome,
          brand: { '@type': 'Brand', name: SITE.nome },
        }}
      />
    </>
  );
}
