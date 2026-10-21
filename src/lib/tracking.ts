// Eventos enviados ao dataLayer do Google Tag Manager.
// No GTM, crie as tags de conversão do Google Ads, GA4 e Meta Pixel a partir destes eventos.
type Evento =
  | 'clique_whatsapp'
  | 'envio_cesta'
  | 'adicionar_cesta'
  | 'uso_simulador'
  | 'clique_telefone';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(evento: Evento, dados: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: evento, ...dados });
}

// Guarda gclid e UTMs da primeira visita para identificar a campanha no WhatsApp.
export function capturarOrigem() {
  if (typeof window === 'undefined') return;
  const p = new URLSearchParams(window.location.search);
  const origem = {
    gclid: p.get('gclid'),
    source: p.get('utm_source'),
    campaign: p.get('utm_campaign'),
  };
  if (origem.gclid || origem.source) {
    try {
      sessionStorage.setItem('felice_origem', JSON.stringify(origem));
    } catch {}
  }
}

export function lerOrigem(): string | undefined {
  try {
    const o = JSON.parse(sessionStorage.getItem('felice_origem') || 'null');
    if (!o) return undefined;
    if (o.gclid) return `gads-${String(o.gclid).slice(-6)}`;
    return [o.source, o.campaign].filter(Boolean).join('/');
  } catch {
    return undefined;
  }
}
