import React, { Component } from 'react';
import Timeline from './Timeline/Timeline'
import TimelineItem from './Timeline/TimelineItem'
import uuid from 'uuid'
import './anniversary.css';

class Anniversary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anniversaries: [{
                id: uuid(),
                date: '06/11',
                text: '杨建明',
                remark: '送他一个TT'
            },
            {
                id: uuid(),
                date: '12/22',
                text: '周悦',
                remark: '要买一份很有纪念意义的生日礼物'
            },
            {
                id: uuid(),
                date: '05/22',
                text: 'luke',
                remark: '要买一份很有纪念意义的生日礼物'
            }]
        }
    }

    render() {
        return (
            <div>
                <Timeline>
                    {
                        this.state.anniversaries.map(item => (
                            <TimelineItem key={item.id}>
                                <div className="birthday-card">
                                    <div className="birthday-card-header">
                                        <div className="birthday-card-date">
                                            {item.date} {item.text}
                                        </div>
                                        <div className="birthday-cake" v-show="nowDate===birthday.date">
                                            <img src="../../assets/cake.png" alt="cake" />
                                        </div>
                                    </div>
                                    <div className="birthday-card-content">
                                        <div>
                                            {item.remark}
                                        </div>
                                    </div>
                                </div>
                            </TimelineItem>
                        ))
                    }

                </Timeline>
            </div >
        )
    }
}

export default Anniversary