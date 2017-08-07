import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Container from './Container'

/**
 * 
 * 
 * @export
 * @param {any} { children, title, subtitle, className, type, ...others } 
 * @returns 
 */
export default function Hero({ children, title, subtitle, className, size, color, ...others }) {

    const classString = cn(
        'hero',
        {
            [`is-${color}`]: color,
            [`is-${size}`]: size
        },
        className
    )

    return (
        <div className={classString} {...others}>
            <div className="hero-body">
                <Container>
                    <h1 className="title">{title}</h1>
                    <h2 className="subtitle">{subtitle}</h2>
                </Container>
            </div>
            {children}
        </div>
    )
};

Hero.propTypes = {
    type: propTypes.oneOf(['fluid', 'widescreen', 'fullhd']),
    title: propTypes.string.isRequired,
    subtitle: propTypes.string
}