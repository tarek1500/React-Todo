import React from 'react';

import './TodoForm.css';

export default class TodoForm extends React.Component {
	constructor() {
		super();

		this.state = {
			title: ''
		}
	}

	onNameChange = (event) => this.setState({ title: event.target.value });

	onAddClick = () => {
		this.props.createItem(this.state.title);
		this.setState({
			title: ''
		});
	};

	render () {
		return (
			<div>
				<span className="form-title">Task</span>
				<input className="form-control mb-2" type="text" value={ this.state.title } placeholder="Task name" onChange={ this.onNameChange } />
				<div className="text-center">
					<button className="btn btn-primary" onClick={ this.onAddClick }>Add</button>
				</div>
			</div>
		);
	}
}