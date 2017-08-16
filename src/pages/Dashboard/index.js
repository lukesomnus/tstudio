import React, { Component } from 'react';
import { Navbar, Section, Columns, Column, Menu, Card } from '../../somnus'
import './index.css'
import avator from '../../avator.jpeg';
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asideHeight: window.innerHeight + 'px',
            cards: [{
                id: 1,
                title: '番茄工作法',
                subtitle: '工作25分钟，休息5分钟',
                link: '/tomato',
                imgUrl: ''
            },
            {
                id: 2,
                title: '番茄工作法',
                subtitle: '工作25分钟，休息5分钟',
                link: '/todo',
                imgUrl: ''
            }, {
                id: 3,
                title: '番茄工作法',
                subtitle: '工作25分钟，休息5分钟',
                link: '/todo',
                imgUrl: ''
            }, {
                id: 4,
                title: '番茄工作法',
                subtitle: '工作25分钟，休息5分钟',
                link: '/todo',
                imgUrl: ''
            }]
        }
    }

    cardClickHandler(link) {
        this.props.history.push(link)
    }

    render() {
        const { cards } = this.state
        return (
            <div>
                {/* <Navbar className="ts-navbar">
                    <Navbar.Brand>
                        <Navbar.Item>
                            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </Navbar.Item>
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Start>
                            <Navbar.Item>
                                <span class="emoji">🎨</span> Expo
                                </Navbar.Item>
                        </Navbar.Start>
                    </Navbar.Menu>
                </Navbar> */}
                <Columns className="ts-root">
                    <Column span="2" className="ts-aside" style={{ height: this.state.asideHeight }}>
                        <div className="ts-logo">
                            <div>TStudio</div>
                        </div>
                        <div className="ts-avator">
                            <div className="ts-avator-img">
                                <img src={avator} />
                            </div>
                            <div className="ts-avator-name">
                                <span>Luke Lee</span>
                            </div>
                        </div>
                        <Menu className="ts-menu">
                            <Menu.List title="Plugins">
                                <Menu.Item>
                                    番茄工作
                                </Menu.Item>
                                <Menu.Item>
                                    记忆曲线
                                </Menu.Item>
                            </Menu.List>
                        </Menu>
                    </Column>
                    <Column span="10" className="ts-dashboard">
                        <Columns className="ts-dashboard-header">
                            <div>8月8日</div>
                        </Columns>
                        <Columns className="ts-dashboard-container">
                            {cards.map(card => {
                                return (
                                    <Column span='3' key={card.id}>
                                        <Card className="column-card" onClick={() => { this.cardClickHandler(card.link) }}>
                                            <Card.Image>
                                                <div className="card-img">

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
                                )
                            })}
                            <Column span='3'>
                                <div className="card-more card">
                                    <span>+</span>
                                </div>
                            </Column>
                        </Columns>
                    </Column>
                </Columns>
            </div>
        )
    }
}

export default Dashboard;