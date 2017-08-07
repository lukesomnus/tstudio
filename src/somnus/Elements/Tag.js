import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import { colors, size } from '../common/constant';
export default function Tag({ children, className, size, color, value, max, ...others }) {

    const classString = cn(
        'tag',
        {
            [`is-${size}`]: size,
            [`is-${color}`]: color
        },
        className
    )

    return (
        <span className={classString} {...others}>
            {children}
        </span>
    )
};

Progress.propTypes = {
    size: propTypes.oneOf(colors),
    color: propTypes.oneOf(size),
}