import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Counter from './counter/Counter';

export default class App extends React.Component {
	render () {
		return (
			<div className="w-75 mx-auto">
				<div className="mt-3 text-center">
					<Counter />
				</div>
			</div>
		);
	}
}