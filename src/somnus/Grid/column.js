import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

export default function Column({ children, className, span, offset, platform, ...others }) {

    const classString = cn(
        'column',
        {
            [`is-${span}`]: span,
            [`is-offset-${offset}`]: offset,
            [`is-${platform}`]: platform
        },
        className)

    return (
        <div className={classString} {...others} >
            {children}
        </div >
    )
}

Column.propTypes = {
    span: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12'])
}