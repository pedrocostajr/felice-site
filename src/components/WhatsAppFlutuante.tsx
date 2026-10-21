'use client';

import { linkWhatsApp } from '@/lib/whatsapp';
import { track } from '@/lib/tracking';

export function WhatsAppFlutuante() {
  return (
    <a
      href={linkWhatsApp('Olá! Vim pelo site da Felice e quero um orçamento.')}
      target="_blank"
      rel="noopener"
      onClick={() => track('clique_whatsapp', { local: 'flutuante' })}
      className="fixed bottom-4 right-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-lg"
      aria-label="Conversar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden>
        <path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.2.6 4.4 1.7 6.3L3 29l7.3-1.9c1.8 1 3.8 1.5 5.8 1.5 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.3c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-4.3 1.1 1.2-4.2-.3-.4a10.4 10.4 0 1 1 9 5.1zm5.7-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.7-2.2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 .8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  );
}
