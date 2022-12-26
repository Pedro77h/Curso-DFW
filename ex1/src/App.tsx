import React from "react";
import * as S from "./styles/App";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

export const App = () => {
  return (
    <S.Container>
      <Navbar />
      <main>
        <Content />
      </main>
    </S.Container>
  );
};
