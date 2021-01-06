import React from 'react';
import marked from 'marked';
const renderer = new marked.Renderer();

const Previewer = (props) => {
  return (
    <div className="container">
      <div 
        id="previewer"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, {renderer: renderer})
        }}
        className="box"
      />
    </div>
  );
};

export default Previewer;
// import React from 'react';
// import styled from 'styled-components';

// const Previewer = styled.div`
//   font-family: 'IBM Plex Sans', sans-serif;
//   background-color: ${({ theme }) => theme.previewer.background};
//   color: ${({ theme }) => theme.previewer.color};
//   border-radius: 4px;
//   padding: 15px;

//   p {
//     line-height: 1.5;
//   }

//   pre {
//     background-color: ${({ theme }) => theme.previewer.code};
//     padding: 10px;
//     border-radius: 4px;
//     font-size: 15px;
//   }

//   a {
//     color: ${({ theme }) => theme.previewer.links};
//   }
// `;

// export default Previewer;