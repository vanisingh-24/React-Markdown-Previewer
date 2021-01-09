import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  padding: 20px;
  border: none;
  font-size: 16px
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => (props.theme === 'dark' ? '#fff' : '#222')};
  transition: background-color 0.3s ease;
  position: absolute;
  top: 5px;
  right: 15px; 

 svg {
  display: block;
}
`;

const Toggle = ({onClick, theme, children}) => {
    return (
        <Button onClick={onClick} theme={theme}>
            {children}
        </Button>
    );
}

export default Toggle;