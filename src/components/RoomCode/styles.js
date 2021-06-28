import styled from 'styled-components'

export const Code = styled.button`
  height: 4rem;
  border-radius: 8px;
  overflow: hidden;

  background: #fff;
  border: 1px solid #835AFD;
  cursor: pointer;

  display: flex;

  div {
    background: #835AFD;
    padding: 0 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1.6rem 0 1.2rem;
    width: 24rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;