import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

export default function MenuItem({ children, ...others }) {

    // const classString = cn(
    //     'section',
    //     { [`is-${size}`]: size },
    //     className
    // )

    return (
        <li {...others}>
            <a>{children}</a>
        </li>
    )
};
