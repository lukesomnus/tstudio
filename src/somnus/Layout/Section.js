import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

export default function Section({ children, className, size, ...others }) {

    const classString = cn(
        'section',
        { [`is-${size}`]: size },
        className
    )

    return (
        <div className={classString} {...others}>
            {children}
        </div>
    )
};

Section.propTypes = {
    size: propTypes.oneOf(['large', 'medium'])
}