import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTIGOS, getArtigo, type Bloco } from '@/data/blog';
import { getCategoria } from '@/data/categorias';
import { SITE } from '@/data/site';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CardArtigo, capaArtigo, rotuloArtigo } from '@/components/CardArtigo';
import { JsonLd } from '@/components/JsonLd';
import { WhatsAppLink } from '@/components/BotoesCotacao';

type P = { params: { slug: string } };

export function generateStaticParams() {
  return ARTIGOS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: P): Metadata {
  const a = getArtigo(params.slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: { type: 'article', title: a.metaTitle, description: a.metaDescription, images: [capaArtigo(a)], publishedTime: a.data },
  };
}

function dataBR(iso: string) {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

// Transforma o trecho indicado em link interno (primeira ocorrência).
function Paragrafo({ texto, link }: { texto: string; link: { texto: string; href: string } }) {
  const i = texto.indexOf(link.texto);
  if (i < 0) return <p>{texto}</p>;
  return (
    <p>
      {texto.slice(0, i)}
      <Link href={link.href} className="font-semibold text-carvao underline decoration-trator decoration-2 underline-offset-4 hover:decoration-carvao">
        {link.texto}
      </Link>
      {texto.slice(i + link.texto.length)}
    </p>
  );
}

export default function PaginaArtigo({ params }: P) {
  const a = getArtigo(params.slug);
  if (!a) notFound();
  const cat = a.categoria ? getCategoria(a.categoria) : undefined;
  const destinoCta = cat ? `/locacao/${cat.slug}` : '/locacao';
  const relacionados = ARTIGOS.filter((o) => o.slug !== a.slug)
    .sort((x, y) => Number(y.categoria === a.categoria) - Number(x.categoria === a.categoria))
    .slice(0, 3);
  let linkUsado = false;

  return (
    <>
      <header className="bg-carvao text-white">
        <div className="mx-auto max-w-site px-4 pb-12 pt-8">
          <div className="[&_a]:text-white/70 [&_span]:text-white/70">
            <Breadcrumb itens={[{ nome: 'Blog', href: '/blog' }, { nome: a.titulo, href: `/blog/${a.slug}` }]} />
          </div>
          <p className="mt-8 text-sm font-semibold text-trator">{rotuloArtigo(a)}</p>
          <h1 className="mt-2 max-w-4xl text-3xl font-extrabold leading-[1.1] sm:text-5xl">{a.titulo}</h1>
          <p className="mt-5 text-sm text-white/70">
            Publicado em <time dateTime={a.data}>{dataBR(a.data)}</time> <span aria-hidden>|</span> {a.leituraMin} min de leitura
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-site gap-12 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <article>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={capaArtigo(a)} alt={rotuloArtigo(a)} className="mb-10 aspect-[16/9] w-full max-w-[72ch] rounded bg-concreto object-cover" />
          <div className="max-w-[72ch] space-y-5 text-lg leading-[1.7] text-zinc-800 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:text-carvao">
            {a.blocos.map((b: Bloco, i) => {
              if ('h2' in b) return <h2 key={i}>{b.h2}</h2>;
              if (!linkUsado && b.p.includes(a.link.texto)) {
                linkUsado = true;
                return <Paragrafo key={i} texto={b.p} link={a.link} />;
              }
              return <p key={i}>{b.p}</p>;
            })}
          </div>

          <aside className="mt-12 max-w-[72ch] rounded bg-trator p-6 sm:p-8">
            <p className="text-2xl font-extrabold leading-tight">{a.cta}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <WhatsAppLink
                texto={`Olá! Li o artigo "${a.titulo}" no site e quero um orçamento.`}
                rotulo="Pedir orçamento no WhatsApp"
                local={`blog:${a.slug}`}
                className="rounded bg-carvao px-5 py-3 font-bold text-white hover:bg-black"
              />
              <Link href={destinoCta} className="rounded border-2 border-carvao px-5 py-3 font-bold hover:bg-carvao hover:text-white">
                {cat ? `Ver ${cat.nome.toLowerCase()}` : 'Ver equipamentos'}
              </Link>
            </div>
          </aside>
        </article>

        {/* Barra lateral fixa no desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-6">
            <div className="rounded border-2 border-carvao p-5">
              <p className="text-lg font-extrabold leading-tight">
                {cat ? `Precisa de ${cat.nome.toLowerCase()}?` : 'Precisa de equipamento para a obra?'}
              </p>
              <p className="mt-2 text-sm text-aco">Entregamos na obra em Gramado, Canela e toda a Serra Gaúcha.</p>
              <Link href={destinoCta} className="mt-4 block rounded bg-trator px-4 py-3 text-center font-bold hover:brightness-95">
                Ver modelos disponíveis
              </Link>
              <WhatsAppLink
                texto={`Olá! Li o artigo "${a.titulo}" no site e quero um orçamento.`}
                rotulo={`WhatsApp ${SITE.whatsappExibicao}`}
                local={`blog-lateral:${a.slug}`}
                className="mt-2 block rounded border border-zinc-300 px-4 py-3 text-center text-sm font-semibold hover:border-carvao"
              />
            </div>
          </div>
        </aside>
      </div>

      <section className="bg-concreto">
        <div className="mx-auto max-w-site px-4 py-12">
          <h2 className="text-2xl font-extrabold">Continue lendo</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((r) => (
              <CardArtigo key={r.slug} a={r} />
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: a.titulo,
          description: a.metaDescription,
          image: capaArtigo(a),
          datePublished: a.data,
          dateModified: a.data,
          keywords: a.palavraChave,
          inLanguage: 'pt-BR',
          mainEntityOfPage: `${SITE.url}/blog/${a.slug}`,
          author: { '@type': 'Organization', name: SITE.nome, url: SITE.url },
          publisher: { '@type': 'Organization', name: SITE.nome, logo: { '@type': 'ImageObject', url: SITE.logo } },
        }}
      />
    </>
  );
}
