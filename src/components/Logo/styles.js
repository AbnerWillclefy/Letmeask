import styled from 'styled-components'

export const LogoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    max-height: 6.9rem;
  }

  .letter {
    fill: ${props => props.theme.textColor};
  }
`;