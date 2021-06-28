import styled from 'styled-components'

export const Page = styled.div`
  header {
    padding: 2.4rem;
    border-bottom: 1px solid #e2e2e2;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
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

  h1{
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  span {
    margin-left: 1.6rem;
    background: #e559f9;
    border-radius: 9999px;
    padding: 0.8rem 1.6rem;
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 1.6rem;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 2px rgba(0,0,0,0.48);
    resize: vertical;
    min-height: 13rem;
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
      color: #835AFD;
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
    color: #29292e;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const QuestionsList = styled.div`
  margin-top: 2.4rem;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  color: ${props => props.liked ? '#835afd' : '#737380'};

  svg path {
    stroke: ${props => props.liked ? '#835afd' : ''}
  }
`;