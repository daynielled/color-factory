import React from 'react';
import { Link } from 'react-router-dom';
import NewColorForm from './NewColorForm';

const ColorList = ({ colors, onAddColor }) => {
  return (
    <div className='color-list-container'>
      <Link to="/add-color">Add a color</Link>
      <h3>Select a Color</h3>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <Link to={`/colors/${color.name.toLowerCase()}`} style={{ color: color.color }}>
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
