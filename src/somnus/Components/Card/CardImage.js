import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

export default function CardImg({ children,className, ...others }) {

    const classString = cn(
        'card-image',
        className
    )

    return (
        <div className={classString} {...others}>
            {children}
        </div>
    )
};
