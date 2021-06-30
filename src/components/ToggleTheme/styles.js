import styled from "styled-components";

export const Icon = styled.button`
background: none;
border: none;
user-select: none;

position: fixed;
top: 10px;
right: 10px;

display: flex;
align-items: center;
justify-content: center;
`;

export const Img = styled.img` 
  filter: ${props => props.icon === 'sunIcon' ? 'invert(100%)' : 'invert(0%)'};
  user-select: none;

  &:active {
    transform: rotate(180deg);
  }
`;