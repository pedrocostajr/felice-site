import { Pendente } from '@/components/Pendente';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WhatsAppLink } from '@/components/BotoesCotacao';

export const metadata: Metadata = {
  title: 'Serviços de Perfuração em Concreto em Gramado | Felice Locações',
  description: 'Perfuração em lajes, vigas, concreto armado, alvenaria e asfalto em Gramado, Canela e Serra Gaúcha, feita por equipe qualificada.',
  alternates: { canonical: '/perfuracao' },
};

const MATERIAIS = ['Lajes', 'Vigas', 'Concreto', 'Concreto armado', 'Alvenaria', 'Asfalto'];

export default function Perfuracao() {
  return (
    <div className="mx-auto max-w-site px-4 py-10">
      <Breadcrumb itens={[{ nome: 'Serviços de perfuração', href: '/perfuracao' }]} />
      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight">Serviços de perfuração em Gramado e Canela</h1>
          <p className="mt-4 text-lg text-aco">
            Seja para lajes, vigas, concreto, concreto armado, alvenaria ou asfalto, nossa equipe qualificada executa a
            perfuração na sua obra.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {MATERIAIS.map((m) => (
              <li key={m} className="rounded bg-concreto px-3 py-1 text-sm font-semibold">{m}</li>
            ))}
          </ul>
          <div className="mt-8">
            <WhatsAppLink
              texto="Olá! Vim pelo site e preciso de um serviço de perfuração."
              rotulo="Solicitar perfuração"
              local="perfuracao"
              className="rounded bg-trator px-6 py-3 font-bold text-carvao hover:brightness-95"
            />
          </div>
          <Pendente>confirmar diâmetros atendidos e se o serviço é por furo ou por metro.</Pendente>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/perfuracao.jpg"
          alt="Perfuração em concreto"
          className="aspect-[16/10] w-full rounded object-cover"
        />
      </div>
    </div>
  );
}
