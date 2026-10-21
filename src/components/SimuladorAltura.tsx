'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { equipamentosDa } from '@/data/equipamentos';
import { track } from '@/lib/tracking';
import { AdicionarCotacao } from './BotoesCotacao';

// Recomenda a menor plataforma que alcança a altura e serve para o terreno.
export function SimuladorAltura() {
  const [altura, setAltura] = useState(7);
  const [terreno, setTerreno] = useState<'plano' | 'irregular'>('plano');
  const [usou, setUsou] = useState(false);

  const plataformas = equipamentosDa('plataformas-elevatorias').filter((e) => e.alturaTrabalhoM);

  const indicada = useMemo(() => {
    const candidatas = plataformas
      .filter((p) => (p.alturaTrabalhoM ?? 0) >= altura)
      .filter((p) => terreno === 'plano' || p.terreno === 'irregular')
      .sort((a, b) => (a.alturaTrabalhoM ?? 0) - (b.alturaTrabalhoM ?? 0));
    return candidatas[0];
  }, [altura, terreno, plataformas]);

  function registrar() {
    if (!usou) {
      track('uso_simulador', { ferramenta: 'altura' });
      setUsou(true);
    }
  }

  const andares = Math.max(1, Math.round(altura / 3));

  return (
    <div className="grid gap-6 rounded border-2 border-carvao bg-white p-5 md:grid-cols-2">
      <div className="space-y-5">
        <h3 className="text-xl font-bold">Qual plataforma alcança o seu serviço?</h3>
        <label className="block">
          <span className="flex justify-between text-sm font-semibold">
            Altura onde vai trabalhar
            <output className="text-lg">{altura} m</output>
          </span>
          <input
            type="range"
            min={3}
            max={20}
            value={altura}
            onChange={(e) => {
              setAltura(Number(e.target.value));
              registrar();
            }}
            className="mt-2 w-full accent-trator"
          />
          <span className="text-xs text-aco">Aproximadamente {andares} {andares > 1 ? 'andares' : 'andar'}</span>
        </label>
        <fieldset>
          <legend className="text-sm font-semibold">Onde a máquina vai ficar?</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {(
              [
                ['plano', 'Piso firme e plano'],
                ['irregular', 'Terra, grama ou desnível'],
              ] as const
            ).map(([v, rotulo]) => (
              <button
                key={v}
                type="button"
                onClick={() => {
                  setTerreno(v);
                  registrar();
                }}
                aria-pressed={terreno === v}
                className={`rounded border px-3 py-2 text-sm ${terreno === v ? 'border-carvao bg-carvao text-white' : 'border-zinc-300'}`}
              >
                {rotulo}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="rounded bg-concreto p-5" aria-live="polite">
        {indicada ? (
          <>
            <p className="text-sm text-aco">Indicada para {altura} m em {terreno === 'plano' ? 'piso firme' : 'terreno irregular'}</p>
            <p className="mt-1 text-2xl font-bold">{indicada.nome}</p>
            <p className="mt-2 text-sm text-aco">{indicada.resumo}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <AdicionarCotacao slug={indicada.slug} nome={indicada.nome} categoria={indicada.categoria} compacto />
              <Link href={`/locacao/${indicada.categoria}/${indicada.slug}`} className="self-center text-sm font-semibold underline">
                Ver detalhes
              </Link>
            </div>
          </>
        ) : (
          <p className="text-sm">
            Para essa altura, fale com a nossa equipe: vamos indicar a melhor solução para o seu caso.
          </p>
        )}
      </div>
    </div>
  );
}
