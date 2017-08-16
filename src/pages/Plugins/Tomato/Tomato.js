import React, { Component } from 'react';

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

    _formatSecToMin(number) {
        let minStr = parseInt(number / 60, 10) + '';
        let secStr = number % 60 + '';
        minStr = minStr.length === 1 ? '0' + minStr : minStr
        secStr = secStr.length === 1 ? '0' + secStr : secStr
        return `${minStr}:${secStr}`
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
        return (
            <div>
                <div>
                    <span onClick={this._onSetting}>setting</span>
                </div>
                <div>
                    <span>{this._formatSecToMin(curTime)}</span>
                </div>
                <div>
                    <span onClick={() => { this._stop() }}>stop</span>
                    <span onClick={() => { this._toggle() }}>toggle</span>
                    <span onClick={() => { this._next() }}>next</span>
                </div>
            </div>
        )
    }
}

export default Tomato