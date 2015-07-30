'use strict'
import React from 'react'

export default class Timer extends React.Component {

    setInterval(fn, ms) {
        this.intervals.push(setInterval(fn, ms));
    }

    componentWillUnmount() {
       this.intervals.forEach(clearInterval);
    }

	constructor(props) {
		super(props);
	    this.state = {  sec: 20 * 60 };
//		this.mixins = [SetIntervalMixin];
        this.intervals = [];
        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)

    }

	handleStart() {
    	this.setState({sec: 10})
    		this.setInterval(() => {
		    	this.setState({sec: this.state.sec -1})
		    }, 1000);
    }

    handleStop() {
        this.intervals.forEach(clearInterval);
  		this.setState({sec: 0})	
    }

	render() {
		return (
			<div className="card">
				<div  className="display" >	
					<textarea defaultValue={Math.floor(this.state.sec/60, 10)+ ":" + Math.floor(this.state.sec%60, 10)} value={Math.floor(this.state.sec/60,10) + ":" + Math.floor(this.state.sec%60)}></textarea>
				</div>
				<div className="buttons">
				<a href="#" onClick={this.handleStart}>Start</a> 
				<a href="#" onClick={this.handleStop}>Stop</a>
				</div>
			</div>
		)
	}
}

