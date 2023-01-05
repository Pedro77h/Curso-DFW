import React, { Component } from "react";
import * as S from "./styles/App";
import { Navbar } from "./components/Navbar";
import  Content  from "./components/Content";

export class App extends Component {
  render() {
    return (
      <S.Container>
        <Navbar />
        <main>
          <Content />
        </main>
      </S.Container>
    );
  }
}
