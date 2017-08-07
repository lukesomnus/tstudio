import React, { Component } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
export default class MentList extends Component {


    constructor(props) {
        super(props);
    }

    static propTypes = {
        title: propTypes.string
    }

    static defaultProps = {
        titile: ''
    }

    render() {
        const { children, className, title, others } = this.props
        const classString = cn(
            'menu-list',
            className
        )
        return (
            <div>
                {
                    title ?
                        <p className="menu-label">
                            {title}
                        </p> : null
                }
                <ul className={classString} {...this.others}>
                    {children}
                </ul>
            </div>

        )
    }

};
