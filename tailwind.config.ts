import type { Config } from 'tailwindcss';

// Tokens de marca. Ajuste aqui quando finalizar o visual.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carvao: '#1F1E1C',      // preto fosco (fundo de faixas e rodapé)
        trator: '#F5B400',      // amarelo trator (cor de ação)
        ferrugem: '#D9480F',    // laranja industrial (alertas, destaques pontuais)
        aco: '#5B6168',         // cinza aço (texto secundário)
        concreto: '#E4E6E8',    // cinza concreto (fundos alternados)
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
};
export default config;
