import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div style={{ border: '3px solid black', margin: '10px' }}>
            <h2>I have: {props.name}</h2>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;