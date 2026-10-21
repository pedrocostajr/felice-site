'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { equipamentosDa } from '@/data/equipamentos';
import { track } from '@/lib/tracking';
import { AdicionarCotacao } from './BotoesCotacao';

// Potências típicas aproximadas, em kVA. Ajustar com a equipe técnica da Felice.
const CARGAS = [
  { id: 'iluminacao', nome: 'Iluminação de evento (por 10 refletores LED)', kva: 2 },
  { id: 'som', nome: 'Som profissional', kva: 8 },
  { id: 'cozinha', nome: 'Cozinha de buffet (fornos e freezers)', kva: 15 },
  { id: 'ar', nome: 'Ar-condicionado ou climatização (por aparelho)', kva: 4 },
  { id: 'betoneira', nome: 'Betoneira', kva: 3 },
  { id: 'serra', nome: 'Serra circular ou policorte', kva: 3 },
  { id: 'solda', nome: 'Máquina de solda', kva: 10 },
  { id: 'loja', nome: 'Loja ou escritório pequeno', kva: 12 },
];

export function CalculadoraGerador() {
  const [qtd, setQtd] = useState<Record<string, number>>({});
  const [margem, setMargem] = useState(25);
  const [usou, setUsou] = useState(false);

  const soma = CARGAS.reduce((s, c) => s + c.kva * (qtd[c.id] ?? 0), 0);
  const necessario = Math.ceil(soma * (1 + margem / 100));

  const geradores = equipamentosDa('geradores').filter((g) => g.kva).sort((a, b) => (a.kva ?? 0) - (b.kva ?? 0));
  const indicado = useMemo(() => geradores.find((g) => (g.kva ?? 0) >= necessario), [necessario, geradores]);

  function mudar(id: string, n: number) {
    setQtd({ ...qtd, [id]: Math.max(0, n) });
    if (!usou) {
      track('uso_simulador', { ferramenta: 'gerador' });
      setUsou(true);
    }
  }

  return (
    <div className="grid gap-6 rounded border-2 border-carvao bg-white p-5 md:grid-cols-2">
      <div>
        <h3 className="text-xl font-bold">Qual gerador você precisa?</h3>
        <p className="mt-1 text-sm text-aco">Marque o que vai ligar ao mesmo tempo.</p>
        <ul className="mt-4 space-y-2">
          {CARGAS.map((c) => (
            <li key={c.id} className="flex items-center justify-between gap-3 text-sm">
              <span>{c.nome}</span>
              <span className="flex items-center gap-1">
                <button type="button" className="h-8 w-8 rounded border" onClick={() => mudar(c.id, (qtd[c.id] ?? 0) - 1)} aria-label={`Menos ${c.nome}`}>−</button>
                <span className="w-6 text-center font-semibold">{qtd[c.id] ?? 0}</span>
                <button type="button" className="h-8 w-8 rounded border" onClick={() => mudar(c.id, (qtd[c.id] ?? 0) + 1)} aria-label={`Mais ${c.nome}`}>+</button>
              </span>
            </li>
          ))}
        </ul>
        <label className="mt-5 block text-sm">
          <span className="font-semibold">Margem de segurança: {margem}%</span>
          <input type="range" min={10} max={50} step={5} value={margem} onChange={(e) => setMargem(Number(e.target.value))} className="mt-2 w-full accent-trator" />
        </label>
      </div>

      <div className="rounded bg-concreto p-5" aria-live="polite">
        <p className="text-sm text-aco">Potência estimada</p>
        <p className="text-4xl font-bold">{necessario} kVA</p>
        {soma === 0 ? (
          <p className="mt-4 text-sm">Adicione os equipamentos para ver a indicação.</p>
        ) : indicado ? (
          <>
            <p className="mt-4 text-sm text-aco">Indicado</p>
            <p className="text-2xl font-bold">{indicado.nome}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <AdicionarCotacao slug={indicado.slug} nome={indicado.nome} categoria={indicado.categoria} compacto />
              <Link href={`/locacao/geradores/${indicado.slug}`} className="self-center text-sm font-semibold underline">Ver detalhes</Link>
            </div>
          </>
        ) : (
          <p className="mt-4 text-sm">Acima da nossa maior potência listada. Fale com a equipe para montar a solução.</p>
        )}
        <p className="mt-6 text-xs text-aco">Estimativa de referência. A equipe confirma a potência antes da locação.</p>
      </div>
    </div>
  );
}
