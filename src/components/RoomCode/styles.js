import styled from 'styled-components'

export const Code = styled.button`
  height: 4rem;
  border-radius: 8px;
  overflow: hidden;

  background: ${props => props.theme.background};
  border: 1px solid;
  border-color: ${props => props.theme.mainColor};
  cursor: pointer;

  display: flex;
  align-items: center;
  padding: 0;

  div {
    background: ${props => props.theme.mainColor};
    padding: 0 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid;
    border-color: ${props => props.theme.mainColor};
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1.6rem 0 1.2rem;
    width: 24rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${props => props.theme.textColor};
  }
`;