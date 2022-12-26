import React from "react";
import * as S from "./styles";
import { FaReact as LogoReact, FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <S.Container>
      <LogoReact className="logoReact" fill="#61DAFB" />
      <S.Contact>
        <a href="https://github.com/Pedro77h" target='_blank'>
          <FaGithub className="Contact" fill="white" />
        </a>
        <a href="https://www.linkedin.com/in/pedro77h/" target='_blank'>
          <FaLinkedin className="Contact" fill="white" />
        </a>
      </S.Contact>
    </S.Container>
  );
};
