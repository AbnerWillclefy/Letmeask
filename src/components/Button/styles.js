import styled from 'styled-components'

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${props => props.isOutlined ? '#fff' : props.theme.mainColor};
  border: ${props => props.isOutlined ? '1px solid' + props.theme.mainColor : 'none'};
  padding: 0 2rem;
  height: 5rem;
  transition: 0.2s;
  color: ${props => props.isOutlined ? props.theme.mainColor : '#fff'};

  &:not(:disabled):hover {
    filter: brightness(0.7);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;