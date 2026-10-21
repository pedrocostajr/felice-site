// Dados reais da empresa, retirados do site atual (felicelocacoes.com.br).
// Tudo que estiver marcado com TODO precisa ser confirmado com a Felice.

export const SITE = {
  nome: 'Felice Locações',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.felicelocacoes.com.br',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-WBHQPBNX',
  whatsapp: '5554993402000', // número único usado hoje no site todo
  whatsappExibicao: '(54) 99340-2000',
  logo: 'https://www.felicelocacoes.com.br/wp-content/uploads/2025/02/cropped-LOGO_FELICE_CV_NOVA.png',
  descricao:
    'Locação de máquinas e equipamentos para construção civil em Gramado, Canela e Serra Gaúcha. Andaimes, plataformas elevatórias, geradores, betoneiras, compactadores e mais, com entrega na obra.',
  horario: 'Segunda a Sexta: 07:30 às 11:45 e 13:00 às 18:00 | Sábados: 07:30 às 11:45',
  redes: {
    instagram: 'https://www.instagram.com/felicelocacoes/',
    facebook: 'https://www.facebook.com/felicelocacoes',
  },
  parceiro: {
    nome: 'GB Guinchos',
    url: 'https://www.gbguinchos.com.br/',
  },
};

export type Unidade = {
  id: string;
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
  uf: string;
  email: string;
  telefone: string;
  mapa: string;
};

export const UNIDADES: Unidade[] = [
  {
    id: 'matriz-leobet',
    nome: 'Matriz Centro',
    endereco: 'Rua Emilio Leobet, 100, Sala 01',
    bairro: 'Centro',
    cidade: 'Gramado',
    uf: 'RS',
    email: 'matriz@felicelocacoes.com.br',
    telefone: '(54) 99340-2000',
    mapa: 'https://maps.app.goo.gl/xUCrSvH1hjiu6oa5A',
  },
  {
    id: 'deposito-carniel',
    nome: 'Depósito Carniel',
    endereco: 'Rua Porto Lucena, 405',
    bairro: 'Carniel',
    cidade: 'Gramado',
    uf: 'RS',
    email: 'deposito@felicelocacoes.com.br',
    telefone: '(54) 99340-2000',
    mapa: 'https://maps.app.goo.gl/GxvCgeZQzty7kVgY8',
  },
  {
    id: 'shopping-construcao',
    nome: 'Loja 2 — Shopping da Construção',
    endereco: 'Av. Borges de Medeiros, 3738, Sala 202',
    bairro: 'Centro',
    cidade: 'Gramado',
    uf: 'RS',
    email: 'atendimento@felicelocacoes.com.br',
    telefone: '(54) 99340-2000',
    mapa: 'https://maps.google.com/maps?q=Av.+Borges+de+Medeiros,+3738,+Sala+202,+Gramado+-+RS',
  },
  {
    id: 'canela',
    nome: 'Unidade Canela',
    endereco: 'Rua Altenor T. de Souza, 197, Sala 02',
    bairro: 'Centro',
    cidade: 'Canela',
    uf: 'RS',
    email: 'canela@felicelocacoes.com.br',
    telefone: '(54) 99340-2000',
    mapa: 'https://maps.google.com/maps?q=R.+Altenor+T.+de+Souza,+197+-+Sl+02+-+Centro,+Canela+-+RS,+95680-000',
  },
];

export const DIFERENCIAIS = [
  { titulo: 'Entrega na obra', texto: 'Frota própria para levar e buscar o equipamento, do orçamento à devolução.' },
  { titulo: 'Equipamentos revisados', texto: 'Cada máquina é inspecionada e mantida antes de sair para a próxima locação.' },
  { titulo: 'Da reforma à grande obra', texto: 'Atendemos pessoa física e jurídica, do pequeno reparo em casa às grandes empreiteiras.' },
  { titulo: 'Equipe que entende de obra', texto: 'Ajudamos a escolher o equipamento certo para o serviço, sem sobra e sem falta.' },
];

export const DEPOIMENTOS = [
  { nome: 'LL Mais Estilo EIRELI', texto: 'Eu fui muito bem atendida, levaram material que eu precisava no feriado! Empresa top, muito responsáveis.' },
  { nome: 'Abilho Esnarriaga', texto: 'Educação, cortesia, preço justo e pontualidade. Uma infinidade de equipamentos disponíveis para locação e facilitar nossa vida.' },
  { nome: 'Ana Santos', texto: 'Melhor atendimento e preço justo do mercado.' },
];

export const INSTITUCIONAL = {
  missao:
    'Manter um nível máximo de excelência no serviço de locação de equipamentos, disponibilizando produtos com alto padrão de qualidade e eficientes, com custo acessível, prazo rápido e atendimento personalizado.',
  visao:
    'Ser a melhor referência no segmento de locação de equipamentos para obras e construção, com reconhecimento de nossos clientes, fornecedores e parceiros.',
  valores:
    'A satisfação dos clientes é o principal projeto que iremos construir. Nosso compromisso pela ética de trabalho, atendimento de prazos e transparência nas relações são partes importantíssimas do nosso trabalho diário.',
};
