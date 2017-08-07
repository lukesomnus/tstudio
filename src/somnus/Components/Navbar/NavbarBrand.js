import React from 'react';

export default function ({ className, children, ...props }) {

    return (
        <div className="navbar-brand">
            {children}
        </div>
    )
}