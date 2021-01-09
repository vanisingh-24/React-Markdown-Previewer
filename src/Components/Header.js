import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  font-family: 'Poppins', sans-serif;
  margin-bottom: 40px;
  margin-top: 30px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  margin-top: 0;
  font-weight: 700 !important;
  font-size: 3rem !important;
  color: ${({ theme }) => theme.header.title};
`;

const Header = () => {
    return(
        <Wrapper>
            <Title>React Markdown Previewer</Title>
        </Wrapper>
    );
};

export default Header;