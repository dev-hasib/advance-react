import React, { Component } from 'react'


class Remove extends Component {
    componentDidMount() {
        console.log('Remove componentDidMount called');
    }

    componentWillUnmount() {
        console.log('Remove componentWillUnmount called');
    }
    render() {
        return (
            <div>
                <p>I'm remove soon</p>
            </div>
        )
    }
}


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            show: true,
            time: new Date().toLocaleTimeString()
        }
        console.log('Constructor method called');
    }


    componentDidUpdate() {
        console.log('ComponentDidUpdate method called');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount method called');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        if (this.state.count < 6) {
            console.log('shouldComponentUpdate method called true');
            return true
        }
        console.log('shouldComponentUpdate method called false');
        return false
    }

    count = () => {
        this.setState({
            count: this.state.count + 1,
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                <div>Counter :{this.state.count}</div>
                <button onClick={this.count}>Count</button>
                {this.state.show && <Remove />}
                <h1>{this.state.time}</h1>
            </div>
        )
    }
}
export default Test