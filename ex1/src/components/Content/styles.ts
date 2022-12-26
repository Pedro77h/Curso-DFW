import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30rem;
  width: 60rem;
  background-color: rgba(0, 0, 0, 0.3);
  margin-top: -4rem;
  border-radius: 30px;
  padding-top: 2rem;

  button {
    font-weight: 700;
    padding: 30px 50px;
    border-radius: 30px;
    border: 0;
    cursor: pointer;
    background-color: #270730;
    color: #b8b8d4;

    &:hover{
      background-color: #b404db;
      color: white;
      transition: 0.5s;
    }

  }
`;

export const Header = styled.div`
  box-sizing: border-box;
  margin-top: -4rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  color: #fff;
`;

export const Description = styled.div`
  font-size: 1.2rem;
  color: #b8b8d4;
`;

export const Fields = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1.2rem;

  .plusIcon {
    width: 8rem;
    height: 8rem;
  }

  input {
    width: 10rem;
    height: 6rem;
    border-radius: 15px;
    border: 2px solid #068047;
    outline: 0;
    font-size: 3rem;
    background-color: #270730;
    color: #fff;
    padding-left: 2.5rem;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

export const Result = styled.div<{ isSum: boolean }>`
display: ${props => props.isSum ? 'flex' : 'none' };
background-color: #770999;
color: white;
font-size: 3rem;
margin-bottom: 1.5rem;
padding: 10px 20px;
border-radius: 50%;
`;
