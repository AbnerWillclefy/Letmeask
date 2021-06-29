import styled from 'styled-components'

export const Page = styled.div`

  header {
    padding: 2.4rem;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.borderColor};
  }

  main {
    width: 60%;
    margin: 0 auto;
  }

  @media (max-width: 425px) {
    header {
      div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
    
    main {
      width: 80%;
    }
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 1.6rem;

    button {
      height: 4rem;
      background-color: ${props => props.theme.background};
      border-color: ${props => props.theme.mainColor};
      color: ${props => props.theme.textColor};
    }
  }
`;

export const Title = styled.div`
  margin: 3.2rem 0 2.4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1{
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${props => props.theme.textColor};
    width: 100%;
    word-wrap: break-word;
    text-align: center;
  }

  span {
    margin-left: 1.6rem;
    background: ${props => props.theme.secondaryColor};
    border-radius: 9999px;
    padding: 0.8rem 1.6rem;
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const QuestionsList = styled.div`
  margin-top: 2.4rem;
`;

export const DeleteButton = styled.button`
  display: flex;
`;

export const CheckButton = styled.button`
  display: flex;
`;

export const AnswerButton = styled.button`
  display: flex;
`;

export const Illustration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 15rem;

  h2 {
    margin-top: 2rem;
    color: ${props => props.theme.textColor};
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
  }

  p {
    color: #737380;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`;