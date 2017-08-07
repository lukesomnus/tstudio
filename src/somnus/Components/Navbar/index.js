import React, { Component } from 'react';
import cn from 'classnames';
import NavbarBrand from './NavbarBrand';
import NavbarItem from './NavBarItem';
import NavbarStart from './NavbarStart';
import NavbarMenu from './NavbarMenu';
class Narbar extends Component {
    static Brand = NavbarBrand;
    static Item = NavbarItem;
    static Start = NavbarStart;
    static Menu = NavbarMenu;
    
    constructor(props) {
        super(props)
    }

    render() {
        const { className, children, ...others } = this.props

        const navClass = cn('navbar', className)
        return (
            <nav className={navClass}>
                {children}
            </nav>
        )
    }
}
export default Narbar;