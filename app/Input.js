'use strict'

import React from 'react'

export default class Input extends React.Component {
	constructor(props) {
		super(props)
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleKeyDown(e) {
		if (e.keyCode !== 13) return;
		e.preventDefault();
		var val = React.findDOMNode(this.refs.newField).value.trim();


		var event = new CustomEvent('newTask', { 'detail': e.nativeEvent.target.value });
		document.dispatchEvent(event);	
	}

	render() {
		return (
			<input ref="newField" onKeyDown={this.handleKeyDown} placeholder="Type what to do Later" />
		)
	}

}
