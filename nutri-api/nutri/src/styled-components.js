import styled from "styled-components";

export const Div = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 1rem;
  background-color: #1F1311;
`

export const Header = styled.header`
  border:0.1rem solid black;
  width: 100%;
  text-align: center;
  background-color: #02F2DD;
`;

export const Article = styled.article`
  border:0.1rem solid black;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width: 70rem;
  padding: 1rem;
  gap: 1rem;
  background-color: #ccc;
  border-radius: 0.5rem;

  p{
    width: 40rem;
  }
`

export const Img = styled.img`
  width: 50rem;
  height: 30rem;
`

export const Titulo = styled.strong`
  font-size: 1.4rem;
`

export const Button = styled.button`
  width: 20rem;
  height: 3rem;
  background-color: #02EEF2;
  border-radius: 0.5rem;

  &:hover{
    background-color: #02A2F5 ;
  }
`