import React from 'react';

const Toolbar = (props) => {
    return (
        <div className="toolbar is-size-5 has-text-weight-bold has-text-centered">
            {props.text}
        </div>
    );
}

export default Toolbar;