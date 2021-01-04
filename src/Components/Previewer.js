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