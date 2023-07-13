import React, { ReactNode } from 'react';
import './description.less';

export const Description = (props: {
    children: ReactNode
}) => {
    const { children } = props;
    return (
        <div className="dolls-description">
            {children}
        </div>
    )
}