import Link from 'next/link';
import { CATEGORIAS } from '@/data/categorias';
import { DEPOIMENTOS, DIFERENCIAIS, UNIDADES } from '@/data/site';
import { Ferramentas } from '@/components/Ferramentas';
import { WhatsAppLink } from '@/components/BotoesCotacao';
import { ARTIGOS } from '@/data/blog';
import { CardArtigo } from '@/components/CardArtigo';

// Entrada pela tarefa: o cliente sabe o serviço, nem sempre o nome da máquina.
const TAREFAS = [
  { tarefa: 'Trabalhar em altura', cat: 'plataformas-elevatorias' },
  { tarefa: 'Montar andaime na fachada', cat: 'andaimes' },
  { tarefa: 'Quebrar piso ou concreto', cat: 'rompedores' },
  { tarefa: 'Fazer concreto na obra', cat: 'betoneiras' },
  { tarefa: 'Compactar solo ou paver', cat: 'compactadores' },
  { tarefa: 'Levar energia para obra ou evento', cat: 'geradores' },
  { tarefa: 'Tirar água de vala ou fundação', cat: 'bombas' },
  { tarefa: 'Guardar material na obra', cat: 'containers' },
];

export default function Home() {
  return (
    <>
      {/* Hero com Vídeo de Fundo em Transparência */}
      <section className="relative overflow-hidden bg-carvao text-white py-20 lg:py-28">
        {/* Vídeo de Fundo com Opacidade */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover opacity-40 scale-105"
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Overlay escuro em gradiente para garantir leitura perfeita do texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-carvao via-carvao/90 to-carvao/60"></div>
          <div className="absolute inset-0 bg-carvao/30"></div>
        </div>

        {/* Conteúdo do Hero */}
        <div className="relative z-10 mx-auto max-w-site px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl text-white">
              Locação de equipamentos para obra em Gramado e Canela
            </h1>
            <p className="mt-5 text-lg text-white/90 leading-relaxed font-medium">
              Andaimes, plataformas elevatórias, geradores e mais, com entrega na obra. Duas unidades em Gramado e atendimento para toda a Serra Gaúcha.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppLink
                texto="Olá! Vim pelo site da Felice e quero um orçamento."
                rotulo="Pedir orçamento no WhatsApp"
                local="hero"
                className="rounded-lg bg-trator px-7 py-3.5 font-bold text-carvao hover:brightness-95 transition shadow-lg shadow-trator/10"
              />
              <Link href="/locacao" className="rounded-lg border-2 border-white/50 px-7 py-3.5 font-bold text-white hover:border-trator hover:bg-white/5 transition">
                Ver equipamentos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas */}
      <section className="bg-trator text-carvao">
        <div className="mx-auto max-w-site px-4 py-14">
          <h2 className="text-3xl font-extrabold">Descubra o equipamento certo antes de pedir</h2>
          <p className="mt-2 max-w-2xl text-carvao/90 font-medium">Informe o serviço e veja a indicação. O pedido chega para a nossa equipe já com esses dados.</p>
          <div className="mt-8">
            <Ferramentas />
          </div>
        </div>
      </section>

      {/* O que você precisa fazer? (Reposicionado entre Ferramentas e Categorias) */}
      <section className="bg-zinc-100 py-14 border-y border-zinc-200 text-carvao">
        <div className="mx-auto max-w-site px-4">
          <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-zinc-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-carvao">O que você precisa fazer?</h2>
            <p className="mt-1 text-sm text-aco">Selecione a necessidade da sua obra para ver a categoria recomendada:</p>
            <ul className="mt-6 divide-y divide-zinc-200">
              {TAREFAS.map((t) => (
                <li key={t.cat}>
                  <Link href={`/locacao/${t.cat}`} className="flex items-center justify-between py-3.5 font-semibold text-carvao hover:text-ferrugem transition">
                    <span>{t.tarefa}</span>
                    <span aria-hidden className="text-trator font-bold text-xl">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto max-w-site px-4 py-14">
        <h2 className="text-3xl font-extrabold">Equipamentos para locação</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIAS.map((c) => (
            <li key={c.slug}>
              <Link href={`/locacao/${c.slug}`} className="group block overflow-hidden rounded border border-zinc-200 hover:border-trator transition">
                <div className="aspect-[16/10] overflow-hidden bg-concreto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.imagem} alt="" loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:underline">{c.nome}</h3>
                  <p className="mt-1 text-sm text-aco">{c.resumo}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Self Storage */}
      <section className="bg-concreto">
        <div className="mx-auto max-w-site px-4 py-14">
          <Link href="/self-storage" className="block rounded-2xl bg-white p-8 hover:outline hover:outline-2 hover:outline-trator transition shadow-sm">
            <span className="text-xs font-bold text-trator uppercase tracking-wider bg-trator/10 px-3 py-1 rounded">Solução em Guarda de Materiais</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 text-carvao">Self Storage Felice</h2>
            <p className="mt-2 text-aco max-w-2xl">Containers padronizados e seguros para guardar ferramentas, materiais de obra e estoques comerciais com monitoramento 24h em Gramado e Canela.</p>
            <span className="mt-4 inline-block text-xs font-bold text-ferrugem underline">Conhecer o Self Storage ↗</span>
          </Link>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="mx-auto max-w-site px-4 py-14">
        <h2 className="text-3xl font-extrabold">Por que alugar com a Felice</h2>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((d) => (
            <div key={d.titulo} className="border-t-4 border-trator pt-4">
              <dt className="text-lg font-bold">{d.titulo}</dt>
              <dd className="mt-2 text-aco">{d.texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Depoimentos */}
      <section className="bg-carvao text-white">
        <div className="mx-auto max-w-site px-4 py-14">
          <h2 className="text-3xl font-extrabold">O que dizem nossos clientes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d) => (
              <figure key={d.nome} className="border-l-4 border-trator pl-4">
                <blockquote className="text-white/90">“{d.texto}”</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-trator">{d.nome}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-site px-4 pt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold">Dicas para a sua obra</h2>
          <Link href="/blog" className="text-sm font-semibold underline">Ver todos os artigos</Link>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ARTIGOS.slice(1, 4).map((a) => (
            <CardArtigo key={a.slug} a={a} />
          ))}
        </div>
      </section>

      {/* Unidades */}
      <section className="mx-auto max-w-site px-4 py-14">
        <h2 className="text-3xl font-extrabold">Onde estamos</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {UNIDADES.map((u) => (
            <address key={u.id} className="not-italic rounded-xl border border-zinc-200 p-5 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-lg font-bold text-carvao">{u.nome}</p>
                <p className="mt-2 text-sm text-zinc-700">{u.endereco}</p>
                <p className="text-sm text-zinc-600">{u.bairro}, {u.cidade}/{u.uf}</p>
                <p className="mt-3 text-xs text-aco">{u.telefone} · {u.email}</p>
              </div>
              <a href={u.mapa} target="_blank" rel="noopener" className="mt-4 inline-block text-xs font-bold text-ferrugem underline hover:text-carvao">
                Como chegar ↗
              </a>
            </address>
          ))}
        </div>
      </section>
    </>
  );
}

