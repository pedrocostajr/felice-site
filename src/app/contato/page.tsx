import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WhatsAppLink } from '@/components/BotoesCotacao';
import { SITE, UNIDADES } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contato e Endereços | Felice Locações Gramado',
  description: 'Fale com a Felice Locações pelo WhatsApp ou visite nossas unidades no Carniel e no Centro de Gramado.',
  alternates: { canonical: '/contato' },
};

export default function Contato() {
  return (
    <div className="mx-auto max-w-site px-4 py-10">
      <Breadcrumb itens={[{ nome: 'Contato', href: '/contato' }]} />
      <h1 className="mt-4 text-4xl font-extrabold">Fale com a Felice</h1>
      <p className="mt-3 text-lg text-aco">O jeito mais rápido é pelo WhatsApp {SITE.whatsappExibicao}.</p>
      <div className="mt-6">
        <WhatsAppLink
          texto="Olá! Vim pelo site da Felice e quero um orçamento."
          rotulo="Abrir WhatsApp"
          local="contato"
          className="rounded bg-trator px-6 py-3 font-bold text-carvao hover:brightness-95"
        />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {UNIDADES.map((u) => (
          <address key={u.id} className="not-italic rounded border border-zinc-200 p-6">
            <h2 className="text-xl font-bold">{u.nome}</h2>
            <p className="mt-2">{u.endereco}, {u.bairro}, {u.cidade}/{u.uf}</p>
            <p className="mt-2">{u.telefone}</p>
            <p><a href={`mailto:${u.email}`} className="underline">{u.email}</a></p>
            <a href={u.mapa} target="_blank" rel="noopener" className="mt-4 inline-block font-semibold underline">Como chegar</a>
          </address>
        ))}
      </div>
    </div>
  );
}
