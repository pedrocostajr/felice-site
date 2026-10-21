import Link from 'next/link';

export default function NaoEncontrado() {
  return (
    <div className="mx-auto max-w-site px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold">Página não encontrada</h1>
      <p className="mt-3 text-aco">O endereço pode ter mudado. Veja nossos equipamentos ou fale com a equipe.</p>
      <Link href="/locacao" className="mt-6 inline-block rounded bg-trator px-6 py-3 font-bold">Ver equipamentos</Link>
    </div>
  );
}
