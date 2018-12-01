import React from 'react';
import './Results.css';

const Results = ({ results }) => {
  let sortedResults = results.sort((a, b) => {
    let aVal = Number(a[a.length - 1].replace(/[^0-9]/gi, ''));
    let bVal = Number(b[b.length - 1].replace(/[^0-9]/gi, ''));
    
    return aVal > bVal ? 1 : -1;
  });

  let allTheResults = sortedResults.map((request, ind) => {
    let value = request.map((val, ind) => {
      let twoVal = val.split(': ');

      return <p key={ind}><span className='bold-value'>{twoVal[0]}:</span> {twoVal[1]}<br /></p>;
    });

    return <div className='request' key={ind}>{value}<br /></div>;
  });

  return (
    <div className='app-results'>
      {allTheResults}
    </div>
  );
}

export default Results;
