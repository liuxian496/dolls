import React, { useRef } from 'react';

export const Name = (props: {
    name: string
}) => {
    const { name } = props;
    const renderCount = useRef(0);
    renderCount.current = renderCount.current + 1;

    console.log(`%c Name was rendered at ${new Date().toLocaleTimeString()}`, 'color: #6F8AB7');

    return (
        <div>
            {`Hello: ${name}, Name was rendered ${renderCount.current} times`}
        </div>
    )
};
