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

  > div {
    display: flex;
    gap: 1.6rem;

    button {
      height: 4rem;
    }
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