'use strict'

import React from 'react'

export default class List extends React.Component {
	constructor(props) {
		super(props)
		this.state = { tasks: [] }
		console.log('constructor ')
	}
	componentDidMount() {
		console.log('did mount')
		document.addEventListener('newTask', (e) => {
			this.setState({tasks: this.state.tasks.concat([e.detail])})
			console.log(this.state.tasks);	
		}, false);
	}
	render() {
		let tasks = this.state.tasks.map(function(task) {
			return (<li>{task}</li>)
		});
		return (
		<div className="card">
			<ul>
			{tasks}
			</ul>
		</div>
		);
	}

}