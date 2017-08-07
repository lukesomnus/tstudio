import React from 'react';
import cn from 'classnames';


export default function Columns({ children, className, ...others }) {

    const classString = cn('columns', className)

    return (
        <div className={classString} {...others} >
            {children}
        </div >
    )
}