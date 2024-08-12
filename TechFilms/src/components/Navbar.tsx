import "../index.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {

  const [option, setOption] = useState<string>('')
  console.log("🚀 ~ Navbar ~ option:", option)

  const handleLinkClick = (value:string) => {
    setOption(value)
  }
  

  return (
    <nav className="flex bg-zinc-900 text-white w-auto justify-around items-center h-24">
      <div className="flex items-center">
        <MdLocalMovies className=" text-6xl" />
        <p className="text-yellow-300 font-bold text-4xl">TechFilm</p>
      </div>

      <div>
        <ul className="flex gap-4 list-none text-center  font-bold">
          <Link
            to="/top_voted"
            className="bg-slate-950 hover:bg-white text-white hover:text-black duration-500 w-36 border border-solid border-zinc-50 px-3 py-1 rounded-lg"
            onClick={() => handleLinkClick('top_voted')}
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

      <div>
        <ul className="flex gap-4 list-none text-center  font-bold">
          <Link
            to=""
            className="bg-slate-950 hover:bg-white text-white hover:text-black duration-500 w-36 border border-solid border-zinc-50 px-3 py-1 rounded-lg"
          >
            Login
          </Link>

          <Link
            to=""
            className="bg-slate-950 hover:bg-white text-white hover:text-black  duration-300 w-36 border border-solid border-zinc-50 px-3 py-1 rounded-lg"
          >
            Cadastro
          </Link>
        </ul>
      </div>
    </nav>
  );
}
