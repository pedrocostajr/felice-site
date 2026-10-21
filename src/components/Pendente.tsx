// Aviso de conteúdo a confirmar. Aparece só em desenvolvimento (npm run dev).
export function Pendente({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === 'production') return null;
  return (
    <p className="mt-6 rounded border border-dashed border-ferrugem bg-orange-50 px-3 py-2 text-sm text-ferrugem">
      Pendente: {children}
    </p>
  );
}
