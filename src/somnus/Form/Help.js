import React from 'react';
import cn from 'classnames';

// as a direct child of hero,section,footer
export default function Help({ children, className, color, ...others }) {

    const classString = cn(
        'help',
        { [`is-${color}`]: color },

        className
    )

    return (
        <p className={classString} {...others}>
            {children}
        </p>
    )
};