import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';


const ColorDetails = ({ colors }) => {
  const { color } = useParams();

  // Find the selected color from the list, ignoring case
  const selectedColor = colors.find((c) => c.name.toLowerCase() === color.toLowerCase());

  if (!selectedColor) {
    return <div>Color not found</div>;
  }

  return (
    <div style={{ backgroundColor: selectedColor.color, padding: '20px' }}>
      <h2>This is {selectedColor.name}</h2>
      <Link to="/colors">Go Back</Link>
    </div>
  );
};

export default ColorDetails;

