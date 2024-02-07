import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from './reducers/colorsReducer';

const store = configureStore({
    reducer: {
        colors: colorsReducer,
    },
});

export default store;
