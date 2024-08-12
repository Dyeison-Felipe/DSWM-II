import Films from "../components/Films";

export default function Home() {
  return (
    <section className="flex justify-center flex-col gap-8 w-full bg-black text-white items-center pt-4 pb-12">
      <h1 className="text-6xl font-bold">Filmes Populares</h1>
      <Films/>
    </section>
  );
}
