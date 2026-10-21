import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WhatsAppLink } from '@/components/BotoesCotacao';
import { Faq } from '@/components/Faq';

export const metadata: Metadata = {
  title: 'Self Storage em Gramado: Containers e Boxes para Armazenamento | Felice Locações',
  description: 'Self storage em Gramado: boxes e containers para guardar ferramentas, materiais, mercadorias e móveis. Espaço monitorado 24h e acesso controlado. Peça seu orçamento.',
  alternates: { canonical: '/self-storage' },
};

const PARA_QUEM = [
  { t: 'Construtoras e empreiteiros', d: 'Guarda de ferramentas, equipamentos e sobras de material entre uma obra e outra.' },
  { t: 'Lojas e e-commerces', d: 'Estoque de mercadorias, itens sazonais e decoração de Natal e de temporada.' },
  { t: 'Hotéis, pousadas e restaurantes', d: 'Móveis, enxoval, utensílios e materiais de eventos.' },
  { t: 'Empresas e escritórios', d: 'Arquivo de documentos, mobiliário e equipamentos.' },
  { t: 'Famílias', d: 'Móveis e pertences durante mudança, reforma ou temporada fora.' },
];

const POR_QUE = [
  { t: 'Segurança', d: 'Espaço monitorado 24 horas e com acesso controlado.' },
  { t: 'Praticidade', d: 'Boxes padronizados, fáceis de organizar e de acessar.' },
  { t: 'Flexibilidade', d: 'Você contrata pelo período que precisa, com locações mensais flexíveis.' },
  { t: 'Localização estratégica', d: 'Em Gramado, no bairro Carniel, com fácil acesso para veículos de carga.' },
  { t: 'Tudo em um só lugar', d: 'A mesma empresa de confiança que aluga os equipamentos para a sua obra.' },
];

const TAMANHOS = [
  {
    nome: 'Box P (Pequeno)',
    medida: '3 m² / 7 m³',
    exemplo: 'Ideal para caixas, documentos, malas, ferramentas e pequenos estoques.',
  },
  {
    nome: 'Box M (Médio)',
    medida: '6 m² / 15 m³',
    exemplo: 'Ideal para móveis de 1 cômodo, equipamentos de obra ou estoque de lojas.',
  },
  {
    nome: 'Container Storage (Garantido)',
    medida: '15 m² / 33 m³',
    exemplo: 'Ideal para mudanças residenciais completas, grande estoque comercial ou máquinas pesadas.',
  },
];

const PASSO_A_PASSO = [
  { num: '1', titulo: 'Envie sua necessidade', texto: 'Você conta o que precisa guardar e por quanto tempo.' },
  { num: '2', titulo: 'Orçamento rápido', texto: 'Indicamos o tamanho de box ideal e enviamos a proposta comercial.' },
  { num: '3', titulo: 'Armazene com segurança', texto: 'Você leva seus itens e passa a usar o espaço. Horário de acesso: De segunda a sexta (07:30 às 18:00) e sábados sob agendamento.' },
];

const FAQ_STORAGE = [
  { p: 'O que posso guardar no self storage?', r: 'Ferramentas, materiais de construção, mercadorias, móveis, documentos e objetos pessoais. Não é permitido guardar produtos inflamáveis, perecíveis ou ilegais.' },
  { p: 'Só eu tenho acesso ao meu box?', r: 'Sim. O box é privativo, você tranca com seu próprio cadeado e mantém o controle total de quem acessa o seu espaço.' },
  { p: 'Qual o período mínimo de locação?', r: 'Trabalhamos com locação mensal com renovação flexível.' },
  { p: 'Qual o horário de acesso?', r: 'De segunda a sexta-feira em horário comercial (das 07:30 às 18:00) e aos sábados mediante agendamento prévio.' },
  { p: 'Vocês atendem clientes de Canela e região?', r: 'Sim. O nosso storage fica estrategicamente localizado em Gramado e atende clientes de toda a Serra Gaúcha.' },
];

export default function SelfStorage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-carvao text-white">
        <div className="mx-auto grid max-w-site gap-8 px-4 py-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <div className="[&_a]:text-white/70 [&_span]:text-white/70">
              <Breadcrumb itens={[{ nome: 'Self Storage', href: '/self-storage' }]} />
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">
              Self Storage em Gramado: o espaço certo para guardar com segurança
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Aluguel de boxes e containers padronizados para guardar ferramentas, materiais, mercadorias, móveis e documentos em Gramado. Um espaço só seu, com monitoramento 24 horas e acesso controlado, pelo tempo que você precisar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppLink
                texto="Olá! Vim pelo site e quero solicitar orçamento de box no Self Storage."
                rotulo="Pedir orçamento no WhatsApp"
                local="self-storage:hero"
                className="rounded bg-trator px-6 py-3 font-bold text-carvao transition hover:brightness-95"
              />
              <a href="#tamanhos" className="rounded border-2 border-white/40 px-6 py-3 font-bold transition hover:border-trator">
                Ver tamanhos de boxes
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/self-storage.jpg" alt="Self Storage em Gramado" className="aspect-[16/10] w-full rounded-lg object-cover shadow-lg" />
        </div>
      </section>

      {/* O QUE É SELF STORAGE */}
      <section className="bg-white py-12 border-b border-zinc-200">
        <div className="mx-auto max-w-site px-4">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-extrabold text-carvao sm:text-3xl">O que é self storage</h2>
            <p className="text-lg leading-relaxed text-aco">
              Self storage é o aluguel de um espaço privativo para armazenamento, fora da sua casa ou empresa. Você contrata o box, guarda o que quiser e mantém o controle do acesso. É a solução para quem precisa de mais espaço sem alugar um galpão nem assumir um contrato longo.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É O SELF STORAGE */}
      <section className="bg-concreto/40 py-12 border-b border-zinc-200">
        <div className="mx-auto max-w-site px-4">
          <h2 className="text-2xl font-extrabold text-carvao sm:text-3xl">Para quem é o Self Storage da Felice</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARA_QUEM.map((item) => (
              <div key={item.t} className="rounded-lg bg-white p-6 shadow-sm border border-zinc-200">
                <h3 className="text-lg font-bold text-carvao">{item.t}</h3>
                <p className="mt-2 text-aco">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE GUARDAR COM A FELICE */}
      <section className="bg-white py-12 border-b border-zinc-200">
        <div className="mx-auto max-w-site px-4">
          <h2 className="text-2xl font-extrabold text-carvao sm:text-3xl">Por que guardar com a Felice</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POR_QUE.map((item) => (
              <div key={item.t} className="border-l-4 border-trator pl-4 py-1">
                <dt className="text-lg font-bold text-carvao">{item.t}</dt>
                <dd className="mt-1 text-aco">{item.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TAMANHOS DISPONÍVEIS */}
      <section id="tamanhos" className="scroll-mt-32 bg-concreto/40 py-12 border-b border-zinc-200">
        <div className="mx-auto max-w-site px-4">
          <h2 className="text-2xl font-extrabold text-carvao sm:text-3xl">Tamanhos disponíveis</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {TAMANHOS.map((t) => (
              <div key={t.nome} className="rounded-lg bg-white p-6 shadow border border-zinc-200 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded bg-trator px-3 py-1 text-xs font-bold text-carvao uppercase tracking-wider">
                    {t.medida}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-carvao">{t.nome}</h3>
                  <p className="mt-2 text-sm text-aco">{t.exemplo}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <WhatsAppLink
                    texto={`Olá! Tenho interesse no ${t.nome} (${t.medida}) do Self Storage.`}
                    rotulo="Consultar este tamanho"
                    local={`self-storage:tamanho:${t.nome}`}
                    className="block w-full rounded bg-carvao py-2.5 text-center text-sm font-bold text-white hover:bg-carvao/90 transition"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-white py-12 border-b border-zinc-200">
        <div className="mx-auto max-w-site px-4">
          <h2 className="text-2xl font-extrabold text-carvao sm:text-3xl">Como funciona</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {PASSO_A_PASSO.map((p) => (
              <div key={p.num} className="relative rounded-lg bg-concreto/30 p-6 border border-zinc-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-trator text-xl font-black text-carvao">
                  {p.num}
                </span>
                <h3 className="mt-4 text-lg font-bold text-carvao">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-aco">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-trator text-carvao py-12 shadow-inner">
        <div className="mx-auto max-w-site px-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black sm:text-3xl">Falta espaço na sua empresa ou na sua casa?</h2>
            <p className="mt-2 text-lg font-medium text-carvao/90">
              Reserve o seu box de self storage em Gramado e guarde com segurança.
            </p>
          </div>
          <div>
            <WhatsAppLink
              texto="Olá! Vim pelo site e quero reservar um box no Self Storage em Gramado."
              rotulo="Pedir orçamento no WhatsApp"
              local="self-storage:cta_banner"
              className="inline-block rounded bg-carvao px-6 py-3.5 font-bold text-trator shadow hover:bg-carvao/90 transition text-center"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq itens={FAQ_STORAGE} />

      {/* BOTÃO WHATSAPP REPETIDO APÓS FAQ */}
      <section className="mx-auto max-w-site px-4 pb-14 text-center">
        <WhatsAppLink
          texto="Olá! Quero saber mais sobre o Self Storage e solicitar meu orçamento."
          rotulo="Pedir orçamento no WhatsApp"
          local="self-storage:pos_faq"
          className="inline-block rounded bg-trator px-8 py-4 text-lg font-bold text-carvao shadow transition hover:brightness-95"
        />
      </section>
    </>
  );
}
