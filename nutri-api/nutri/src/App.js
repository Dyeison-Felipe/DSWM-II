import { useEffect, useState } from "react";
import * as S from './styled-components'

export default function App() {
  const  [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((res) => res.json() ) // garantindo que ta recebendo um json
    .then((json) => setNutri(json));// recebe a resposta no formato json

  }, []);
  return (
    <S.Div>
      <S.Header>
          <h1>React Nutri</h1>
      </S.Header>

      {nutri?.map((item) => {
        return (
          <S.Article key={item.id}>
            <S.Titulo>{item.titulo}</S.Titulo>
            <S.Img src={item.capa} alt={item.titulo}/>
            <p>{item.subtitulo}</p>
            <S.Button>Acessar</S.Button>
          </S.Article>
        )
      })}
    </S.Div>
  );
}
