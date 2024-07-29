import React from "react";
import * as S from "../styles/styles";

const Nav = () => {
  return (
    <S.NavRoutes>
      <S.DivNav>
        <img
          src={`${process.env.PUBLIC_URL}/LogoMusic2.svg`}
          alt="Logo Music"
        />
      </S.DivNav>

      <S.DivNav>
        <S.UlRoutes>
          <li>
            <S.LinkRoutes to="/">Home</S.LinkRoutes>
          </li>

          <li>
            <S.LinkRoutes to="/artista">Playlist</S.LinkRoutes>
          </li>
        </S.UlRoutes>
      </S.DivNav>

      <S.DivNav>
        <S.UlRoutes>
            <li>
              <S.LinkRoutes to="/">Login</S.LinkRoutes>
            </li>

            <li>
              <S.LinkRoutes to="/artista">Cadastro</S.LinkRoutes>
            </li>
          </S.UlRoutes>
      </S.DivNav>
    </S.NavRoutes>
  );
};

export default Nav;
