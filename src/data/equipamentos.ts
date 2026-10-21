// Catálogo INICIAL. Modelos e especificações vêm do protótipo e são exemplos:
// substituir pela frota real da Felice (marca, modelo, fotos, especificações).
// Enquanto `confirmado` for false, o item aparece com aviso interno no README.

export type Equipamento = {
  slug: string;
  categoria: string;       // slug da categoria
  nome: string;
  resumo: string;
  descricao: string;
  imagem?: string;         // se vazio, usa a imagem da categoria
  specs: { label: string; valor: string }[];
  aplicacoes: string[];
  normas?: string[];
  alturaTrabalhoM?: number; // plataformas: usado no simulador de altura
  terreno?: 'plano' | 'irregular';
  kva?: number;            // geradores: usado na calculadora
  precoDiaria?: number;    // só aparece se MOSTRAR_PRECOS = true
  confirmado: boolean;
};

// Decisão comercial pendente: mostrar ou não valores no site.
export const MOSTRAR_PRECOS = false;

export const EQUIPAMENTOS: Equipamento[] = [
  // Andaimes
  {
    slug: 'andaime-tubular',
    categoria: 'andaimes',
    nome: 'Andaime tubular',
    resumo: 'Painéis tubulares de encaixe rápido para fachada, reboco e pintura.',
    descricao: 'Conjunto de andaime tubular com painéis, travessas, pisos e sapatas. Montagem por encaixe, sem ferramentas especiais.',
    imagem: '/images/andaime-tubular.jpg',
    specs: [
      { label: 'Painel', valor: '1,00 m x 1,00 m e 1,50 m x 1,00 m' },
      { label: 'Piso', valor: 'Metálico antiderrapante' },
      { label: 'Acessórios', valor: 'Sapatas, rodízios e guarda-corpo' },
    ],
    aplicacoes: ['Reboco e pintura de fachada', 'Instalação de esquadrias', 'Manutenção predial'],
    normas: ['NR-18'],
    confirmado: true,
  },
  {
    slug: 'escora-metalica',
    categoria: 'andaimes',
    nome: 'Escora metálica regulável',
    resumo: 'Escoramento de lajes e vigas com regulagem de altura.',
    descricao: 'Escora metálica com ajuste de rosca para escoramento de formas de laje e vigas.',
    imagem: '/images/escora-metalica.jpg',
    specs: [{ label: 'Regulagem', valor: '2,00 m a 4,50 m' }],
    aplicacoes: ['Escoramento de laje', 'Escoramento de vigas'],
    confirmado: true,
  },
  // Plataformas
  {
    slug: 'plataforma-individual',
    categoria: 'plataformas-elevatorias',
    nome: 'Plataforma elevatória individual',
    resumo: 'Plataforma compacta para uma pessoa, ideal para ambientes internos.',
    descricao: 'Plataforma de mastro vertical para trabalho individual em ambientes internos e piso firme. Passa por portas e corredores.',
    imagem: '/images/plataforma-individual.jpg',
    specs: [
      { label: 'Altura de trabalho', valor: '8 m' },
      { label: 'Capacidade', valor: '1 pessoa' },
      { label: 'Tração', valor: 'Elétrica' },
    ],
    aplicacoes: ['Iluminação e forro', 'Manutenção interna', 'Lojas e galpões'],
    normas: ['NR-35'],
    alturaTrabalhoM: 8,
    terreno: 'plano',
    confirmado: true,
  },
  {
    slug: 'plataforma-tesoura-eletrica-8m',
    categoria: 'plataformas-elevatorias',
    nome: 'Plataforma tesoura elétrica 8 m',
    resumo: 'Sobe na vertical com cesto amplo. Silenciosa e sem emissão, para uso interno.',
    descricao: 'Plataforma tesoura elétrica com pneus que não marcam o piso. Indicada para tetos, forros, instalações e pintura em ambientes internos.',
    imagem: '/images/plataforma-tesoura-eletrica-8m.jpg',
    specs: [
      { label: 'Altura de trabalho', valor: '8 m' },
      { label: 'Capacidade do cesto', valor: '227 kg' },
      { label: 'Tração', valor: 'Elétrica' },
    ],
    aplicacoes: ['Forros e iluminação', 'Instalações elétricas', 'Pintura interna'],
    normas: ['NR-35', 'NR-18'],
    alturaTrabalhoM: 8,
    terreno: 'plano',
    confirmado: true,
  },
  {
    slug: 'plataforma-tesoura-diesel-12m',
    categoria: 'plataformas-elevatorias',
    nome: 'Plataforma tesoura diesel 12 m',
    resumo: 'Tesoura todo-terreno para obra externa e fachadas.',
    descricao: 'Plataforma tesoura a diesel com tração para terreno de obra. Cesto amplo para duas ou mais pessoas com material.',
    imagem: '/images/plataforma-tesoura-diesel-12m.jpg',
    specs: [
      { label: 'Altura de trabalho', valor: '12 m' },
      { label: 'Tração', valor: 'Diesel 4x4' },
    ],
    aplicacoes: ['Fachadas', 'Estruturas metálicas', 'Galpões'],
    normas: ['NR-35', 'NR-18'],
    alturaTrabalhoM: 12,
    terreno: 'irregular',
    confirmado: true,
  },
  {
    slug: 'plataforma-articulada-16m',
    categoria: 'plataformas-elevatorias',
    nome: 'Plataforma articulada diesel 16 m',
    resumo: 'Braço articulado que contorna obstáculos e alcança pontos afastados.',
    descricao: 'Plataforma articulada a diesel com tração 4x4. Alcança telhados, beirais e fachadas com obstáculos na frente.',
    imagem: '/images/plataforma-articulada-16m.jpg',
    specs: [
      { label: 'Altura de trabalho', valor: '16 m' },
      { label: 'Tração', valor: 'Diesel 4x4' },
    ],
    aplicacoes: ['Telhados e beirais', 'Fachadas de hotéis', 'Montagem de eventos'],
    normas: ['NR-35', 'NR-18'],
    alturaTrabalhoM: 16,
    terreno: 'irregular',
    confirmado: true,
  },
  // Betoneiras
  {
    slug: 'betoneira-400-litros',
    categoria: 'betoneiras',
    nome: 'Betoneira 400 litros',
    resumo: 'Betoneira profissional para concreto e argamassa.',
    descricao: 'Betoneira de 400 litros para concretagem de lajes, contrapiso e fundações.',
    imagem: '/images/betoneira-400-litros.jpg',
    specs: [
      { label: 'Capacidade', valor: '400 L' },
      { label: 'Motor', valor: 'Elétrico 2 CV (220 V / 380 V)' },
    ],
    aplicacoes: ['Laje', 'Contrapiso', 'Fundações'],
    confirmado: true,
  },
  // Bombas
  {
    slug: 'bomba-submersa',
    categoria: 'bombas',
    nome: 'Bomba submersa para drenagem',
    resumo: 'Esgota valas, fundações e reservatórios.',
    descricao: 'Bomba submersa para drenagem de valas e fundações alagadas.',
    imagem: '/images/bomba-submersa.jpg',
    specs: [{ label: 'Vazão', valor: 'Até 25.000 L/h' }],
    aplicacoes: ['Drenagem de valas', 'Esgotamento de fundações'],
    confirmado: true,
  },
  // Rompedores
  {
    slug: 'martelete-rompedor-5kg',
    categoria: 'rompedores',
    nome: 'Martelete rompedor 5 kg',
    resumo: 'Para retirar piso, azulejo e abrir passagens.',
    descricao: 'Martelete leve para demolição de revestimentos e pequenas aberturas em alvenaria.',
    imagem: '/images/martelete-rompedor-5kg.jpg',
    specs: [{ label: 'Peso', valor: '5 kg' }],
    aplicacoes: ['Retirada de piso e azulejo', 'Rasgos em alvenaria'],
    confirmado: true,
  },
  {
    slug: 'rompedor-30kg',
    categoria: 'rompedores',
    nome: 'Rompedor 30 kg',
    resumo: 'Demolição pesada de concreto armado, lajes e sapatas.',
    descricao: 'Martelo rompedor pesado para concreto armado, lajes, vigas e bases de máquinas.',
    imagem: '/images/rompedor-30kg.jpg',
    specs: [{ label: 'Peso', valor: '30 kg' }],
    aplicacoes: ['Demolição de laje', 'Sapatas e vigas', 'Bases de máquinas'],
    confirmado: true,
  },
  // Compactadores
  {
    slug: 'compactador-sapo',
    categoria: 'compactadores',
    nome: 'Compactador de solo (sapo)',
    resumo: 'Compactação por percussão em valas e solo argiloso.',
    descricao: 'Compactador de percussão para valas estreitas, aterros e solo coesivo.',
    imagem: '/images/compactador-sapo.jpg',
    specs: [{ label: 'Motor', valor: 'Gasolina 4 tempos 4 HP' }],
    aplicacoes: ['Valas', 'Aterros', 'Base de calçadas'],
    confirmado: true,
  },
  {
    slug: 'placa-vibratoria',
    categoria: 'compactadores',
    nome: 'Placa vibratória',
    resumo: 'Compacta areia, brita, pavers e asfalto em áreas abertas.',
    descricao: 'Placa vibratória para calçamento com paver, estacionamentos e reparos em asfalto.',
    imagem: '/images/placa-vibratoria.jpg',
    specs: [{ label: 'Peso', valor: '90 kg' }],
    aplicacoes: ['Paver', 'Estacionamentos', 'Asfalto'],
    confirmado: true,
  },
  // Geradores
  {
    slug: 'gerador-55kva',
    categoria: 'geradores',
    nome: 'Gerador 55 kVA',
    resumo: 'Para obras, comércio e eventos de médio porte.',
    descricao: 'Grupo gerador cabinado para obras sem ligação de energia, comércio e eventos.',
    imagem: '/images/gerador-55kva.jpg',
    specs: [{ label: 'Potência', valor: '55 kVA' }],
    aplicacoes: ['Obras', 'Comércio', 'Eventos'],
    kva: 55,
    confirmado: true,
  },
  {
    slug: 'gerador-150kva',
    categoria: 'geradores',
    nome: 'Gerador 150 kVA',
    resumo: 'Para eventos grandes, hotéis e indústria.',
    descricao: 'Grupo gerador silenciado para eventos, hotéis e operações contínuas.',
    imagem: '/images/gerador-150kva.jpg',
    specs: [{ label: 'Potência', valor: '150 kVA' }],
    aplicacoes: ['Casamentos e eventos', 'Hotéis', 'Indústria'],
    kva: 150,
    confirmado: true,
  },
  // Containers
  {
    slug: 'container-almoxarifado',
    categoria: 'containers',
    nome: 'Container almoxarifado',
    resumo: 'Container de aço para guardar materiais e ferramentas na obra.',
    descricao: 'Container de aço com fechamento seguro para almoxarifado de obra.',
    imagem: '/images/container-almoxarifado.jpg',
    specs: [{ label: 'Tamanho', valor: '6,00 m x 2,40 m (20 pés)' }],
    aplicacoes: ['Almoxarifado de obra', 'Guarda de ferramentas'],
    confirmado: true,
  },
];

export const equipamentosDa = (categoria: string) => EQUIPAMENTOS.filter((e) => e.categoria === categoria);
export const getEquipamento = (categoria: string, slug: string) =>
  EQUIPAMENTOS.find((e) => e.categoria === categoria && e.slug === slug);
