import styles from './style.css'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


class Clock extends Component {
    constructor() {
        super()
        // set initial time:
        this.state = {
            time: Date.now()
        }
    }

    componentDidMount() {
        // update time every second
        this.timer = setInterval(() => {
                this.setState({ time: Date.now() })
    }, 1000)
    }

    componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer)
    }

    render() {
        let time = new Date(this.state.time).toLocaleTimeString();
        return (
            <div>
            <span>{ 'Inferno version: ' + version }</span>
            <br/>
            <span>{ time }</span>
            </div>
    )
    }
}

// render an instance of Clock into <body>:
// render(<Clock />, document.getElementById('app'));
export default Clock