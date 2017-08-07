import React from 'react';
import cn from 'classnames';

// as a direct child of hero,section,footer
export default function Field({ children, className, ...others }) {

    const classString = cn(
        'label',
        className
    )

    return (
        <label className={classString} {...others}>
            {children}
        </label>
    )
};