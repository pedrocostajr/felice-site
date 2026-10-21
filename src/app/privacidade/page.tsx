import { Pendente } from '@/components/Pendente';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Felice Locações',
  robots: { index: false },
};

export default function Privacidade() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Política de privacidade</h1>
      <div className="mt-6 space-y-4 text-aco">
        <p>
          Este site usa cookies e ferramentas de medição (Google Analytics, Google Ads e Meta) para entender como os
          visitantes usam as páginas e melhorar nossos anúncios.
        </p>
        <p>
          Os dados que você informa no pedido de orçamento (nome, empresa, cidade e observações) são enviados
          diretamente para o nosso WhatsApp e usados apenas para responder à sua solicitação.
        </p>
        <Pendente>revisar texto completo da política com a Felice (LGPD), incluindo contato do responsável pelos dados.</Pendente>
      </div>
    </div>
  );
}
