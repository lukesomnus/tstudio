import React, { Component } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import CardContent from './CardContent';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
export default class Card extends Component {

    static title = CardTitle;
    static Image = CardImage;
    static Content = CardContent;

    render() {
        const { children, className, size, ...others } = this.props;
        const classString = cn(
            'card',
            className
        )
        return (
            <div className={classString} {...others}>
                {children}
            </div>
        )
    };
}
