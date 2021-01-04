import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.color};
  border: 3px solid white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50% !important;
  }
`;

function ThemeColor({setMode}) {
    const setTheme = (e) => {
        setMode(e.target.name);
    };

    return(
        <div className="has-text-centered">
      <Button
        className="button"
        name="light"
        onClick={setTheme}
        color="#E2E8F0"
      ></Button>
      <Button
        className="button"
        name="dark"
        onClick={setTheme}
        color="#1A202C"
      ></Button>
      <Button
        className="button"
        color="#68D391"
        name="quiet"
        onClick={setTheme}
      ></Button>
      <Button
        className="button"
        color="#4FD1C5"
        name="ocean"
        onClick={setTheme}
      ></Button>
      <Button
        className="button"
        color="#FC8181"
        name="marvel"
        onClick={setTheme}
      ></Button>
    </div>
    );
}

export default ThemeColor;