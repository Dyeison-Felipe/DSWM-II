import { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Film } from "./types/Film"; // Importa o tipo `Film` para tipar o estado `films`

function App() {

  // useState é usado para criar um estado local para armazenar a lista de filmes obtida da API.
  // O estado `films` será inicializado como um array vazio de objetos do tipo `Film`.
  const [films, setFilms] = useState<Film[]>([]);

  // Aqui, a chave da API é armazenada em uma constante. Isso poderia ser substituído por uma variável de ambiente
  // usando `import.meta.env.VITE_API_KEY` em um ambiente de produção.
  const apikey = "23f497df7ee2bb17f2de82c9165f8c98";

  // Verifica se a API key está correta, apenas para debug.
  console.log("API Key:", apikey);

  // A função getAllMovies é definida para fazer uma requisição à API e obter uma lista de filmes populares.
  // useCallback é usado para memorizar a função para que ela não seja recriada em cada renderização,
  // a menos que o valor de `apikey` mude.
  const getAllMovies = useCallback(async () => {
    try {
      // Faz uma requisição GET à API do TheMovieDB para obter filmes populares em português.
      const response = await axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          language: 'pt-BR',
          api_key: apikey,
        }
      });
      // Atualiza o estado `films` com os dados recebidos da API, acessando a lista de filmes.
      setFilms(response.data.results);
    } catch (error) {
      // Em caso de erro na requisição, o erro é capturado e exibido no console.
      console.log("Ocorreu algum erro", error);
    }
  }, [apikey]); // Dependência de `apikey`, garantindo que a função seja recriada apenas se `apikey` mudar.

  // useEffect é usado para executar o efeito colateral de buscar filmes quando o componente é montado.
  // Aqui, ele chama `getAllMovies` quando o componente é montado e sempre que `getAllMovies` mudar.
  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]); // A dependência é `getAllMovies` para garantir que o efeito seja executado quando necessário.

  return (
    <div>
      {/* Renderiza a lista de filmes no JSX, mapeando sobre o estado `films`. 
      Para cada filme, exibe o nome, imagem do pôster e uma visão geral do filme. */}
      {films.map(film => (
        <div key={film.id}>
          <h2>{film.name}</h2>
          <img src={`http://images.tmdb.org/t/p/w500${film.poster_path}`} alt="" />
          <p>{film.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
