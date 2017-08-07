import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

export default function Tags({ children, className, hasAddons, ...others }) {

    const classString = cn(
        'tags',
        { 'has-addons': hasAddons },
        className
    )

    return (
        <div className={classString} {...others}>
            {children}
        </div>
    )
};

Tags.propTypes = {
    hasAddons: propTypes.bool
}