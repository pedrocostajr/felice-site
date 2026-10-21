'use client';

import { useState } from 'react';
import { SimuladorAltura } from './SimuladorAltura';
import { CalculadoraGerador } from './CalculadoraGerador';

export function Ferramentas() {
  const [aba, setAba] = useState<'altura' | 'gerador'>('altura');
  return (
    <div>
      <div role="tablist" className="mb-4 flex gap-2">
        {(
          [
            ['altura', 'Trabalho em altura'],
            ['gerador', 'Potência de gerador'],
          ] as const
        ).map(([id, rotulo]) => (
          <button
            key={id}
            role="tab"
            aria-selected={aba === id}
            onClick={() => setAba(id)}
            className={`rounded px-4 py-2 text-sm font-semibold ${aba === id ? 'bg-carvao text-white' : 'bg-white text-carvao'}`}
          >
            {rotulo}
          </button>
        ))}
      </div>
      {aba === 'altura' ? <SimuladorAltura /> : <CalculadoraGerador />}
    </div>
  );
}
