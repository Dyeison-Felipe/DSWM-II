import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Film } from "../types/Film";
import { Link } from "react-router-dom";

export default function MaisVotados() {
  const [films, setFilms] = useState<Film[]>([]);
  const apikey = import.meta.env.VITE_API_KEY;

  const getAllMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            language: "pt-BR",
            api_key: apikey,
          },
        }
      );
      console.log(response);
      setFilms(response.data.results);
    } catch (error) {
      console.log("Ocorreu algum erro", error);
    }
  }, [apikey]);

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <div className="grid grid-cols-3 gap-x-36 gap-y-10 pt-8">
      {films.map((film) => (
        <div
          key={film.id}
          className="text-center text-white bg-zinc-900 p-4 rounded-lg w-96 h-128 flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold">{film.original_title}</h2>
          <div className="relative w-full h-120">
            <img
              className="absolute inset-0 w-full h-full object-fit rounded"
              src={`http://images.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.original_title}
            />
          </div>
          <Link
            to={`/film/${film.id}`}
            className="border py-1 px-20 rounded-md bg-yellow-400 hover:bg-yellow-600 hover:text-black"
          >
            Ver Mais
          </Link>
        </div>
      ))}
    </div>
  );
}
