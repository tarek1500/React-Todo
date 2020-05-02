import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import TodoList from './todo/list/TodoList';
import TodoForm from './todo/form/TodoForm';
import Counter from './counter/Counter';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			list: [
				{
					title: 'Todo #1',
					isDone: false
				},
				{
					title: 'Todo #2',
					isDone: true
				},
				{
					title: 'Todo #3',
					isDone: false
				},
				{
					title: 'Todo #4',
					isDone: true
				}
			]
		};
	}

	createItem = (title) => {
		let list = this.state.list;

		list.push({
			title: title,
			isDone: false
		});

		this.setState({
			list: list
		});
	}

	doItem = (index) => {
		let list = this.state.list;

		list[index].isDone = true;

		this.setState({
			list: list
		});
	}

	deleteItem = (index) => {
		let list = this.state.list;
		list.splice(index, 1);

		this.setState({
			list: list
		});
	}

	render () {
		return (
			<div className="w-75 mx-auto">
				<div className="row mt-5 px-2 py-3 border rounded">
					<div className="col-8">
						<TodoList list={ this.state.list } doItem={ this.doItem } deleteItem={ this.deleteItem } />
					</div>
					<div className="col-4">
						<TodoForm createItem={ this.createItem } />
					</div>
				</div>
				<div className="mt-3 text-center">
					<Counter />
				</div>
			</div>
		);
	}
}