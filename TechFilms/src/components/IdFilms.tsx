import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Film } from "../types/Film";
import axios from "axios";
import { FaRegStar } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

export default function IdFilms() {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<Film | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = import.meta.env.VITE_API_URL_ID

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(
          `${url}${id}`,
          {
            params: {
              language: "pt-BR",
              api_key: apiKey,
            },
          }
        );
        console.log(response);
        setFilm(response.data);
      } catch (error) {
        console.log("Ocorreu um erro ao buscra os detalhes do filme", error);
      }
    };
    fetchFilm();
  }, [id, apiKey, url]);

  if (!film) {
    return <div>Carregando ...</div>;
  }

  return (
    <section className="flex justify-center w-full min-h-screen bg-black text-white p-12">
      <div className="text-center text-white flex flex-col gap-4 w-110 ">
        <h2 className="text-2xl font-bold">{film.original_title}</h2>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.original_title}
          />
        </div>

        <div className=" flex justify-around">
          <p className="flex items-center gap-2">
            <FaRegStar className="text-yellow-300" />
            {film.vote_average.toFixed(1)}
          </p>

          <p className="flex items-center gap-2">
            <IoLanguageSharp className="text-yellow-300" />
            {film.original_language}
          </p>

          <p className="flex items-center gap-2">
            <CiCalendarDate className="text-yellow-300" />
            {film.release_date}
          </p>
        </div>

        <div>
          <p>{film.overview}</p>
        </div>

        <Link
            to={`/film/${film.id}`}
            className="border py-1 px-20 rounded-md bg-yellow-400 hover:bg-yellow-600 hover:text-black"
          >
            Assistir
          </Link>
      </div>
    </section>
  );
}
