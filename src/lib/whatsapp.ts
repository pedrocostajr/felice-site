import { SITE } from '@/data/site';

export type ItemCotacao = {
  slug: string;
  nome: string;
  categoria: string;
  quantidade: number;
  periodo: 'diária' | 'semana' | 'quinzena' | 'mês';
  duracao: number;
};

export type DadosCliente = {
  nome?: string;
  empresa?: string;
  cidade?: string;
  inicio?: string;
  obs?: string;
};

export function linkWhatsApp(texto: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export function mensagemEquipamento(nome: string, cidade?: string) {
  return `Olá! Vim pelo site e quero um orçamento de *${nome}*${cidade ? ` para obra em ${cidade}` : ''}.`;
}

// Mensagem da cesta de cotação, já pronta para o vendedor responder.
export function mensagemCesta(itens: ItemCotacao[], cliente: DadosCliente, origem?: string) {
  const linhas = [
    '*SOLICITAÇÃO DE ORÇAMENTO - SITE FELICE*',
    '',
    ...itens.map(
      (i) => `• ${i.quantidade}x ${i.nome} — ${i.duracao} ${rotuloPeriodo(i.periodo, i.duracao)}`
    ),
    '',
    cliente.nome && `*Nome:* ${cliente.nome}`,
    cliente.empresa && `*Empresa:* ${cliente.empresa}`,
    cliente.cidade && `*Cidade da obra:* ${cliente.cidade}`,
    cliente.inicio && `*Início desejado:* ${formatarData(cliente.inicio)}`,
    cliente.obs && `*Observações:* ${cliente.obs}`,
    origem && `\n_ref: ${origem}_`,
  ].filter(Boolean);
  return linhas.join('\n');
}

function rotuloPeriodo(p: ItemCotacao['periodo'], n: number) {
  const plural: Record<ItemCotacao['periodo'], string> = {
    'diária': 'diárias',
    semana: 'semanas',
    quinzena: 'quinzenas',
    'mês': 'meses',
  };
  return n > 1 ? plural[p] : p;
}

function formatarData(iso: string) {
  const [a, m, d] = iso.split('-');
  return d && m && a ? `${d}/${m}/${a}` : iso;
}
