'use strict'
import React from 'react'

export default class Timer extends React.Component {
    setInterval(fn, ms) {
        this.intervals.push(setInterval(fn, ms));
    }

	pad (str, max) {
	  str = str.toString();
	  return str.length < max ? this.pad("0" + str, max) : str;
	}

    componentWillUnmount() {
       this.intervals.forEach(clearInterval);
    }

	constructor(props) {
		super(props);
	    this.state = {  sec: 20 * 60 };
	    // this.mixins = [SetIntervalMixin];
        this.intervals = [];
        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
    }

	handleStart() {
	    this.setState({sec: 20 * 60 });
		this.setInterval(() => {
	    	this.setState({sec: this.state.sec -1})
	    }, 1000);
    }

    handleStop() {
        this.intervals.forEach(clearInterval);
  		this.setState({sec: 0})	
    }

	render() {
		var time = this.pad(Math.floor(this.state.sec/60, 10),2) + ":" + this.pad(Math.floor(this.state.sec%60, 10),2);
		return (
			<div className="card">
				<div  className="display" >	
					<textarea defaultValue={time} value={time}></textarea>
				</div>
				<div className="buttons">
				<a href="#" onClick={this.handleStart}>Start</a> 
				<a href="#" onClick={this.handleStop}>Stop</a>
				</div>
			</div>
		)
	}
}

