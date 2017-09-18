import React, { Component } from 'react';
import './tomato.css';
import { withRouter } from 'react-router'
import TomotoTime from './TomatoTime';
class Tomato extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workTotalTime: 1500,
            restTotalTime: 300,
            curTime: 1500,
            type: 'work',  // work , rest
            status: 'end' // start, pause,end
        }
    }

    _onSetting() {

    }


    _toggle() {
        const { status } = this.state
        switch (status) {
            case 'end':
            case 'pause':
                this.setState({
                    status: 'start'
                })
                this._countDown();
                break;
            case 'start':
                this.setState({
                    status: 'pause'
                })
                this._clearTimer();
                break;
        }

    }

    _countDown() {
        this.countDownTimer = setInterval(() => {
            if (this.state.curTime > 0) {
                this.setState(prevState => {
                    return {
                        curTime: --prevState.curTime
                    }
                })
            } else {
                this._clearTimer()
                const isWork = this.state.type === 'work';
                this.setState(prev => ({
                    status: 'end',
                    type: isWork ? 'work' : 'rest',
                    curTime: isWork ? prev.workTotalTime : prev.restTotalTime
                }))
            }

        }, 1000)
    }

    _resume() {
        this._clearTimer();
        this.setState({
            curTime: this.state.type === 'work' ? this.state.workTotalTime : this.state.restTotalTime
        })
    }

    _next() {
        const isWork = this.state.type === 'work';
        this.setState(prev => ({
            type: isWork ? 'rest' : 'work',
            curTime: isWork ? prev.workTotalTime : prev.restTotalTime
        }))
    }

    _clearTimer() {
        clearInterval(this.countDownTimer)
    }

    _stop() {
        const isWork = this.state.type === 'work';
        this.setState(prev => ({
            status: 'end',
            curTime: isWork ? prev.workTotalTime : prev.restTotalTime
        }))
        this._clearTimer()
    }

    render() {
        const { curTime } = this.state
        const { title } = this.props.match.params
        return (
            <div className="tomato-container">
                <div className="tomato-header">
                    <p className="tomato-header-status">工作中</p>
                    <p className="tomato-header-title">{title}</p>
                    <span className="tomato-header-settings" onClick={this._onSetting}><i className="mdi mdi-settings"></i></span>
                </div>
                <div className="tomato-timearea">
                    {/* TODO: 将state放在子组件中，这样Tomato不会被重新渲染 */}
                    <TomotoTime time={curTime}></TomotoTime>
                    {/* {this._formatSecToMin(curTime)} */}
                </div>
                <div className="tomato-control">
                    <div className="tomato-control-toggle">
                        <span onClick={() => { this._toggle() }}>
                            <i className="mdi mdi-youtube-play"></i>
                        </span>
                    </div>
                    <div className="tomato-control-others is-clearfix">
                        <span className="tomato-control-stop" onClick={() => { this._stop() }}>
                            <i className="mdi mdi-stop-circle-outline"></i>
                        </span>
                        <span className="tomato-control-next" onClick={() => { this._next() }}>
                            <i className="mdi mdi-skip-next-circle-outline"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Tomato);