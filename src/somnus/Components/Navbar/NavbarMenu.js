import React from 'react';

export default function NarbarMenu({ children, className, ...others }) {
    return (
        <div className="navbar-menu">
            {children}
        </div>
    )
}