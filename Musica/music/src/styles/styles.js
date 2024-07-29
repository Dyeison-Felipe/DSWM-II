import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivRoutes = styled.div`
  background-color: #0A131E;
  width: 100%;
  height: 100vh;
`;

export const NavRoutes = styled.nav`
  border:1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: rem;
  background-color: #BC1823;
`

export const UlRoutes = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`

export const LinkRoutes = styled(Link)`
  text-decoration: none;
  border:0.1rem solid black;
  border-radius: 0.5rem;
  padding: 0.3rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: #0E65E8;
  text-shadow: 
    -0.07rem -0.07rem 0 #000,
     0.07rem -0.07rem 0 #000,
    -0.07rem  0.07rem 0 #000,
     0.07rem  0.07rem 0 #000;
  text-transform: uppercase;
`

export const DivNav = styled.div`
  padding: 0.5rem;
  img{
    width: 8rem;
  }
`
