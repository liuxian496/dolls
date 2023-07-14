import React, { useRef, memo } from 'react';

export const MemoAge = memo(function MemoMessage(props: {
    age: string
}) {
    const { age } = props;
    const renderCount = useRef(0);
    renderCount.current++;

    console.log(`%c MemoAge was rendered at ${new Date().toLocaleTimeString()}`, 'color: #EEEBD3');

    return (
        <div>
            {`Age is ${age}, MemoAge was rendered ${renderCount.current} times`}
        </div>
    )
});