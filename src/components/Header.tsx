'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIAS } from '@/data/categorias';
import { SITE } from '@/data/site';
import { BotaoCesta, WhatsAppLink } from './BotoesCotacao';

const LINKS = [
  { href: '/locacao', rotulo: 'Equipamentos' },
  { href: '/self-storage', rotulo: 'Self Storage' },
  { href: '/blog', rotulo: 'Blog' },
  { href: '/sobre', rotulo: 'Empresa' },
  { href: '/contato', rotulo: 'Contato' },
];

export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-carvao border-b border-white/10 text-white shadow-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Felice Locações, página inicial">
          <div className="bg-trator px-3 py-1.5 rounded-lg flex items-center shrink-0 hover:brightness-105 transition shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logo} alt="Felice Locações" className="h-9 w-auto object-contain" />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-bold text-white hover:text-trator transition">
              {l.rotulo}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppLink
            texto="Olá! Vim pelo site da Felice e quero um orçamento."
            rotulo={SITE.whatsappExibicao}
            local="header"
            className="hidden rounded bg-trator px-3 py-2 text-sm font-bold text-carvao hover:brightness-95 sm:inline-block"
          />
          <BotaoCesta />
          <button className="rounded px-2 py-1 text-2xl lg:hidden" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>

      {/* Faixa de categorias (desktop) */}
      <nav className="hidden border-t border-white/10 lg:block" aria-label="Categorias">
        <ul className="mx-auto flex max-w-site gap-6 overflow-x-auto px-4 py-2 text-sm">
          {CATEGORIAS.map((c) => (
            <li key={c.slug}>
              <Link href={`/locacao/${c.slug}`} className="whitespace-nowrap text-white/80 hover:text-trator">
                {c.nome}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {menu && (
        <nav className="border-t border-white/10 px-4 pb-4 lg:hidden" aria-label="Menu móvel">
          <ul className="space-y-1 py-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setMenu(false)} className="block py-2 font-semibold">
                  {l.rotulo}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-white/60">Categorias</p>
          <ul className="grid grid-cols-2 gap-1 py-2 text-sm">
            {CATEGORIAS.map((c) => (
              <li key={c.slug}>
                <Link href={`/locacao/${c.slug}`} onClick={() => setMenu(false)} className="block py-1 text-white/80">
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
