import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import { colors, size } from '../common/constant';
export default function Progress({ children, className, size, color, value, max, ...others }) {

    const classString = cn(
        'progress',
        {
            [`is-${size}`]: size,
            [`is-${color}`]: color
        },
        className
    )

    return (
        <progress className={classString} value={value} max={max} {...others}>
            {children}
        </progress>
    )
};

Progress.propTypes = {
    size: propTypes.oneOf(colors),
    color: propTypes.oneOf(size),
    value: propTypes.number,
    max: propTypes.number
}