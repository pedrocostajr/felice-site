import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { SITE } from '@/data/site';

export function Breadcrumb({ itens }: { itens: { nome: string; href: string }[] }) {
  const todos = [{ nome: 'Início', href: '/' }, ...itens];
  return (
    <>
      <nav aria-label="Você está em" className="text-sm text-aco">
        <ol className="flex flex-wrap gap-1">
          {todos.map((i, idx) => (
            <li key={i.href} className="flex gap-1">
              {idx > 0 && <span aria-hidden>›</span>}
              {idx === todos.length - 1 ? (
                <span aria-current="page">{i.nome}</span>
              ) : (
                <Link href={i.href} className="hover:underline">{i.nome}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: todos.map((i, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: i.nome,
            item: `${SITE.url}${i.href}`,
          })),
        }}
      />
    </>
  );
}
