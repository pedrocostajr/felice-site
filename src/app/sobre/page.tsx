import { Pendente } from '@/components/Pendente';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { INSTITUCIONAL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Sobre a Felice Locações | Locação de Equipamentos em Gramado',
  description: 'Conheça a Felice Locações: locação de máquinas e equipamentos para construção civil em Gramado, com logística própria e equipe especializada.',
  alternates: { canonical: '/sobre' },
};

export default function Sobre() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumb itens={[{ nome: 'Empresa', href: '/sobre' }]} />
      <h1 className="mt-4 text-4xl font-extrabold">Sobre a Felice Locações</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-aco">
        <p>
          Oferecemos um serviço completo de locação de máquinas e equipamentos para a construção civil, com eficiência,
          segurança e alto desempenho em cada etapa da obra. Nosso portfólio reúne máquinas modernas e bem conservadas,
          para projetos de todos os portes.
        </p>
        <p>
          Trabalhamos para reduzir custos operacionais e o tempo de execução do seu projeto, com suporte técnico do
          orçamento à entrega.
        </p>
      </div>
      <dl className="mt-10 space-y-6">
        {(
          [
            ['Missão', INSTITUCIONAL.missao],
            ['Visão', INSTITUCIONAL.visao],
            ['Valores', INSTITUCIONAL.valores],
          ] as const
        ).map(([t, d]) => (
          <div key={t} className="border-l-4 border-trator pl-4">
            <dt className="text-xl font-bold">{t}</dt>
            <dd className="mt-1 text-aco">{d}</dd>
          </div>
        ))}
      </dl>
      <Pendente>incluir ano de fundação, número de equipamentos e fotos reais da equipe e do pátio.</Pendente>
    </div>
  );
}
