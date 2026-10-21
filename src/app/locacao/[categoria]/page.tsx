import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIAS, getCategoria } from '@/data/categorias';
import { equipamentosDa } from '@/data/equipamentos';
import { CardEquipamento } from '@/components/CardEquipamento';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Faq } from '@/components/Faq';
import { SimuladorAltura } from '@/components/SimuladorAltura';
import { CalculadoraGerador } from '@/components/CalculadoraGerador';
import { WhatsAppLink } from '@/components/BotoesCotacao';
import { ARTIGOS } from '@/data/blog';

type P = { params: { categoria: string } };

export function generateStaticParams() {
  return CATEGORIAS.map((c) => ({ categoria: c.slug }));
}

export function generateMetadata({ params }: P): Metadata {
  const c = getCategoria(params.categoria);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/locacao/${c.slug}` },
    openGraph: { title: c.metaTitle, description: c.metaDescription, images: [c.imagem] },
  };
}

export default function PaginaCategoria({ params }: P) {
  const c = getCategoria(params.categoria);
  if (!c) notFound();
  const itens = equipamentosDa(c.slug);

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-carvao text-white">
        <div className="mx-auto grid max-w-site gap-8 px-4 py-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <div className="[&_a]:text-white/70 [&_span]:text-white/70">
              <Breadcrumb itens={[{ nome: 'Equipamentos', href: '/locacao' }, { nome: c.nome, href: `/locacao/${c.slug}` }]} />
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">{c.h1}</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">{c.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppLink
                texto={`Olá! Vim pelo site e quero orçamento de ${c.nome.toLowerCase()}.`}
                rotulo="Pedir orçamento no WhatsApp"
                local={`categoria:${c.slug}:hero`}
                className="rounded bg-trator px-6 py-3 font-bold text-carvao transition hover:brightness-95"
              />
              <a href="#modelos" className="rounded border-2 border-white/40 px-6 py-3 font-bold transition hover:border-trator">
                Ver modelos
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.imagem} alt={c.nome} className="aspect-[16/10] w-full rounded-lg object-cover shadow-lg" />
        </div>
      </section>

      {/* FERRAMENTA INTERATIVA SE HOUVER */}
      {c.ferramenta && (
        <section className="bg-trator">
          <div className="mx-auto max-w-site px-4 py-10">
            {c.ferramenta === 'altura' ? <SimuladorAltura /> : <CalculadoraGerador />}
          </div>
        </section>
      )}

      {/* MODELOS DISPONÍVEIS */}
      <section id="modelos" className="mx-auto max-w-site scroll-mt-32 px-4 py-12">
        <h2 className="text-2xl font-bold text-carvao sm:text-3xl">Modelos disponíveis</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((e) => (
            <CardEquipamento key={e.slug} e={e} />
          ))}
        </div>
      </section>

      {/* BLOCO DE CONTEÚDO (NOVAS SEÇÕES H2) */}
      {c.secoes && c.secoes.length > 0 && (
        <section className="border-t border-zinc-200 bg-white py-12">
          <div className="mx-auto max-w-site px-4 space-y-10">
            {c.secoes.map((secao, idx) => (
              <div key={idx} className="max-w-4xl space-y-4">
                <h2 className="text-2xl font-extrabold text-carvao sm:text-3xl">{secao.h2}</h2>
                {secao.texto && (
                  <p className="text-lg leading-relaxed text-aco">{secao.texto}</p>
                )}
                {secao.items && secao.items.length > 0 && (
                  <ul className="mt-3 space-y-3">
                    {secao.items.map((item, itemIdx) => {
                      const hasBold = item.includes(':');
                      if (hasBold) {
                        const parts = item.split(':');
                        return (
                          <li key={itemIdx} className="flex items-start gap-3 text-aco">
                            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-trator" />
                            <span>
                              <strong className="font-bold text-carvao">{parts[0]}:</strong>
                              {parts.slice(1).join(':')}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={itemIdx} className="flex items-start gap-3 text-aco">
                          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-trator" />
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {secao.textoFinal && (
                  <p className="mt-4 text-lg leading-relaxed text-aco">{secao.textoFinal}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAIXA DE CTA EM DESTAQUE (LARGURA TOTAL) */}
      {c.cta && (
        <section className="bg-trator text-carvao py-12 shadow-inner">
          <div className="mx-auto max-w-site px-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-black sm:text-3xl">{c.cta.titulo}</h2>
              <p className="mt-2 text-lg font-medium text-carvao/90">{c.cta.texto}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <WhatsAppLink
                texto={`Olá! Vim pelo site e quero solicitar orçamento de ${c.nome.toLowerCase()}.`}
                rotulo={c.cta.botao}
                local={`categoria:${c.slug}:cta_banner`}
                className="rounded bg-carvao px-6 py-3 font-bold text-trator shadow hover:bg-carvao/90 text-center transition"
              />
              <a
                href="#modelos"
                className="rounded border-2 border-carvao px-6 py-3 font-bold text-carvao hover:bg-carvao/10 text-center transition"
              >
                Adicionar ao orçamento
              </a>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <Faq itens={c.faq} />

      {/* REPETIÇÃO DO BOTÃO WHATSAPP APÓS FAQ */}
      <section className="mx-auto max-w-site px-4 pb-12 text-center">
        <WhatsAppLink
          texto={`Olá! Gostaria de tirar dúvidas e solicitar orçamento para ${c.nome.toLowerCase()}.`}
          rotulo="Pedir orçamento no WhatsApp"
          local={`categoria:${c.slug}:pos_faq`}
          className="inline-block rounded bg-trator px-8 py-4 text-lg font-bold text-carvao shadow transition hover:brightness-95"
        />
      </section>

      {/* DICAS */}
      {ARTIGOS.some((a) => a.categoria === c.slug) && (
        <section className="mx-auto max-w-site px-4 pb-12">
          <h2 className="text-xl font-bold text-carvao">Dicas sobre {c.nome.toLowerCase()}</h2>
          <ul className="mt-4 space-y-2">
            {ARTIGOS.filter((a) => a.categoria === c.slug).map((a) => (
              <li key={a.slug}>
                <Link href={`/blog/${a.slug}`} className="font-semibold text-carvao underline decoration-trator decoration-2 underline-offset-4 hover:text-trator">
                  {a.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* OUTROS EQUIPAMENTOS */}
      <section className="bg-concreto">
        <div className="mx-auto max-w-site px-4 py-10">
          <h2 className="text-xl font-bold text-carvao">Outros equipamentos</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CATEGORIAS.filter((o) => o.slug !== c.slug).map((o) => (
              <li key={o.slug}>
                <Link href={`/locacao/${o.slug}`} className="inline-block rounded bg-white px-3 py-2 text-sm font-semibold text-carvao hover:bg-trator transition">
                  {o.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
