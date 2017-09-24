import React, { Component } from 'react';
import './Timeline.css'
export default class Timeline extends Component {

    render() {
        const {children} = this.props
        return (
            <div className="timeline">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        )
    }
}