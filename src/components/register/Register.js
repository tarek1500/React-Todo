import React from 'react';

import './Register.css';

export default class Register extends React.Component
{
	registerUrl = 'http://todoapp.ahmedrohym.com/api.php?apicall=signup';

	constructor() {
		super();

		this.state = {
			email: '',
			username: '',
			password: '',
			password_confirmation: '',
			gender: 'male',
			isBusy: false,
			message: ''
		};
	}

	onInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'radio' ? target.id : target.value;

		this.setState({
			[target.name]: value.trim()
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		if (this.state.email &&
			this.state.username &&
			this.state.password && this.state.password === this.state.password_confirmation &&
			(this.state.gender === 'male' || this.state.gender === 'female')) {
			const data = {
				email: this.state.email,
				username: this.state.username,
				password: this.state.password,
				gender: this.state.gender
			}
			this.setState({
				isBusy: true
			});
			fetch(this.registerUrl, {
				method: 'post',
				body: JSON.stringify(data)
			})
			.then(response => response.json())
			.then(response => {
				this.setState({
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
						<label htmlFor="email">Email</label>
						<input type="email" className="form-control" id="email" name="email" value={ this.state.email } onChange={ this.onInputChange } />
					</div>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="text" className="form-control" id="username" name="username" value={ this.state.username } onChange={ this.onInputChange } />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={ this.onInputChange } />
					</div>
					<div className="form-group">
						<label htmlFor="password_confirmation">Password Confirmation</label>
						<input type="password" className="form-control" id="password_confirmation" name="password_confirmation" value={ this.state.password_confirmation } onChange={ this.onInputChange } />
					</div>
					<div className="form-group">
						<div className="custom-control custom-radio custom-control-inline">
							<input type="radio" className="custom-control-input" id="male" name="gender" checked={ this.state.gender === 'male' } onChange={ this.onInputChange } />
							<label className="custom-control-label" htmlFor="male">Male</label>
						</div>
						<div className="custom-control custom-radio custom-control-inline">
							<input type="radio" className="custom-control-input" id="female" name="gender" checked={ this.state.gender === 'female' } onChange={ this.onInputChange } />
							<label className="custom-control-label" htmlFor="female">Female</label>
						</div>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary" disabled={ this.state.isBusy }>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}