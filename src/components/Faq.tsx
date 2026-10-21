import { JsonLd } from './JsonLd';

export function Faq({ itens }: { itens: { p: string; r: string }[] }) {
  // Trechos pendentes (TODO) são removidos; perguntas sem resposta pronta não entram no site nem no schema.
  const prontas = itens
    .map((i) => ({ ...i, r: i.r.replace(/\s*TODO:.*$/, '').trim() }))
    .filter((i) => i.r.length > 0);
  if (prontas.length === 0) return null;
  return (
    <section className="mx-auto max-w-site px-4 py-12">
      <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
      <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
        {prontas.map((i) => (
          <details key={i.p} className="group py-4">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">
              <span className="mr-2 inline-block text-ferrugem transition group-open:rotate-45">+</span>
              {i.p}
            </summary>
            <p className="mt-2 max-w-prose text-aco">{i.r}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: prontas.map((i) => ({
            '@type': 'Question',
            name: i.p,
            acceptedAnswer: { '@type': 'Answer', text: i.r },
          })),
        }}
      />
    </section>
  );
}
