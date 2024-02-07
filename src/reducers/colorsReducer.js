const colorsReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_COLOR':
          return [action.payload, ...state];
        // Handle other actions for fetching or updating colors
        default:
          return state;
      }
}

export default colorsReducer;



