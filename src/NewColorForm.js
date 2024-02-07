import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewColorForm = ({ onAddColor }) => {
  const [colorName, setColorName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ff0000'); // Default color

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new color object
    const newColor = { id: Date.now(), name: colorName, color: selectedColor };

    // Invoke the callback to add the color to the main page
    onAddColor(newColor);

    // Reset the form fields
    setColorName('');
    setSelectedColor('#ff0000');

    // Redirect to the colors list page
    navigate('/colors');
  };

  return (
    <div>
      <h2>New Color Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input type="text" value={colorName} onChange={(e) => setColorName(e.target.value)} />
        </label>
        <label>
          Select a Color:
          <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
        </label>

        <label>
          Preview of Selected Color:
        <div style={{ width: '100px', height: '30px', backgroundColor: selectedColor, marginTop: '10px' }}></div>
        </label>
        

        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;



