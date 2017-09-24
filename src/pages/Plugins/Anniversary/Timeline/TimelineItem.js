import React, { Component } from 'react';

export default function TimelineItem({children}) {
    return (
        <div className="timeline-item">
            <div className="timeline-item-station"></div>
            <div className="timeline-item-content">
                {children}
            </div>
        </div>
    )
}