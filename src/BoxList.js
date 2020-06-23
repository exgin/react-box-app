import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const [boxes, setBox] = useState([]);

  const addBox = (newBox) => {
    setBox((boxes) => [...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBox((boxes) => boxes.filter((box) => box.id !== id));
  };

  const allBoxComps = boxes.map((box) => <Box key={box.id} id={box.id} height={box.height} width={box.height} color={box.color} removeBox={removeBox} />);

  return (
    <div>
      <h1>Boxes</h1>
      <>
        <NewBoxForm addBox={addBox} />
      </>

      <>{allBoxComps}</>
    </div>
  );
};

export default BoxList;
