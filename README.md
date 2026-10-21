# Site Felice Locações — base inicial

Novo site da Felice Locações em **Next.js 14 + TypeScript + Tailwind**. Junta os dados reais do site atual
(felicelocacoes.com.br) com as melhorias do protótipo (cesta de cotação, WhatsApp pré-formatado,
simuladores, páginas por categoria, equipamento e cidade).

Todas as páginas são geradas como HTML estático, com URLs reais (sem `#`), para o Google indexar.

## Rodar

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run build      # gera as 51 páginas estáticas
```

Deploy recomendado: Vercel (importar o repositório, sem configuração extra).

## Onde mexer

| O que | Arquivo |
| --- | --- |
| Cores e fonte | `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/globals.css` |
| Dados da empresa, unidades, depoimentos | `src/data/site.ts` |
| Categorias, textos de SEO e FAQ | `src/data/categorias.ts` |
| Equipamentos (frota) | `src/data/equipamentos.ts` |
| Cidades (SEO local) | `src/data/cidades.ts` |
| Mensagem do WhatsApp | `src/lib/whatsapp.ts` |
| Eventos de conversão (GTM) | `src/lib/tracking.ts` |
| Artigos do blog | `src/data/blog.ts` |
| Home | `src/app/page.tsx` |
| Página de categoria (landing do Google Ads) | `src/app/locacao/[categoria]/page.tsx` |
| Página de equipamento | `src/app/locacao/[categoria]/[equipamento]/page.tsx` |

## Estrutura de URLs

- `/` home
- `/locacao` catálogo completo
- `/locacao/{categoria}`: andaimes, plataformas-elevatorias, betoneiras, bombas, rompedores, compactadores, geradores, containers
- `/locacao/{categoria}/{equipamento}`
- `/cidades/{cidade}`: gramado, canela, nova-petropolis, sao-francisco-de-paula, caxias-do-sul
- `/blog` e `/blog/{artigo}` (10 artigos)
- `/perfuracao`, `/self-storage` (mesma URL do site atual), `/sobre`, `/contato`, `/privacidade`
- `/sitemap.xml` e `/robots.txt` automáticos

## Rastreamento

O GTM do site atual (`GTM-WBHQPBNX`) já está instalado. O site envia para o `dataLayer`:

| Evento | Quando |
| --- | --- |
| `clique_whatsapp` | Qualquer botão de WhatsApp (parâmetro `local`) |
| `envio_cesta` | Envio da cesta de cotação (conversão principal) |
| `adicionar_cesta` | Equipamento adicionado ao orçamento |
| `uso_simulador` | Uso do simulador de altura ou da calculadora de gerador |

No GTM, criar as tags de conversão do Google Ads, GA4 e Meta Pixel a partir desses eventos.
O site guarda o `gclid`/UTM da visita e coloca uma referência curta no fim da mensagem do WhatsApp.

## Pendências (conteúdo a confirmar com a Felice)

Em `npm run dev`, os pontos pendentes aparecem em caixas tracejadas laranja. Em produção eles somem.
Perguntas de FAQ com resposta `TODO` não são publicadas.

- [ ] Frota real: marca, modelo, especificações e fotos (`equipamentos.ts`, todos com `confirmado: false`)
- [ ] Mostrar ou não preços no site (`MOSTRAR_PRECOS` em `equipamentos.ts`)
- [ ] Horário de atendimento
- [ ] Prazos de entrega por cidade
- [ ] Respostas das FAQs marcadas com TODO
- [ ] Self Storage: tamanhos, endereço e horário de acesso
- [ ] Perfuração: diâmetros e forma de cobrança
- [ ] Sobre: ano de fundação, número de equipamentos, fotos reais
- [ ] Texto completo da política de privacidade (LGPD)
- [ ] Logo em versão para fundo escuro (SVG, se possível)
- [ ] Baixar as imagens do WordPress para `public/` antes de desligar o site antigo

## Blog

Os 10 artigos vêm do arquivo `textos-blog-felice-locacoes.docx`, com o texto original. Foram acrescentados
subtítulos H2, title e meta description por artigo, um link interno para a categoria relacionada, CTA de
WhatsApp, artigos relacionados e dados estruturados `BlogPosting`. Os artigos também aparecem na home e nas
páginas de categoria. Para publicar um novo artigo, basta adicionar um item em `src/data/blog.ts`.

Pendências do blog:
- [ ] Fotos reais por artigo (hoje usa a foto da categoria)
- [ ] Os textos citam itens que não estão no catálogo: andaime fachadeiro, container escritório e banheiro, rolo compactador, gerador a diesel. Confirmar se a Felice tem e cadastrar em `equipamentos.ts`
- [ ] Datas de publicação (todas em 23/09/2026; espaçar se quiser publicar aos poucos)

## Antes de publicar no domínio

- Mapear URLs antigas do WordPress com tráfego e criar redirecionamentos em `next.config.mjs`
- Enviar o `sitemap.xml` no Google Search Console
- Trocar a URL final das campanhas: Andaimes → `/locacao/andaimes`, Plataforma → `/locacao/plataformas-elevatorias`
- Testar no PageSpeed Insights (celular)
