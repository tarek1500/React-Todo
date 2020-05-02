import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import TodoList from './components/todo/list/TodoList';
import TodoForm from './components/todo/form/TodoForm';
import Counter from './components/counter/Counter';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
			<Router>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link className="navbar-brand" to="/">Todo</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbar-content">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/todo">Todo</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">Contact</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">About</Link>
							</li>
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/login">Login</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/register">Register</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div className="px-3 py-2">
					<Switch>
						<Route path="/todo">
							<div className="row w-75 mx-auto py-3 border rounded">
								<div className="col-8">
									<TodoList list={this.state.list} doItem={this.doItem} deleteItem={this.deleteItem} />
								</div>
								<div className="col-4">
									<TodoForm createItem={this.createItem} />
								</div>
							</div>
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
					<div className="mt-3 text-center">
						<Counter />
					</div>
				</div>
			</Router>
		);
	}
}