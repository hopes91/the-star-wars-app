import React from 'react';
import './Results.css';

const Results = ({ results }) => {
  const ALL_THE_RESULTS = results.map((request, ind) => {
    const value = request.map((val, ind) => {
      const twoVal = val.split(': ');

      return <p key={ind}><span className='bold-value'>{twoVal[0]}:</span> {twoVal[1]}<br /></p>;
    });

    return <div className='request' key={ind}>{value}<br /></div>;
  });

  return (
    <div className='app-results'>
      {ALL_THE_RESULTS}
    </div>
  );
}

export default Results;
