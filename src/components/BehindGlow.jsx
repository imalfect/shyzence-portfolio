import React from 'react';

export default function BehindGlow(props) {
    return (
        <div
            style={{
                boxShadow: `0 0 ${props.size}px #cd3c6d`,
                borderRadius: '50%',
            }}>
            {props.children}
        </div>
    )

}
