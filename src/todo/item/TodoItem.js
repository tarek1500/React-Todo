import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
	onDoneClick = () => this.props.doItem(this.props.index);

	onDeleteClick = () => this.props.deleteItem(this.props.index);

	render () {
		return (
			<div className={ (this.props.isDone ? "list-group-item-success" : "") + " mb-1 p-1 text-left border rounded" }>
				<span className="title">{ this.props.title }</span>
				<div className="btn-group float-right">
					{ !this.props.isDone ? <button type="button" className="btn btn-success btn-sm" onClick={ this.onDoneClick }>Done</button> : "" }
					<button type="button" className="btn btn-danger btn-sm" onClick={ this.onDeleteClick }>Delete</button>
				</div>
			</div>
		);
	}
}