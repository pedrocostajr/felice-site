/** @type {import('next').NextConfig} */
const nextConfig = {
  // URLs antigas do WordPress que precisam continuar funcionando sem erro 404
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },
      { source: '/pagina-exemplo', destination: '/', permanent: true },
      { source: '/pagina-exemplo/', destination: '/', permanent: true },
      { source: '/em-construcao', destination: '/', permanent: true },
      { source: '/em-construcao/', destination: '/', permanent: true },

      // URLs de categorias comuns (caso campanhas antigas apontem direto)
      { source: '/andaimes', destination: '/locacao/andaimes', permanent: true },
      { source: '/andaimes/', destination: '/locacao/andaimes', permanent: true },
      { source: '/plataformas', destination: '/locacao/plataformas-elevatorias', permanent: true },
      { source: '/plataformas/', destination: '/locacao/plataformas-elevatorias', permanent: true },
      { source: '/plataformas-elevatorias', destination: '/locacao/plataformas-elevatorias', permanent: true },
      { source: '/plataformas-elevatorias/', destination: '/locacao/plataformas-elevatorias', permanent: true },
      { source: '/geradores', destination: '/locacao/geradores', permanent: true },
      { source: '/geradores/', destination: '/locacao/geradores', permanent: true },
      { source: '/betoneiras', destination: '/locacao/betoneiras', permanent: true },
      { source: '/betoneiras/', destination: '/locacao/betoneiras', permanent: true },
      { source: '/bombas', destination: '/locacao/bombas', permanent: true },
      { source: '/bombas/', destination: '/locacao/bombas', permanent: true },
      { source: '/rompedores', destination: '/locacao/rompedores', permanent: true },
      { source: '/rompedores/', destination: '/locacao/rompedores', permanent: true },
      { source: '/compactadores', destination: '/locacao/compactadores', permanent: true },
      { source: '/compactadores/', destination: '/locacao/compactadores', permanent: true },
      { source: '/containers', destination: '/locacao/containers', permanent: true },
      { source: '/containers/', destination: '/locacao/containers', permanent: true },
    ];
  },

  // Cabeçalhos HTTP de segurança recomendados para evitar falsos positivos do Google Ads/Safe Browsing
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
