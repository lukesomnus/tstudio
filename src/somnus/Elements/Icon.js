import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

export default function Icon({ name, className, ...others }) {

    const classString = cn(
        'icon',
        className
    )

    return (
        <span className={classString}  {...others}>
            <i className={"fa fa-" + name}></i>
        </span>
    )
};

Icon.propTypes = {
    size: propTypes.oneOf(['large', 'medium'])
}