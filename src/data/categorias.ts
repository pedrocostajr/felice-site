// Categorias reais do site atual. Slugs curtos e com palavra-chave.
export type SecaoConteudo = {
  h2: string;
  texto?: string;
  items?: string[];
  textoFinal?: string;
};

export type CtaBanner = {
  titulo: string;
  texto: string;
  botao: string;
};

export type Categoria = {
  slug: string;
  nome: string;           // nome no menu
  h1: string;             // título da página (palavra-chave + região)
  metaTitle: string;
  metaDescription: string;
  resumo: string;         // texto do card
  intro: string;          // texto de abertura da página
  imagem: string;
  ferramenta?: 'altura' | 'gerador';
  secoes?: SecaoConteudo[];
  cta?: CtaBanner;
  faq: { p: string; r: string }[];
};

const IMG = 'https://www.felicelocacoes.com.br/wp-content/uploads';

export const CATEGORIAS: Categoria[] = [
  {
    slug: 'andaimes',
    nome: 'Andaimes',
    h1: 'Locação de andaimes em Gramado e Canela',
    metaTitle: 'Aluguel de Andaimes em Gramado e Canela | Felice Locações',
    metaDescription: 'Aluguel de andaimes tubulares para obras internas e externas em Gramado, Canela e Serra Gaúcha. Montagem prática, entrega na obra. Peça seu orçamento.',
    resumo: 'Estrutura provisória para trabalho em altura, em ambiente interno ou externo, com segurança e praticidade.',
    intro: 'Aluguel de andaimes tubulares e escoras metálicas para reboco, pintura, fachada, telhado e manutenção predial em Gramado, Canela e Serra Gaúcha. Você informa a altura e a extensão da área e a nossa equipe calcula a quantidade de peças, com entrega e retirada na obra.',
    imagem: '/images/andaimes.jpg',
    secoes: [
      {
        h2: 'Onde usar andaime na sua obra',
        texto: 'O andaime tubular é a solução mais usada para trabalho em altura na construção civil. Os painéis de encaixe rápido formam torres e fachadas inteiras, atendendo desde a pintura de uma casa até o reboco e o revestimento de prédios, pousadas e hotéis. É indicado para:',
        items: [
          'Reboco, chapisco e pintura de fachadas',
          'Assentamento de pedras, revestimentos e esquadrias',
          'Manutenção de telhados, calhas e beirais',
          'Serviços internos em pé-direito alto, como forros, gesso e iluminação',
          'Montagem de estruturas e instalações elétricas',
        ],
      },
      {
        h2: 'Escoras metálicas para lajes e vigas',
        texto: 'Além dos andaimes, alugamos escoras metálicas reguláveis para o escoramento de lajes, vigas e formas. A regulagem de altura agiliza a montagem, dá mais firmeza que a escora de madeira e evita desperdício de material na obra.',
      },
      {
        h2: 'Como calcular a quantidade de andaimes',
        texto: 'Não precisa entender de montagem para pedir orçamento. Basta informar a altura que você precisa alcançar e o comprimento da parede ou fachada. Com esses dois dados calculamos os painéis, travessas, pisos, sapatas e rodízios necessários, e você paga só pelo que vai usar, na locação diária, semanal ou mensal.',
      },
    ],
    cta: {
      titulo: 'Precisa de andaime para a sua obra em Gramado ou Canela?',
      texto: 'Envie a altura e a extensão da área e receba o orçamento com a quantidade certa de peças.',
      botao: 'Pedir orçamento no WhatsApp',
    },
    faq: [
      { p: 'Vocês calculam a quantidade de andaimes para a minha obra?', r: 'Sim. Informe a altura e o comprimento da área de trabalho e nossa equipe calcula as peças necessárias.' },
      { p: 'Os andaimes são entregues na obra?', r: 'Sim, entregamos e recolhemos com a nossa frota em Gramado, Canela e região.' },
      { p: 'Qual o período mínimo de locação?', r: 'Trabalhamos com opções de locação diária, semanal e mensal, adaptando o período à necessidade da sua obra.' },
      { p: 'Vocês alugam andaime para obra pequena ou reforma residencial?', r: 'Sim. Atendemos de pequenas reformas e pinturas de casas a obras de grande porte, na quantidade que o serviço exigir.' },
      { p: 'Posso alugar andaime com rodízio?', r: 'Sim. Dispomos de rodízios com trava, pisos metálicos antiderrapantes, guarda-corpos e sapatas ajustáveis para locação junto às torres.' },
      { p: 'Quais cidades vocês atendem?', r: 'Gramado, Canela, Nova Petrópolis, São Francisco de Paula, Caxias do Sul e região.' },
    ],
  },
  {
    slug: 'plataformas-elevatorias',
    nome: 'Plataformas elevatórias',
    h1: 'Locação de plataforma elevatória em Gramado e Canela',
    metaTitle: 'Aluguel de Plataforma Elevatória em Gramado | Felice Locações',
    metaDescription: 'Plataforma articulada, tesoura e elevatória individual para locação em Gramado, Canela e Serra Gaúcha. Descubra a altura certa no simulador e peça orçamento.',
    resumo: 'Plataformas articulada, tesoura e elevatória individual para acessar alturas com segurança.',
    intro: 'Aluguel de plataforma elevatória tesoura e articulada para fachadas, telhados, manutenção de hotéis, galpões e montagem de eventos em Gramado, Canela e Serra Gaúcha. Use o simulador abaixo para descobrir qual plataforma alcança a altura do seu serviço.',
    imagem: '/images/plataformas-elevatorias.jpg',
    ferramenta: 'altura',
    secoes: [
      {
        h2: 'Trabalho em altura com mais segurança e rapidez',
        texto: 'A plataforma elevatória substitui o andaime quando o serviço pede agilidade e mobilidade. Em vez de montar e desmontar estrutura, o operador sobe, executa o trabalho e se desloca para o próximo ponto em minutos. É a escolha certa para:',
        items: [
          'Pintura, limpeza e manutenção de fachadas',
          'Instalação de iluminação, letreiros e decoração de eventos',
          'Manutenção de telhados, calhas e estruturas metálicas',
          'Serviços em hotéis, pousadas, galpões e centros comerciais',
          'Instalações elétricas, de ar-condicionado e de combate a incêndio',
        ],
      },
      {
        h2: 'Qual plataforma elevatória alugar',
        items: [
          'Plataforma individual: compacta, para uma pessoa, ideal para ambientes internos e corredores.',
          'Tesoura elétrica 8 m: sobe na vertical com cesto amplo, silenciosa e sem emissão de gases, para uso interno em piso firme.',
          'Tesoura diesel 12 m: todo-terreno, para obra externa e fachadas.',
          'Articulada diesel 16 m: braço que contorna obstáculos e alcança pontos afastados da base.',
        ],
      },
    ],
    cta: {
      titulo: 'Não sabe qual plataforma alugar?',
      texto: 'Diga a altura, o tipo de piso e o serviço, e indicamos o modelo certo para a sua obra ou evento.',
      botao: 'Pedir orçamento no WhatsApp',
    },
    faq: [
      { p: 'Qual a diferença entre plataforma tesoura e articulada?', r: 'A tesoura sobe na vertical e tem cesto amplo, ideal para tetos e fachadas retas. A articulada tem braço que contorna obstáculos e alcança pontos afastados da base.' },
      { p: 'Preciso de operador treinado?', r: 'A operação exige treinamento conforme as normas NR-35 e NR-18. Nossa equipe fornece orientação de uso no momento da entrega.' },
      { p: 'A plataforma funciona em terreno irregular?', r: 'Modelos a diesel com tração 4x4 trabalham em terreno de obra. Os elétricos são indicados para piso firme e nivelado.' },
      { p: 'Vale mais a pena alugar plataforma ou andaime?', r: 'Para serviços rápidos, em vários pontos ou com pouco espaço para montagem, a plataforma rende mais. Para trabalhos longos na mesma fachada, o andaime costuma ser mais econômico.' },
      { p: 'Vocês entregam a plataforma no local?', r: 'Sim, entregamos e recolhemos em Gramado, Canela e região.' },
    ],
  },
  {
    slug: 'betoneiras',
    nome: 'Betoneiras',
    h1: 'Aluguel de betoneira em Gramado e Canela',
    metaTitle: 'Aluguel de Betoneira em Gramado e Canela | Felice Locações',
    metaDescription: 'Betoneiras para locação em Gramado, Canela e região. Ideal para pequenos empreiteiros e obras residenciais. Entrega na obra. Solicite seu orçamento.',
    resumo: 'Para misturar pedra, areia, cimento e água na proporção certa para cada tipo de obra.',
    intro: 'Aluguel de betoneira 400 litros para concreto e argamassa em Gramado, Canela e Serra Gaúcha. Ideal para lajes, contrapiso, fundações, calçadas e reformas, com modelos monofásicos e trifásicos e entrega na obra.',
    imagem: '/images/betoneiras.jpg',
    secoes: [
      {
        h2: 'Para que serve a betoneira',
        texto: 'A betoneira mistura cimento, areia, brita e água de forma uniforme, garantindo um concreto mais resistente e homogêneo do que a mistura feita à mão. Também reduz o esforço da equipe e acelera o andamento da obra. É indicada para:',
        items: [
          'Concretagem de lajes, vigas, pilares e sapatas',
          'Contrapiso e regularização de pisos',
          'Argamassa para reboco e assentamento',
          'Calçadas, muros e pequenas fundações',
          'Reformas e ampliações residenciais',
        ],
      },
      {
        h2: 'Betoneira 400 litros: rendimento para obras pequenas e médias',
        texto: 'O modelo de 400 litros é o mais procurado por pedreiros, empreiteiros e construtoras, porque atende bem a obras residenciais e comerciais sem ocupar muito espaço no canteiro. Temos opções em 220 V e 380 V para se adaptar à energia disponível na sua obra.',
      },
      {
        h2: 'Alugar betoneira compensa?',
        texto: 'Para quem não usa o equipamento o ano inteiro, alugar sai mais barato do que comprar: você não se preocupa com manutenção, armazenamento nem transporte, e usa a betoneira apenas pelo período da concretagem.',
      },
    ],
    cta: {
      titulo: 'Vai concretar nos próximos dias?',
      texto: 'Garanta a betoneira para a sua obra em Gramado, Canela e região.',
      botao: 'Pedir orçamento no WhatsApp',
    },
    faq: [
      { p: 'Qual a voltagem das betoneiras?', r: 'Dispomos de modelos monofásicos e trifásicos (220 V e 380 V) para atender a infraestrutura da sua obra.' },
      { p: 'Qual a capacidade da betoneira?', r: 'Trabalhamos com betoneiras de 400 litros, ideais para o rendimento de obras residenciais e comerciais.' },
      { p: 'Vocês entregam a betoneira na obra?', r: 'Sim, entregamos e recolhemos com a nossa frota em Gramado, Canela e região.' },
      { p: 'Posso alugar betoneira por um dia?', r: 'Trabalhamos com locação diária, semanal e mensal, adaptando o período à necessidade da sua obra.' },
      { p: 'Minha obra não tem energia. Consigo usar a betoneira?', r: 'Sim, ligando a um gerador. Também alugamos geradores de energia.' },
    ],
  },
  {
    slug: 'bombas',
    nome: 'Bombas d’água',
    h1: 'Locação de bomba d’água em Gramado e Canela',
    metaTitle: 'Aluguel de Bomba d’Água para Obras em Gramado | Felice Locações',
    metaDescription: 'Bombas d’água para drenagem e transferência de grandes volumes em obras de Gramado, Canela e Serra Gaúcha. Peça seu orçamento pelo WhatsApp.',
    resumo: 'Para transferir grandes volumes de água em drenagens, escavações e esgotamentos.',
    intro: 'Aluguel de bomba d\'água submersa para drenagem e esgotamento de valas, fundações, poços, subsolos e reservatórios em Gramado, Canela e Serra Gaúcha. Modelos para água limpa e para água suja com lama e resíduos.',
    imagem: '/images/bombas.jpg',
    secoes: [
      {
        h2: 'Quando alugar uma bomba d\'água',
        texto: 'Água acumulada atrasa a obra, compromete a fundação e coloca a equipe em risco. A bomba submersa resolve o problema rapidamente: é colocada dentro da água e ligada a mangueiras ou canos para transferir o volume até o ponto de descarte. É indicada para:',
        items: [
          'Esgotamento de valas e fundações alagadas pela chuva',
          'Drenagem de subsolos, garagens e poços de elevador',
          'Esvaziamento de piscinas, cisternas e reservatórios',
          'Rebaixamento de água em escavações',
          'Emergências com alagamento em casas e comércios',
        ],
      },
      {
        h2: 'Bomba para água limpa ou água suja?',
        texto: 'A escolha depende do que há na água. Para cisternas e reservatórios, a bomba de água limpa atende. Para valas e fundações com lama, areia e resíduos, é preciso um modelo de drenagem próprio para sólidos. Informe a situação e indicamos a bomba e o diâmetro de mangueira adequados.',
      },
    ],
    cta: {
      titulo: 'Obra parada por causa de água acumulada?',
      texto: 'Fale agora com a nossa equipe e receba a indicação da bomba certa para o seu caso.',
      botao: 'Pedir orçamento no WhatsApp',
    },
    faq: [
      { p: 'A bomba serve para água suja?', r: 'Sim, dispomos de modelos específicos para água limpa e para esgotamento de valas com lama e resíduos.' },
      { p: 'A bomba vem com mangueira?', r: 'Sim, fornecemos a bomba com as mangueiras adequadas de sucção e descarga conforme o seu projeto.' },
      { p: 'Qual a voltagem das bombas?', r: 'Dispomos de modelos monofásicos e trifásicos em 220 V e 380 V.' },
      { p: 'Vocês atendem com urgência?', r: 'Sim, mantemos frota pronta para entregas rápidas em situações de emergência.' },
    ],
  },
  {
    slug: 'rompedores',
    nome: 'Rompedores',
    h1: 'Locação de rompedor e martelete em Gramado e Canela',
    metaTitle: 'Aluguel de Rompedor e Martelete em Gramado | Felice Locações',
    metaDescription: 'Martelos rompedores para demolição de pisos, lajes, vigas e sapatas em Gramado, Canela e região. Entrega na obra. Solicite orçamento.',
    resumo: 'Para demolição de pisos de concreto, vigas, lajes, sapatas e bases de máquinas.',
    intro: 'Aluguel de rompedor e martelete demolidor para quebrar concreto, pisos, lajes e paredes em Gramado, Canela e Serra Gaúcha. Diga o que você vai demolir e indicamos o peso certo do equipamento.',
    imagem: '/images/rompedores.jpg',
    secoes: [
      {
        h2: 'Onde usar rompedor e martelete',
        texto: 'O rompedor faz em minutos o serviço que levaria horas com marreta e talhadeira, com menos esforço e mais precisão. Na locação você conta com equipamentos para demolição leve e pesada:',
        items: [
          'Remoção de pisos, azulejos, cerâmicas e contrapiso',
          'Abertura de rasgos para tubulação hidráulica e elétrica',
          'Abertura de vãos, portas e janelas em alvenaria',
          'Demolição de lajes, vigas, sapatas e concreto armado',
          'Quebra de calçadas, asfalto e bases de concreto',
        ],
      },
      {
        h2: 'Martelete 5 kg ou rompedor 30 kg: qual escolher',
        items: [
          'Martelete rompedor 5 kg: leve e fácil de manusear, ideal para reformas, retirada de revestimentos e trabalhos em paredes e locais altos.',
          'Rompedor 30 kg: para demolição pesada no piso, como concreto armado, lajes, sapatas e calçadas espessas.',
        ],
        textoFinal: 'Usar um equipamento pesado demais cansa o operador e pode danificar a estrutura que deve ficar. Usar um leve demais faz o serviço render pouco. Por isso, conte o que será quebrado e a espessura aproximada, e indicamos o modelo.',
      },
    ],
    cta: {
      titulo: 'Vai quebrar piso, laje ou concreto?',
      texto: 'Alugue o rompedor certo para a sua reforma ou demolição em Gramado, Canela e região.',
      botao: 'Pedir orçamento no WhatsApp',
    },
    faq: [
      { p: 'Qual rompedor usar para quebrar piso de concreto?', r: 'Para contrapiso e azulejo, um martelete leve resolve. Para laje e concreto armado, o ideal é um rompedor pesado.' },
      { p: 'O rompedor acompanha ponteiro e talhadeira?', r: 'Sim, os rompedores acompanham ponteiro e talhadeira inclusos no aluguel.' },
      { p: 'Qual a voltagem dos rompedores?', r: 'Nossos marteletes e rompedores operam em 220 V.' },
      { p: 'Vale a pena alugar rompedor para uma reforma pequena?', r: 'Sim. Como o uso é pontual, o aluguel sai muito mais em conta do que a compra, e você devolve o equipamento ao terminar.' },
    ],
  },
  {
    slug: 'compactadores',
    nome: 'Compactadores',
    h1: 'Aluguel de compactador de solo em Gramado e Canela',
    metaTitle: 'Aluguel de Compactador e Placa Vibratória em Gramado | Felice Locações',
    metaDescription: 'Compactador de solo (sapo) e placa vibratória para locação em Gramado, Canela e Serra Gaúcha. Para aterros, pavers e asfalto. Peça seu orçamento.',
    resumo: 'Compactador de percussão e placa vibratória para solo, pavers, asfalto e estacionamentos.',
    intro: 'Aluguel de compactador de solo tipo sapo e placa vibratória em Gramado, Canela e Serra Gaúcha. Para aterros, valas, bases de piso, calçamento com paver e reparos em asfalto, com entrega na obra.',
    imagem: '/images/compactadores.jpg',
    secoes: [
      {
        h2: 'Por que compactar o solo',
        texto: 'Solo mal compactado é a principal causa de pisos afundados, calçadas trincadas e pavers desnivelados. A compactação elimina os vazios do terreno, aumenta a capacidade de carga e garante a durabilidade do que será construído por cima. Use o compactador em:',
        items: [
          'Aterros e reaterros de fundações',
          'Fechamento de valas de água, esgoto e elétrica',
          'Base e sub-base para contrapiso e piso de concreto',
          'Assentamento de paver, bloquete e piso intertravado',
          'Pátios, calçadas, estacionamentos e acessos',
          'Reparos e remendos em asfalto',
        ],
      },
      {
        h2: 'Sapo ou placa vibratória',
        items: [
          'Compactador de solo (sapo): compacta por percussão, com alto impacto em área pequena. Indicado para solo argiloso, valas estreitas e cantos junto a fundações.',
          'Placa vibratória: compacta por vibração e cobre mais área por passada. Indicada para areia, brita, pó de brita, pavers e asfalto em áreas abertas.',
        ],
        textoFinal: 'Em muitas obras os dois são usados juntos: o sapo nas valas e a placa no acabamento do calçamento.',
      },
    ],
    cta: {
      titulo: 'Vai fazer aterro, calçada ou paver?',
      texto: 'Informe o tipo de solo e a área, e indicamos o compactador ideal para a sua obra.',
      botao: 'Pedir orçamento no WhatsApp',
    },
    faq: [
      { p: 'Sapo ou placa vibratória: qual escolher?', r: 'O sapo é indicado para solo argiloso e valas estreitas. A placa vibratória rende mais em áreas abertas, areia, brita e pavers.' },
      { p: 'Qual compactador usar para assentar paver?', r: 'A placa vibratória, tanto na base de brita e areia quanto no acabamento sobre as peças já assentadas.' },
      { p: 'O compactador é a gasolina?', r: 'Sim, nossos compactadores de solo possuem motor a gasolina 4 tempos.' },
      { p: 'Vocês entregam o compactador na obra?', r: 'Sim, entregamos e recolhemos em Gramado, Canela e região.' },
    ],
  },
  {
    slug: 'geradores',
    nome: 'Geradores',
    h1: 'Aluguel de gerador de energia em Gramado e Canela',
    metaTitle: 'Aluguel de Gerador de Energia em Gramado e Canela | Felice Locações',
    metaDescription: 'Geradores para obras, eventos, comércio e emergências em Gramado, Canela e Serra Gaúcha. Calcule a potência certa e peça seu orçamento.',
    resumo: 'Energia onde não há rede elétrica, em emergências, horários de pico e eventos.',
    intro: 'Aluguel de gerador de energia de 55 kVA e 150 kVA para obras, eventos, casamentos, hotéis, comércio e indústria em Gramado, Canela e Serra Gaúcha. Use a calculadora abaixo para estimar a potência que você precisa.',
    imagem: '/images/geradores.jpg',
    ferramenta: 'gerador',
    secoes: [
      {
        h2: 'Quando alugar um gerador de energia',
        texto: 'O gerador garante energia onde a rede não chega ou não pode falhar. Na Serra Gaúcha, é muito procurado para eventos e para obras em terrenos ainda sem ligação definitiva. As aplicações mais comuns são:',
        items: [
          'Obras e canteiros sem ligação de energia',
          'Casamentos, festas, feiras e eventos ao ar livre',
          'Energia de reserva para hotéis, pousadas e restaurantes',
          'Comércios e indústrias durante manutenções ou quedas de rede',
          'Alimentação de betoneiras, serras, soldas e outros equipamentos',
        ],
      },
      {
        h2: 'Como escolher a potência do gerador',
        texto: 'A potência é definida pela soma de tudo o que ficará ligado ao mesmo tempo, com uma margem de segurança para a partida dos motores.',
        items: [
          'Gerador 55 kVA: obras, comércio e eventos de médio porte.',
          'Gerador 150 kVA: eventos grandes, hotéis e indústria.',
        ],
        textoFinal: 'Use a calculadora para uma estimativa e envie a lista de equipamentos. A nossa equipe confirma a potência antes da locação.',
      },
    ],
    cta: {
      titulo: 'Precisa de energia garantida na obra ou no evento?',
      texto: 'Envie a data, o local e o que será ligado, e receba o orçamento do gerador ideal.',
      botao: 'Pedir orçamento no WhatsApp',
    },
    faq: [
      { p: 'Como saber a potência do gerador?', r: 'Some a potência de tudo que vai ligar ao mesmo tempo e acrescente uma margem de segurança. A calculadora desta página faz essa conta.' },
      { p: 'O gerador vem com cabos e combustível?', r: 'Entregamos o gerador testado e pronto para uso, podendo incluir cabos e quadro de distribuição conforme a necessidade da locação.' },
      { p: 'Há atendimento fora do horário comercial?', r: 'Para geradores em eventos ou emergências, disponibilizamos suporte técnico sob consulta.' },
      { p: 'Vocês alugam gerador para casamento e evento?', r: 'Sim, atendemos eventos em Gramado, Canela e região com geradores silenciados (carenados), ideais para não interferir na acústica do evento.' },
      { p: 'O combustível está incluso?', r: 'O gerador é fornecido com tanque cheio ou com plano de abastecimento alinhado na contratação.' },
      { p: 'Vocês fazem a instalação do gerador?', r: 'Sim, disponibilizamos cabos, quadros de distribuição e suporte técnico para instalação.' },
    ],
  },
  {
    slug: 'containers',
    nome: 'Containers',
    h1: 'Locação de container para obra em Gramado e Canela',
    metaTitle: 'Aluguel de Container para Obra em Gramado | Felice Locações',
    metaDescription: 'Containers de aço para guardar materiais e ferramentas na obra, com fechamento seguro. Locação em Gramado, Canela e região.',
    resumo: 'Containers de aço com fechamento seguro para guardar materiais e ferramentas na obra.',
    intro: 'Aluguel de container almoxarifado para obra em Gramado, Canela e Serra Gaúcha. Guarde materiais, ferramentas e equipamentos com organização e proteção contra furtos e contra o clima durante toda a construção.',
    imagem: '/images/containers.jpg',
    secoes: [
      {
        h2: 'Para que serve o container na obra',
        texto: 'O container de aço funciona como um depósito pronto no canteiro: chega, é posicionado e já pode ser usado, sem a necessidade de construir um barracão de madeira. É indicado para:',
        items: [
          'Almoxarifado de ferramentas e equipamentos',
          'Depósito de cimento, argamassa, tintas e materiais sensíveis à umidade',
          'Guarda de fios, cabos, metais e itens de maior valor',
          'Apoio a obras em terrenos abertos ou afastados',
          'Armazenamento temporário em reformas e eventos',
        ],
      },
      {
        h2: 'Vantagens de alugar um container',
        items: [
          'Segurança: estrutura de aço com tranca reforçada, que reduz o risco de furtos no canteiro.',
          'Proteção: materiais abrigados da chuva, da umidade e do frio da Serra.',
          'Agilidade: instalação rápida, sem obra civil.',
          'Economia: ao fim da construção, é só devolver, sem custo de desmontagem.',
        ],
      },
    ],
    cta: {
      titulo: 'Precisa de um depósito seguro na sua obra?',
      texto: 'Solicite o orçamento do container almoxarifado com entrega em Gramado, Canela e região.',
      botao: 'Pedir orçamento no WhatsApp',
    },
    faq: [
      { p: 'Quais tamanhos de container vocês têm?', r: 'Dispomos de containers padrão para almoxarifado e depósito de ferramentas com tranca reforçada.' },
      { p: 'Qual o tamanho do container?', r: 'Dispomos de modelos de container almoxarifado padronizados (3 m e 6 m) ideais para canteiros de obras.' },
      { p: 'O que preciso ter no terreno para receber o container?', r: 'Um espaço nivelado e desobstruído com acesso para o caminhão munck de entrega.' },
      { p: 'Vocês têm container escritório ou com banheiro?', r: 'Consulte a disponibilidade dos nossos modelos de almoxarifado e escritório com a nossa equipe.' },
      { p: 'Quero guardar coisas fora da obra. Vocês têm essa opção?', r: 'Sim! Conheça nosso serviço de Self Storage em Gramado, com boxes privativos e monitoramento 24h.' },
    ],
  },
];

export const getCategoria = (slug: string) => CATEGORIAS.find((c) => c.slug === slug);
