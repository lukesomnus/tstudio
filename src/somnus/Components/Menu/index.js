import React, { Component } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import List from './MenuList';
import Item from './MenuItem'

export default class Menu extends Component {
    static List = List;
    static Item = Item;

    constructor(props) {
        super(props);
    }
    render() {
        const { children, className } = this.props
        const classString = cn('menu', className)
        return (
            <aside className={classString}>
                {children}
            </aside>
        )
    }
}