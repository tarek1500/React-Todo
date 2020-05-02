import React from 'react';

import './Login.css';

export default class Login extends React.Component
{
	loginUrl = 'http://todoapp.ahmedrohym.com/api.php?apicall=login';

	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			token: '',
			isBusy: false,
			message: ''
		};
	}

	onInputChange = (event) => {
		const target = event.target;
		const value = target.value;

		this.setState({
			[target.name]: value.trim()
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		if (this.state.username &&
			this.state.password) {
			const data = {
				username: this.state.username,
				password: this.state.password
			}
			this.setState({
				isBusy: true
			});
			fetch(this.loginUrl, {
				method: 'post',
				body: JSON.stringify(data)
			})
			.then(response => response.json())
			.then(response => {
				this.setState({
					token: 'user' in response ? response.user.token : this.state.token,
					isBusy: false,
					message: ('user' in response ? 'Success: ' : 'Error: ') + response.message
				});
			});
		}
		else {
			this.setState({
				message: 'Error: Fill the missing data'
			});
		}
	}

	render () {
		return (
			<div className="w-50 mx-auto">
				<div className="text-center mb-2">
					<h6>{ this.state.message }</h6>
				</div>
				<form onSubmit={ this.onFormSubmit }>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="text" className="form-control" id="username" name="username" value={ this.state.username } onChange={ this.onInputChange } />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={ this.onInputChange } />
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary" disabled={ this.state.isBusy }>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}