'use client';

import { useState } from 'react';
import { useCotacao } from './CotacaoProvider';
import { linkWhatsApp, mensagemCesta, type ItemCotacao } from '@/lib/whatsapp';
import { lerOrigem, track } from '@/lib/tracking';
import { CIDADES } from '@/data/cidades';

const PERIODOS: ItemCotacao['periodo'][] = ['diária', 'semana', 'quinzena', 'mês'];

export function CestaDrawer() {
  const { itens, aberta, fechar, atualizar, remover } = useCotacao();
  const [cliente, setCliente] = useState({ nome: '', empresa: '', cidade: '', inicio: '', obs: '' });

  if (!aberta) return null;

  const podeEnviar = itens.length > 0 && cliente.nome.trim() && cliente.cidade.trim();

  function enviar() {
    const texto = mensagemCesta(itens, cliente, lerOrigem());
    track('envio_cesta', {
      itens: itens.length,
      categorias: Array.from(new Set(itens.map((i) => i.categoria))).join(','),
      cidade: cliente.cidade,
    });
    window.open(linkWhatsApp(texto), '_blank', 'noopener');
  }

  const campo =
    'w-full rounded border border-zinc-300 px-3 py-2 text-sm focus:border-carvao focus:outline-none focus:ring-2 focus:ring-trator';

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Pedido de orçamento">
      <button className="absolute inset-0 bg-black/50" aria-label="Fechar" onClick={fechar} />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-white shadow-xl">
        <header className="flex items-center justify-between bg-carvao px-5 py-4 text-white">
          <h2 className="text-lg font-bold">Seu pedido de orçamento</h2>
          <button onClick={fechar} className="rounded px-2 py-1 text-2xl leading-none hover:text-trator" aria-label="Fechar">
            ×
          </button>
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          {itens.length === 0 ? (
            <p className="text-aco">
              Nenhum equipamento no pedido ainda. Abra um equipamento e toque em “Adicionar ao orçamento”.
            </p>
          ) : (
            <ul className="space-y-3">
              {itens.map((i) => (
                <li key={i.slug} className="rounded border border-zinc-200 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold">{i.nome}</p>
                    <button onClick={() => remover(i.slug)} className="text-sm text-ferrugem underline">
                      Remover
                    </button>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                    <label className="flex flex-col">
                      <span className="text-xs text-aco">Qtd.</span>
                      <input
                        type="number"
                        min={1}
                        value={i.quantidade}
                        onChange={(e) => atualizar(i.slug, { quantidade: Math.max(1, Number(e.target.value)) })}
                        className={campo}
                      />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-xs text-aco">Tempo</span>
                      <input
                        type="number"
                        min={1}
                        value={i.duracao}
                        onChange={(e) => atualizar(i.slug, { duracao: Math.max(1, Number(e.target.value)) })}
                        className={campo}
                      />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-xs text-aco">Período</span>
                      <select
                        value={i.periodo}
                        onChange={(e) => atualizar(i.slug, { periodo: e.target.value as ItemCotacao['periodo'] })}
                        className={campo}
                      >
                        {PERIODOS.map((p) => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <fieldset className="space-y-3">
            <legend className="mb-1 font-semibold">Seus dados</legend>
            <input className={campo} placeholder="Seu nome *" value={cliente.nome} onChange={(e) => setCliente({ ...cliente, nome: e.target.value })} />
            <input className={campo} placeholder="Empresa (opcional)" value={cliente.empresa} onChange={(e) => setCliente({ ...cliente, empresa: e.target.value })} />
            <input
              className={campo}
              placeholder="Cidade da obra *"
              list="cidades-lista"
              value={cliente.cidade}
              onChange={(e) => setCliente({ ...cliente, cidade: e.target.value })}
            />
            <datalist id="cidades-lista">
              {CIDADES.map((c) => (
                <option key={c.slug} value={c.nome} />
              ))}
            </datalist>
            <label className="block text-sm">
              <span className="text-xs text-aco">Início desejado</span>
              <input type="date" className={campo} value={cliente.inicio} onChange={(e) => setCliente({ ...cliente, inicio: e.target.value })} />
            </label>
            <textarea
              className={campo}
              rows={3}
              placeholder="Observações (endereço, altura, tipo de terreno...)"
              value={cliente.obs}
              onChange={(e) => setCliente({ ...cliente, obs: e.target.value })}
            />
          </fieldset>
        </div>

        <footer className="border-t border-zinc-200 p-5">
          <button
            onClick={enviar}
            disabled={!podeEnviar}
            className="w-full rounded bg-trator px-4 py-3 font-bold text-carvao hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Enviar pedido pelo WhatsApp
          </button>
          {!podeEnviar && itens.length > 0 && (
            <p className="mt-2 text-center text-xs text-aco">Preencha nome e cidade da obra para enviar.</p>
          )}
        </footer>
      </aside>
    </div>
  );
}
