import React from 'react';
import './Buttons.css';

let requestNames = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

const Buttons = ({ handleClick }) => {
  let allTheButtons = requestNames.map(name => {
    return <button type='button' id={name} key={name} onClick={handleClick}>{name}</button>;
  });

  return (
    <div className='app-buttons'>
      {allTheButtons}
    </div>
  );
}

export default Buttons;
