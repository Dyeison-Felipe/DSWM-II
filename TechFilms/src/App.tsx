import { useState } from "react";
import "./App.css";
import axios from "axios";


function App() {

  const [movies, setMovies] = useState([]);
  const apikey: string;

  const getAllMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/tv/popular',{
        params: {
          language: 'pt-BR',
          apikey: apikey
        }
      })
    } catch (error) {
      console.log("Ocorreu algum erro", error)
    } 
  }


  return (
    <div>

    </div>
  );
}

export default App;
