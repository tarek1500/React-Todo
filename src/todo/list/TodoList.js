import React from 'react';
import './TodoList.css';

import TodoItem from '../item/TodoItem';

export default class TodoList extends React.Component {
	doItem = (index) => this.props.doItem(index);

	deleteItem = (index) => this.props.deleteItem(index);

	render () {
		return (
			<div>
				{ this.props.list.map((item, index) =>
					<TodoItem key={ index } title={ item.title } isDone={ item.isDone } doItem={ this.doItem } deleteItem={ this.deleteItem } index={ index } />
				) }
			</div>
		);
	}
}