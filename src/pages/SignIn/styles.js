import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  background-color: ${(props) => props.theme.mainColor};
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 6;

  padding: 12rem 8rem;

  img {
    max-width: 32.8rem;
  }

  strong {
    color: #fff;
    font-size: 3.6rem;
    margin-top: 1.6rem;
    line-height: 4.2rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
  }

  p {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-top: 1.6rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  @media (max-width: 425px) {
    flex: 1;
    min-height: 682px;
    align-items: center;
    
    p, strong {
      text-align: center;
    }
  }
`;

export const Main = styled.main`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};

  padding: 0 3.2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      margin-bottom: 5.6rem;
    }

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2.4rem;
      color: ${props => props.theme.textColor};
      margin-bottom: 2.4rem;
    }

    p {
      color: #737380;
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      margin-top: 1.6rem;

      a {
        color: ${props => props.theme.secondaryColor};
      }
    }
  }

  @media(max-width: 425px) {
    flex: 1;
    min-height: 682px;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background-color: #EA4335;
  border: none;
  width: 32rem;
  height: 5rem;
  transition: 0.2s;
  span {
    color: #fff;
  }
`;

export const Separator = styled.span`
  display: flex;
  align-items: center;
  font: 400 'Roboto', sans-serif;
  font-size: 1.4rem;
  color: #A8A8B3;
  margin: 3.2rem 0;

  &:before {
    content: '';
    flex: 1;
    height: 1px;
    margin-right: 1.6rem;
    background: #A8A8B3;
  }

  &:after {
    content: '';
    flex: 1;
    height: 1px;
    margin-left: 1.6rem;
    background: #A8A8B3;
  } 
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
      height: 5rem;
      border-radius: 8px;
      padding: 0 1.6rem;
      background: #fff;
      border: 1px solid #A8A8B3;
      color: #29292E;
    }
`;