import React, { useRef, memo } from 'react';

export const MemoName = memo(function MemoName(props: {
    name: string
}) {
    const { name } = props;
    const renderCount = useRef(0);
    renderCount.current++;

    console.log(`%c MemoName was rendered at ${new Date().toLocaleTimeString()}`, 'color: #E85F5C');

    return (
        <div>
            {`Hello: ${name}, MemoName was rendered ${renderCount.current} times`}
        </div>
    )
});