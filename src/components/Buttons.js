import React from 'react';
import './Buttons.css';

const Buttons = ({ requestNames, handleClick }) => {
  const ALL_THE_BUTTONS = requestNames.map(name => {
    return <button type='button' id={name} key={name} onClick={handleClick}>{name}</button>;
  });

  return (
    <div className='app-buttons'>
      {ALL_THE_BUTTONS}
    </div>
  );
}

export default Buttons;
