import React, { useState } from "react";
import * as S from "./styles";
import { BsPlus } from "react-icons/bs";

type Props = {};

type State = {
  firstNumber: string;
  secondNumber: string;
  isSum: boolean;
  sum: number;
};

export default class Content extends React.Component<Props, State> {
  constructor(props: { firstNumber: number }) {
    super(props);

    this.state = {
      firstNumber: "",
      secondNumber: "",
      isSum: false,
      sum: 0,
    };
  }

  private handleSum() {
    if (this.state.firstNumber === "" || this.state.secondNumber === "")
      alert("Digite Algo nso Campos");
    else {
      this.setState({
        isSum: true,
      });
      this.setState({
        sum:
          parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber),
      });
    }
  }

  private handleRetry() {
    this.setState({
      firstNumber: "",
      secondNumber: "",
      isSum: false,
      sum: 0,
    })
  }

  render() {
    return (
      <S.Container>
        <S.Header>
          <S.Title>Melhor Calculadora de uma operação só</S.Title>
          <S.Description>
            Digite dois numeros abaixo para a realização da soma
          </S.Description>
        </S.Header>
        <S.Fields>
          <input
            type="number"
            value={this.state.firstNumber}
            onChange={(e) => this.setState({
              firstNumber: e.target.value
            })}
          />
          <BsPlus className="plusIcon" fill="#c2b9c4" />
          <input
            type="number"
            value={this.state.secondNumber}
            onChange={(e) => this.setState({
              secondNumber: e.target.value
            })}
          />
        </S.Fields>
        <S.Result isSum={this.state.isSum}>{this.state.sum}</S.Result>
        {this.state.isSum === false ? (
          <button onClick={this.handleSum}>SOMAR</button>
        ) : (
          <button onClick={this.handleRetry}>Repetir</button>
        )}
      </S.Container>
    );
  }
}
