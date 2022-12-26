import React, { useState } from "react";
import * as S from "./styles";
import { BsPlus } from "react-icons/bs";



export const Content = () => {
  const [firstNumber, setFirstNumber] =  useState('');
  const [secondNumber, setSecondNumber] = useState("");
  const [isSum, setIsSum] = useState(false);
  const [sum, setSum] = useState(0);


  const handleSum = () => {
    if (firstNumber === "" || secondNumber === "") alert("Digite Algo nso Campos");
      
    else setIsSum(true);
    setSum(parseInt(firstNumber) + parseInt(secondNumber))
  };

  const handleRetry = () => {
    setIsSum(false)
    setFirstNumber('')
    setSecondNumber('')
  };

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
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <BsPlus className="plusIcon" fill="#c2b9c4" />
        <input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </S.Fields>
      <S.Result isSum={isSum}>{sum}</S.Result>
      {
        isSum === false ?
        <button onClick={handleSum}>SOMAR</button>
          :
          <button onClick={handleRetry}>Repetir</button>
      }
    </S.Container>
  );
};
