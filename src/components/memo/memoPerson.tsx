import React, { useRef, memo } from 'react';

export const MemoPerson = memo(function MemoPerson(props: any) {
    const { children, id } = props;
    const renderCount = useRef(0);
    renderCount.current++;

    console.log(`%c MemoPerson ${id} was rendered at ${new Date().toLocaleTimeString()}`, 'color: #E85F5C');

    return (
        <div>
            {`MemoPerson ${id} was rendered ${renderCount.current} times`}
            {children}
        </div>
    )
});