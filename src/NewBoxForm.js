import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {
  const INT_STATE = { color: '', height: '', width: '' };

  const [formData, setFormData] = useState(INT_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData(INT_STATE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='color'> Color: </label>
      <input id='color' name='color' value={formData.color} onChange={handleChange} />

      <label htmlFor='height'> Height: </label>
      <input id='height' name='height' value={formData.height} onChange={handleChange} />

      <label htmlFor='width'> Width: </label>
      <input id='width' name='width' value={formData.width} onChange={handleChange} />

      <button>Add a new Box</button>
    </form>
  );
};

export default NewBoxForm;
