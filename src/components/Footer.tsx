import Link from 'next/link';
import { CATEGORIAS } from '@/data/categorias';
import { CIDADES } from '@/data/cidades';
import { SITE, UNIDADES } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-carvao text-white/80 border-t border-white/10">
      <div className="mx-auto grid max-w-site gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div>
          <p className="font-bold text-white mb-3">Equipamentos</p>
          <ul className="space-y-1 text-sm">
            {CATEGORIAS.map((c) => (
              <li key={c.slug}>
                <Link href={`/locacao/${c.slug}`} className="hover:text-trator">{c.nome}</Link>
              </li>
            ))}
            <li><Link href="/self-storage" className="hover:text-trator">Self Storage</Link></li>
            <li><Link href="/blog" className="hover:text-trator">Blog</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Onde atendemos</p>
          <ul className="space-y-1 text-sm">
            {CIDADES.map((c) => (
              <li key={c.slug}>
                <Link href={`/cidades/${c.slug}`} className="hover:text-trator">Locação em {c.nome}</Link>
              </li>
            ))}
          </ul>
        </div>
        {UNIDADES.map((u) => (
          <address key={u.id} className="not-italic text-sm">
            <p className="font-bold text-white mb-2">{u.nome}</p>
            <p>{u.endereco}</p>
            <p>{u.bairro}, {u.cidade}/{u.uf}</p>
            <p className="mt-2 text-xs text-white/70">{u.telefone}</p>
            <p className="mt-2"><a href={u.mapa} target="_blank" rel="noopener" className="text-xs underline text-trator hover:brightness-110">Como chegar ↗</a></p>
          </address>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <p>© {new Date().getFullYear()} {SITE.razaoSocial} — CNPJ {SITE.cnpj}</p>
            <span className="text-white/30 hidden sm:inline">|</span>
            <p className="text-white/80">Empresa parceira: <a href={SITE.parceiro.url} target="_blank" rel="noopener" className="text-trator font-bold hover:underline">{SITE.parceiro.nome} ↗</a></p>
          </div>
          <div className="flex gap-4">
            <a href={SITE.redes.instagram} target="_blank" rel="noopener" className="hover:text-trator">Instagram</a>
            <a href={SITE.redes.facebook} target="_blank" rel="noopener" className="hover:text-trator">Facebook</a>
            <Link href="/privacidade" className="hover:text-trator">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
