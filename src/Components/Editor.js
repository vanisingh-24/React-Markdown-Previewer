import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  background-color: ${({ theme }) => theme.markdown.background};
  color: ${({ theme }) => theme.markdown.color};
  line-height: 1.5;
  min-height: 120vh;
  &:focus {
    box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme.markdown.border};
  }
  padding: 20px;
  resize: vertical !important;
  display: block;
  width: 90%;
  border-color: #dbdbdb;
  border-radius: 4px;
  &:hover{
    border-color: #b5b5b5 !important;
  }
`;

const Editor = ({value, onChange}) => {
    return <Textarea value={value} onChange={onChange} />
}

export default Editor;