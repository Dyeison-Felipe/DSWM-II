import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Film } from "../types/Film";
import { Link } from "react-router-dom";

/*componente que vai listar os filmes de determinada url*/
export default function Films() {
  /*hook useState para armazrnar os filmes retornados da api*/
  const [films, setFilms] = useState<Film[]>([]);

  /*variavel que busca a chave da api no arquivo .env*/
  const apiKey = import.meta.env.VITE_API_KEY;

  /*variavel que busca a url da api no arquivo .env*/
  const url = import.meta.env.VITE_API_POPULAR;

  /*função para buscar os filmes da api e memorizar utilizando useCalback*/
  
  const getAllMovies = useCallback(async () => {
    try {
      /*fazendo requisição a api passando a url, a linguagem e chave da api*/
      const response = await axios.get(`${url}`, {
        params: {
          language: "pt-BR",
          api_key: apiKey,
        },
      });
      /*adicionando o retorno dos dados da api no useState*/
      setFilms(response.data.results);

      /*fazendo tartamento de erros caso não ache nenhum dado*/
    } catch (error) {
      console.log("Ocorreu algum erro", error);
    }
  }, [apiKey, url]);
  /*chamando o useEffect para montar os dados com a função de buscar os dados*/
  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  /*retornando a os filmes listados pela api*/
  return (
    <div className="grid grid-cols-3 gap-x-36 gap-y-10 pt-8 max-[1500px]:grid-cols-2 max-[960px]:grid-cols-1">
      {/*fazenod um map para deestruturar os dados e exibir empartes especificas do codigo*/}
      
      {films.map((film) => (
        /*passando o id para buscar dada detalhe daquele id do filme*/
        <div
          key={film.id}
          className="text-center text-white bg-zinc-900 p-4 rounded-lg w-96 h-128 flex flex-col gap-4
          max-[420px]:h-96  max-[420px]:w-60"
        >
          {/*exibindo titulo do filme*/}
          <h2 className="text-2xl font-bold">{film.original_title}</h2>
          <div className="relative w-full h-120">
            {/*exibindo imagem do filme*/}
            <img
              className="absolute inset-0 w-full h-full object-fit rounded"
              src={`http://images.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.original_title}
            />
          </div>
          {/*buscando o id do filme pela url e passando para o componente de exibir filme por id*/}
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
