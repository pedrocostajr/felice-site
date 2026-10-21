import Link from 'next/link';
import type { Artigo } from '@/data/blog';
import { getCategoria } from '@/data/categorias';

const IMG_GERAL = 'https://www.felicelocacoes.com.br/wp-content/uploads/elementor/thumbs/482086144_18055325309109626_2734948481972890222_n-r3o8vcpaw8lc3nucix3977jsme6tbpblu8tijdt2wg.jpg';

export const capaArtigo = (a: Artigo) => (a.categoria ? getCategoria(a.categoria)?.imagem : undefined) ?? IMG_GERAL;
export const rotuloArtigo = (a: Artigo) => (a.categoria ? getCategoria(a.categoria)?.nome : undefined) ?? 'Dicas de obra';

export function CardArtigo({ a, destaque = false }: { a: Artigo; destaque?: boolean }) {
  return (
    <article className={`group flex flex-col ${destaque ? 'lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-8' : ''}`}>
      <Link href={`/blog/${a.slug}`} className="block aspect-[16/10] overflow-hidden rounded bg-concreto" tabIndex={-1} aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={capaArtigo(a)} alt="" loading="lazy" className="h-full w-full object-cover" />
      </Link>
      <div className={destaque ? 'mt-4 lg:mt-0 lg:self-center' : 'mt-4'}>
        <p className="text-sm text-aco">
          {rotuloArtigo(a)} <span aria-hidden>|</span> {a.leituraMin} min de leitura
        </p>
        <h2 className={`mt-1 font-extrabold leading-tight ${destaque ? 'text-3xl lg:text-4xl' : 'text-xl'}`}>
          <Link href={`/blog/${a.slug}`} className="group-hover:underline">{a.titulo}</Link>
        </h2>
        <p className={`mt-3 text-aco ${destaque ? 'text-lg' : 'line-clamp-3 text-sm'}`}>{a.resumo}</p>
        {destaque && (
          <Link href={`/blog/${a.slug}`} className="mt-5 inline-block rounded bg-carvao px-5 py-3 font-bold text-white hover:bg-black">
            Ler o artigo
          </Link>
        )}
      </div>
    </article>
  );
}
