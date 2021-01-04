import React from 'react';

const Editor = (props) => {
  return (
    <div className="container">
      <textarea
        id="editor"
        value={props.markdown}
        onChange={props.onChange}
        type="text"
        className="textarea"
      />
    </div>
  );
};

export default Editor;