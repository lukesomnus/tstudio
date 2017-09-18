import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Section, Columns, Column, Card } from '../../somnus'
import './index.css'

class Cardbox extends Component {

    constructor(props) {
        super(props);
        this.cards = [{
            id: 1,
            title: 'Todo',
            subtitle: '工作25分钟，休息5分钟',
            link: '/todo',
            imgUrl: ''
        },
        {
            id: 2,
            title: 'Tomato',
            subtitle: '番茄工作法',
            link: '/tomato',
            imgUrl: ''
        }, {
            id: 3,
            title: 'Todo',
            subtitle: '工作25分钟，休息5分钟',
            link: '/todo',
            imgUrl: ''
        }, {
            id: 4,
            title: 'Todo',
            subtitle: '工作25分钟，休息5分钟',
            link: '/todo',
            imgUrl: ''
        }]
    }

    _onCardClickHandler(card) {
        // 控制跳转
        this.props.history.push(card.link);
    }

    render() {
        return (
            <div className="cardbox-container">
                <Columns>
                    {
                        this.cards.map(card => (
                            <Column span="3" key={card.id}>
                                <Card className="cardbox-card" onClick={() => { this._onCardClickHandler(card) }}>
                                    <Card.Image>
                                        <div className="card-img">
                                            <span>{card.title}</span>
                                        </div>
                                    </Card.Image>
                                    <Card.Content>
                                        <div className="content">
                                            <p>{card.title}</p>
                                            <small>{card.subtitle}</small>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </Column>
                        ))
                    }
                </Columns>
            </div>
        )
    }
}

export default withRouter(Cardbox);