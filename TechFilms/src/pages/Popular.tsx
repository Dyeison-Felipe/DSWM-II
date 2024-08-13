import Films from "../components/PopularMovies";

/*componente que vai reenderizar conforme a aopção selecionada na navbar*/
export default function Home() {
  return (
    <section className="flex justify-center flex-col gap-8 w-full bg-black text-white items-center pt-4 pb-12">
      <h1 className="text-6xl font-bold max-[490px]:text-3xl">Filmes Populares</h1>

      {/*exibindo componente de listar filmes*/}
      <Films/>
    </section>
  );
}
