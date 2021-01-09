import styled from 'styled-components';

const Previewer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.previewer.background};
  color: ${({ theme }) => theme.previewer.color};
  border-radius: 6px;
  display: block;
  font-size: 20px;
  padding: 20px !important;
  margin-right: 25px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
              0 0 0 1px rgba(10, 10, 10, 0.02);

  p {
    line-height: 1.5;
  }

  pre {
    background-color: ${({ theme }) => theme.previewer.code};
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
  }

  a {
    color: ${({ theme }) => theme.previewer.links};
  }
`;

export default Previewer;