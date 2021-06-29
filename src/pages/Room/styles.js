import styled from 'styled-components'

export const Page = styled.div`
  /* display: flex;
  flex-direction: column; */

  header {
    padding: 2.4rem;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.borderColor};
  }

  main {
    width: 60%;
    margin: 0 auto;
  }

  @media(max-width: 425px) {
    header {
      > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      max-width: 425px;
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
    text-align: center;
    word-wrap: break-word;
  }

  span {
    background: ${props => props.theme.secondaryColor};
    border-radius: 9999px;
    padding: 0.8rem 1.6rem;
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    margin: 3.2rem 0;

    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    h1 {
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 1.6rem;
    border-radius: 8px;
    background: ${props => props.theme.borderColor};
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    resize: vertical;
    min-height: 13rem;
    color: ${props => props.theme.textColor};
  }

  @media (max-width: 425px) {
  width: 90%;
  margin: auto;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;

  span {
    font-size: 1.4rem;
    color: #737380;
    font-weight: 500;

    button {
      background: none;
      border: none;
      color: ${props => props.theme.mainColor};
      text-decoration: underline;
      font-size: 1.4rem;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }

  span {
    font-family: 'Roboto', sans-serif;
    margin-left: 0.8rem;
    color: ${props => props.theme.textColor};
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const QuestionsList = styled.div`
  margin: 2.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  span {
    color: ${props => props.theme.textColor};
  }

  svg {
    fill: ${props => props.liked ? '#835afd' : ''};

    path {
      stroke: ${props => props.liked ? props.theme.mainColor : ''};
    } 
  }
`;

export const Illustration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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