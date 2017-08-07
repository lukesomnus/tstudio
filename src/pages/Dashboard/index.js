import React, { Component } from 'react';
import { Navbar, Section, Columns, Column, Menu, Card } from '../../somnus'
import './index.css'
import avator from '../../avator.jpeg';
class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                <Columns>
                    <Column span="2" className="ts-aside">
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
                    <Column span="10">
                        <Columns>
                            <Column span='4' className="column-card">
                                <Card>
                                    <Card.Image>
                                        <div className="card-img">

                                        </div>
                                    </Card.Image>
                                    <Card.Content>
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                                            <small>Lorem ipsum dolor</small>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </Column>

                            <Column span='4' className="column-card">
                                <Card>
                                    <Card.Image>
                                        <div className="card-img">

                                        </div>
                                    </Card.Image>
                                    <Card.Content>
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                                            <small>Lorem ipsum dolor</small>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </Column>

                            <Column span='4' className="column-card">
                                <Card>
                                    <Card.Image>
                                        <div className="card-img">

                                        </div>
                                    </Card.Image>
                                    <Card.Content>
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                                            <small>Lorem ipsum dolor</small>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </Column>
                        </Columns>
                    </Column>
                </Columns>
            </div>
        )
    }
}

export default Dashboard;