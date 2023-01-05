import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 15px 2px 10px;

  a {
    text-decoration: none;
  }

  .logoReact {
    height: 4rem;
    width: 4em;
    margin-top: -0.3rem;
    margin-left: 1.7rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.6rem;

  .Contact {
    height: 2rem;
    width: 2rem;
    gap: 4rem;
  }
`;
