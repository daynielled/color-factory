import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';
import './App.css';

function App() {
  const [colors, setColors] = useState([
    { id: 1, name: 'Red', color: '#ff0000' },
    { id: 2, name: 'Blue', color: '#0000ff' },
    { id: 3, name: 'Green', color: '#00ff00' },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Provider store={store}>
    <Router>
      <header className='banner'>
        <h2>Welcome to the Color Factory!</h2>
      </header>

      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} onAddColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="/add-color" element={<NewColorForm onAddColor={addColor} />} />
        <Route path='/colors/nope' element={<Navigate to='/colors' />} />
        <Route path='/this-is-not-valid' element={<Navigate to='/colors' />} />
        <Route path='/' element={<Navigate to='/colors' />} />

      </Routes>
    </Router>
    </Provider>
  );
}

export default App;


