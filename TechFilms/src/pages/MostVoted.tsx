import MaisVotados from "../components/TopRatedMovies";
export default function Voted() {
  return (
    <section className="flex justify-center flex-col gap-8 w-full bg-black text-white items-center pt-4 pb-12">
      <h1 className="text-6xl font-bold">Mais votados</h1>
      <MaisVotados/>
    </section>
  );
}
