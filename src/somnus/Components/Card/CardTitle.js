import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

export default function CardTitle({title, icon, className,...others }) {

    const classString = cn(
        'card-header',
        className
    )

    return (
        <header className={classString} {...others}>
            {/* <a>{children}</a> */}
            <p className="card-header-title">
                {title}
            </p>
        </header>
    )
};
