import type { Metadata } from 'next';
import { SITE, UNIDADES } from '@/data/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Felice Locações',
  description: 'Conheça a política de privacidade e proteção de dados (LGPD) da Felice Locações.',
};

export default function Privacidade() {
  const matriz = UNIDADES[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:py-16">
      <h1 className="text-3xl font-extrabold sm:text-4xl text-carvao">Política de Privacidade e Proteção de Dados</h1>
      <p className="mt-2 text-sm text-aco">Última atualização: Outubro de 2026</p>

      <div className="mt-8 space-y-8 text-aco leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-carvao mb-3">1. Identificação do Controlador</h2>
          <p>
            Esta Política de Privacidade aplica-se aos dados coletados pela <strong>{SITE.razaoSocial}</strong> (&ldquo;Felice Locações&rdquo;),
            inscrita no CNPJ sob o nº <strong>{SITE.cnpj}</strong>, com sede na {matriz.endereco}, {matriz.bairro}, {matriz.cidade} - {matriz.uf}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-carvao mb-3">2. Dados Coletados e Finalidade</h2>
          <p>Coletamos e processamos informações estritamente necessárias para prestar nossos serviços de locação de equipamentos:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              <strong>Dados fornecidos voluntariamente:</strong> Ao preencher a cesta de cotação ou entrar em contato via WhatsApp/telefone, podemos coletar nome, nome da empresa, telefone/WhatsApp, cidade da obra e período de locação, utilizados exclusivamente para elaborar o orçamento e atender à sua solicitação.
            </li>
            <li>
              <strong>Dados de navegação e cookies:</strong> Registramos dados técnicos anônimos como endereço IP, navegador utilizado, páginas visualizadas, origem da visita e identificadores de campanhas publicitárias (ex.: Google Ads e Meta Ads) para otimizar o desempenho do site e mensurar resultados.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-carvao mb-3">3. Uso de Cookies e Tecnologias de Terceiros</h2>
          <p>
            Utilizamos ferramentas analíticas e de publicidade legítimas e consagradas no mercado:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong>Google Analytics 4 e Google Tag Manager:</strong> Para análise estatística de visitas e fluxo de navegação.</li>
            <li><strong>Google Ads:</strong> Para exibição de anúncios relevantes a usuários que buscam locação de equipamentos na Serra Gaúcha e mensuração de cliques e conversões.</li>
            <li><strong>Meta Pixel (Facebook/Instagram):</strong> Para mensuração de campanhas nas redes sociais.</li>
          </ul>
          <p className="mt-2">
            Você pode desativar o uso de cookies a qualquer momento alterando as preferências nas configurações do seu navegador web.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-carvao mb-3">4. Compartilhamento e Armazenamento de Dados</h2>
          <p>
            A Felice Locações <strong>não comercializa, aluga ou compartilha seus dados pessoais com terceiros para fins publicitários externos</strong>. Seus dados são acessados apenas pela equipe interna da Felice Locações para atendimento comercial, formalização de contratos de locação e cumprimento de obrigações legais e fiscais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-carvao mb-3">5. Seus Direitos (LGPD - Lei nº 13.709/2018)</h2>
          <p>Nos termos da legislação brasileira de proteção de dados, você tem direito a:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Confirmar a existência de tratamento de seus dados pessoais;</li>
            <li>Acessar seus dados ou solicitar a correção de dados incompletos ou desatualizados;</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-carvao mb-3">6. Canal de Atendimento e Encarregado de Dados (DPO)</h2>
          <p>
            Para exercer seus direitos de titular ou esclarecer qualquer dúvida sobre o tratamento de dados pessoais, entre em contato diretamente pelo e-mail{' '}
            <a href="mailto:atendimento@felicelocacoes.com.br" className="text-trator font-bold hover:underline">
              atendimento@felicelocacoes.com.br
            </a>{' '}
            ou pelo WhatsApp{' '}
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener" className="text-trator font-bold hover:underline">
              {SITE.whatsappExibicao}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
