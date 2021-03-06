import styled from 'styled-components'


export const Questions = styled.div`
  background: ${props => props.isHighlighted ? props.theme.highlighted : props.theme.borderColor};
  background: ${props => props.isAnswered ? props.theme.answered : props.theme.borderColor};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.2);
  padding: 2.4rem;
  margin: 0 1rem;
  border: ${props => props.isHighlighted ? '1px solid' : 'none'};
  border-color: ${props => props.theme.mainColor};

  p {
    color: ${props => props.theme.textColor};
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    word-wrap: break-word;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.4rem;

    > div {
      display: flex;
      gap: 0.8rem;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }

  & + & {
    margin-top: 0.8rem;
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
    color: ${props => props.isHighlighted ? props.theme.textColor : '#737380'};
    font-size: 1.4rem;
  }
`;