import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
	render() {
		const BUTTONS = this.props.requestNames.map((name, ind) => {
			return <button type='button' name={name} key={ind} onClick={this.props.getResults}>{name}</button>;
		});

		return (
			<div className='app-buttons'>
				{BUTTONS}
			</div>
		);
	}
}

export default Buttons;
