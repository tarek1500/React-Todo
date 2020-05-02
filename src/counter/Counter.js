import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
	constructor() {
		super();

		this.state = {
			counter: 0
		};
	}

	increaseCounter = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	};

	render = () => {
		return (
			<button className="btn btn-primary" onClick={ this.increaseCounter }>Increase: { this.state.counter }</button>
		);
	}
}