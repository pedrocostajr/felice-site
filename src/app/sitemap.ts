import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';
import { CATEGORIAS } from '@/data/categorias';
import { EQUIPAMENTOS } from '@/data/equipamentos';
import { CIDADES } from '@/data/cidades';
import { ARTIGOS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${SITE.url}${p}`;
  return [
    { url: u('/'), priority: 1 },
    { url: u('/locacao'), priority: 0.9 },
    ...CATEGORIAS.map((c) => ({ url: u(`/locacao/${c.slug}`), priority: 0.9 })),
    ...EQUIPAMENTOS.map((e) => ({ url: u(`/locacao/${e.categoria}/${e.slug}`), priority: 0.7 })),
    ...CIDADES.map((c) => ({ url: u(`/cidades/${c.slug}`), priority: 0.7 })),
    { url: u('/blog'), priority: 0.6 },
    ...ARTIGOS.map((a) => ({ url: u(`/blog/${a.slug}`), lastModified: a.data, priority: 0.6 })),
    { url: u('/perfuracao'), priority: 0.7 },
    { url: u('/self-storage'), priority: 0.7 },
    { url: u('/sobre'), priority: 0.4 },
    { url: u('/contato'), priority: 0.5 },
  ];
}
