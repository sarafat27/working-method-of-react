import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = () => {
        const newStepsCount = steps + 1
        setSteps(newStepsCount)
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{ border: '3px solid black', margin: '10px' }}>
            <h2>This is my smart watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Increse steps</button>
            <Display name="Rolex" steps={steps}></Display>
        </div>
    );
};

export default Watch;