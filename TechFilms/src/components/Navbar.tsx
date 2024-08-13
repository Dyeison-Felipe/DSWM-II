import "../index.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

/*componente de navegação do site*/
export default function Navbar() {

  /*retora a logo, duas opções de estilos de filmes para assistir e um inpout de pesquisar, todos feitos com tailwind e com suas respectivas responsividades*/
  return (
    <nav className="flex bg-zinc-900 text-white w-auto justify-around items-center h-24 max-[600px]:flex-col max-[600px]:h-96">
      <Link to='/'>
        <div className="flex items-center">
          <MdLocalMovies className=" text-6xl" />
          <p className="text-yellow-300 font-bold text-4xl">TechFilm</p>
        </div>
      </Link>

      <div>
        <ul className="flex gap-4 list-none text-center font-bold max-[960px]:flex-col">
          <Link
            to="/top_voted"
            className="bg-slate-950 hover:bg-white text-white hover:text-black duration-500 w-36 border border-solid border-zinc-50 px-3 py-1 rounded-lg"
          >
            Mais votados
          </Link>

          <Link
            to="/"
            className="bg-slate-950 hover:bg-white text-white hover:text-black  duration-300 w-36 border border-solid border-zinc-50 px-3 py-1 rounded-lg"

          >
            Populares
          </Link>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <input
          className="focus:outline-none text-black rounded-lg pl-4 py-1"
          type="text"
          placeholder="Pesquisar"
        />
        <FaSearch />
      </div>
    </nav>
  );
}
