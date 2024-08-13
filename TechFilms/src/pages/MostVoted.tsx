import MaisVotados from "../components/TopRatedMovies";

/*componente que vai reenderizar conforme a aopção selecionada na navbar*/
export default function Voted() {
  return (
    <section className="flex justify-center flex-col gap-8 w-full bg-black text-white items-center pt-4 pb-12">
      <h1 className="text-6xl font-bold max-[490px]:text-3xl">Mais votados</h1>

      {/*exibindo componente de listar filmes*/}
      <MaisVotados/>
    </section>
  );
}
