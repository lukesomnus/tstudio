import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

export default function CardContent({ children, className,...others }) {

    const classString = cn(
        'card-content',
        className
    )

    return (
        <div className={classString} {...others}>
            {children}
        </div>
    )
};
