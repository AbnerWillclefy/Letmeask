import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: ${props => props.theme.background};

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  svg {
    height: 4.8rem;
    width: 4.8rem;

    path {
      stroke: #E73F5D;
    }
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: ${props => props.theme.textColor};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #737380;
  }

  div {
    display: flex;
    gap: 2rem;
  }

  button {
    padding: 1.5rem 3.2rem;
    border: none;
    background-color: ${props => props.theme.answered};
    border-radius: 8px;
    color: ${props => props.theme.textColor};
  }

  .red {
    background-color: #E73F5D;
    color: #FFF;
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 2rem;
    }

    p {
      text-align: center;
    }

    div {
      flex-direction: column;
    }
  }
`;