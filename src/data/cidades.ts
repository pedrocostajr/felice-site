// Páginas de SEO local. Cada cidade precisa de texto próprio (não duplicar).
export type Cidade = {
  slug: string;
  nome: string;
  distanciaKm: number; // a partir de Gramado (aproximado)
  prazo: string;       // TODO: confirmar prazos reais de entrega
  texto: string;
};

export const CIDADES: Cidade[] = [
  {
    slug: 'gramado',
    nome: 'Gramado',
    distanciaKm: 0,
    prazo: 'Entrega expressa no mesmo dia',
    texto: 'Com matriz no Carniel e filial no Centro, atendemos obras, hotéis, pousadas e eventos de Gramado com entrega rápida e retirada no local.',
  },
  {
    slug: 'canela',
    nome: 'Canela',
    distanciaKm: 8,
    prazo: 'Entrega no mesmo dia',
    texto: 'Canela fica a poucos minutos da nossa matriz. Levamos andaimes, plataformas, geradores e demais equipamentos direto para a sua obra.',
  },
  {
    slug: 'nova-petropolis',
    nome: 'Nova Petrópolis',
    distanciaKm: 34,
    prazo: 'Entrega rápida e programada',
    texto: 'Atendemos construtoras e empreiteiros de Nova Petrópolis com entrega programada de equipamentos para construção civil.',
  },
  {
    slug: 'sao-francisco-de-paula',
    nome: 'São Francisco de Paula',
    distanciaKm: 42,
    prazo: 'Entrega programada',
    texto: 'Obras e propriedades em São Francisco de Paula contam com locação de geradores, compactadores, bombas e plataformas com entrega da Felice.',
  },
  {
    slug: 'caxias-do-sul',
    nome: 'Caxias do Sul',
    distanciaKm: 68,
    prazo: 'Entrega sob agendamento',
    texto: 'Para obras em Caxias do Sul, a Felice entrega plataformas elevatórias, andaimes e geradores com agendamento.',
  },
];

export const getCidade = (slug: string) => CIDADES.find((c) => c.slug === slug);
