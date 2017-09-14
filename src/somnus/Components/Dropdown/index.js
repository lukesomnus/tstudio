import React, { Component } from 'react';
import cn from 'classnames'
export default class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    _toggle() {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    _onSelect(item) {
        this._toggle();
        this.props.onSelect(item);
    }
    render() {
        const { className, placeholder, items, onSelect } = this.props;

        const dropdonwClassName = cn(
            "dropdown",
            { "is-active": this.state.isActive },
            className
        )
        return (
            <div className={dropdonwClassName}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => { this._toggle() }}>
                        <span>{placeholder}</span>
                        <span className="icon is-small">
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {
                            items.map(item => (
                                <a key={item.id} href="#" className="dropdown-item" onClick={() => { this._onSelect(item) }}>
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
};
