/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'www.felicelocacoes.com.br' }],
  },
  // URLs antigas do WordPress que precisam continuar funcionando
  async redirects() {
    return [
      { source: '/self-storage/', destination: '/self-storage', permanent: true },
    ];
  },
};
export default nextConfig;
