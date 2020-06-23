import React from 'react';
import './Box.css';

const Box = ({ id, removeBox, color, width, height }) => {
  const remove = () => {
    removeBox(id);
  };

  return (
    <div className='Box'>
      <p style={{ backgroundColor: color, height: `${height}px`, width: `${width}px` }}>box</p>
      <button className='Box-btn' onClick={remove}>
        Remove {color}
      </button>
    </div>
  );
};

export default Box;
