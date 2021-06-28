import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Aside = styled.aside`
  background-color: #835AFD;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 6;
  height: 100vh;

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
`;

export const Main = styled.main`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 3.2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2.4rem;
      color: #29292E;
      margin-bottom: 2.4rem;
    }

    > img{
      max-height: 6.9rem;
      margin-bottom: 5.6rem;
    }

    p {
      color: #737380;
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      margin-top: 1.6rem;

      a {
        color: #E559F9;
      }
    }
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
