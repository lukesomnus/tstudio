import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import { buttonColors, size } from '../common/constant';
export default function Button({ children, className, color, size, shape, status, ...others }) {

    const classString = cn(
        'button',
        {
            [`is-${size}`]: size,
            [`is-${color}`]: color,
            [`is-${status}`]: status && status !== 'disabled',
            [`is-${shape}`]: shape && shape !== 'doubble',
            ['is-outlined is-inverted']: shape && shape === 'doubble',
        },
        className
    )

    return (
        <a className={classString} {...others} disabled={status === 'disabled'} >
            {children}
        </a>
    )
};

Button.propTypes = {
    size: propTypes.oneOf(size),
    color: propTypes.oneOf(buttonColors),
    shape: propTypes.oneOf(['outlined', 'inverted', 'doubble']),
    status: propTypes.oneOf(['normal', 'hover', 'focus', 'active', 'loading', 'static', 'disabled'])
}