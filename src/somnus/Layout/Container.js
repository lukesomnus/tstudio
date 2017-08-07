import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

// as a direct child of hero,section,footer
export default function Container({ children, className, type, ...others }) {

    const classString = cn(
        'container',
        { [`is-${type}`]: type },
        className
    )

    return (
        <div className={classString} {...others}>
            {children}
        </div>
    )
};

Container.propTypes = {
    type: propTypes.oneOf(['fluid', 'widescreen', 'fullhd'])
}