import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

// as a direct child of hero,section,footer
export default function Field({ children, className,...others }) {

    const classString = cn(
        'field',
        className
    )

    return (
        <div className={classString} {...others}>
            {children}
        </div>
    )
};