import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Film } from "../types/Film";
import axios from "axios";
import { FaRegStar } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

  /*DOCUMENTAÇÃO */
  /*Componente que vai exibir detalhes do filme selecionado */

export default function IdFilms() {
  /*Hook do react para obter o id do filme atraves da url*/
  const { id } = useParams<{ id: string }>();
  /*hook useSatete para armazenar os dados que a api esta retornando*/
  const [film, setFilm] = useState<Film | null>(null);

  /*variavel que busca a chave da api no arquivo .env*/
  const apiKey = import.meta.env.VITE_API_KEY;
  /*variavel que busca a url da api no arquivo .env*/
  const url = import.meta.env.VITE_API_URL_ID

  /*useEfferct utilizado quando chamamos esse componente, para buscar os detalhes do filme*/
  useEffect(() => {
    /*função assincrona para buscar os dados do filme, utilizando axios, passando a url, o id, a linguagem e a chave da api que é necessaria para a api autorizar a chamada dos dados*/
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
        /*armazenando os dados no hook criado anteriormente*/
        setFilm(response.data);

        /*fazendo trataento de erros atraves do console, caso não ache algum filme pelo id passado*/
      } catch (error) {
        console.log("Ocorreu um erro ao buscra os detalhes do filme", error);
      }
    };
    /*chamando a função para buscar os dados do filme*/
    fetchFilm();
    /*como dependencia desse useEfect, ele reenderiza novamente caso mude o id, a chave ou a url*/
  }, [id, apiKey, url]);

  /*se nenhum filme for achado retorna uma div carregando...*/
  if (!film) {
    return <div>Carregando ...</div>;
  }

  /*caso ache o filme retorna so detalhes aqui*/
  return (
    <section className="flex justify-center w-full min-h-screen bg-black text-white p-12">
      <div className="text-center text-white flex flex-col gap-4 w-110 ">

        {/*titulo do filme*/}
        <h2 className="text-2xl font-bold">{film.original_title}</h2>
        <div>
          {/*imagem do filme*/}
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.original_title}
          />
        </div>

        {/*informações de nota, linguagem, data de publicação e resumo*/}
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
