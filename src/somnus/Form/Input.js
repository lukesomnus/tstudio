import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';


/**
 * 
 * leftIcon={
 *  size:'small/large',
 *  icon:'user',
 *  
 * }
 * @export
 * @param {any} { children, className, color, icon, ...others } 
 * @returns 
 */
export default function Input({ children, className, color, size, leftIcon, rightIcon, ...others }) {

    const classString = cn(
        'container',
        {
            [`is-${color}`]: color,
            [`is-${size}`]: size,
            'has-icons-left': leftIcon,
            'has-icons-right': rightIcon
        },
        className
    )

    return (
        <div className="control" >
            <input className={classString} {...others} />
            {
                leftIcon && leftIcon.icon ?
                    (<span className={`icon is-${leftIcon.size} is-left`}>
                        <i className={`fa fa-${leftIcon.icon}`}></i>
                    </span>) : null
            }
            {
                rightIcon && rightIcon.icon ?
                    (<span className={`icon is-${rightIcon.size} is-rigFht`}>
                        <i className={`fa fa-${rightIcon.icon}`}></i>
                    </span>) : null
            }
        </div>
    )
};

Input.propTypes = {
}