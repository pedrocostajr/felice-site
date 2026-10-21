'use client';

import { useCotacao } from './CotacaoProvider';
import { linkWhatsApp, mensagemEquipamento } from '@/lib/whatsapp';
import { track } from '@/lib/tracking';

type Props = { slug: string; nome: string; categoria: string; compacto?: boolean };

export function AdicionarCotacao({ slug, nome, categoria, compacto }: Props) {
  const { adicionar } = useCotacao();
  return (
    <button
      onClick={() => adicionar({ slug, nome, categoria })}
      className={`rounded bg-trator font-bold text-carvao hover:brightness-95 ${compacto ? 'px-3 py-2 text-sm' : 'px-5 py-3'}`}
    >
      Adicionar ao orçamento
    </button>
  );
}

export function WhatsAppLink({
  texto,
  rotulo = 'Pedir pelo WhatsApp',
  local,
  className,
}: {
  texto: string;
  rotulo?: string;
  local: string;
  className?: string;
}) {
  return (
    <a
      href={linkWhatsApp(texto)}
      target="_blank"
      rel="noopener"
      onClick={() => track('clique_whatsapp', { local })}
      className={
        className ??
        'inline-block rounded border-2 border-carvao px-5 py-3 font-bold text-carvao hover:bg-carvao hover:text-white'
      }
    >
      {rotulo}
    </a>
  );
}

export function WhatsAppEquipamento({ nome, slug }: { nome: string; slug: string }) {
  return <WhatsAppLink texto={mensagemEquipamento(nome)} local={`equipamento:${slug}`} />;
}

export function BotaoCesta() {
  const { itens, abrir } = useCotacao();
  const total = itens.reduce((s, i) => s + i.quantidade, 0);
  return (
    <button onClick={abrir} className="relative rounded border border-white/30 px-3 py-2 text-sm font-semibold text-white hover:border-trator">
      Orçamento
      {total > 0 && (
        <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-trator px-1 text-xs font-bold text-carvao">
          {total}
        </span>
      )}
    </button>
  );
}
