import React from 'react';
import './Results.css';

const Results = (props) => {
	const RESULTS = props.results.map((request, ind) => {
		let value = request.map((val, ind) => {
			let twoVal = val.split(': ');

			return <p key={ind}><span className='bold-value'>{twoVal[0]}: </span>{twoVal[1]}<br /></p>;
		});

		return <div className='request' key={ind}>{value}<br /></div>;
	});

	return (
		<div className='app-results'>
			{RESULTS}
		</div>
	);
}

export default Results;
