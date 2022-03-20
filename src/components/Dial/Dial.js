import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '3px solid black', margin: '10px' }}>
            <h2>This is dial</h2>
            <p>steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;