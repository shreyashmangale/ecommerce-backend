// reducer.js

const initialState = {
  initialState: {
    category: ''
  },
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        category: action.payload,  // Update the category data in the state
      };
    default:
      return state;
  }
};

export default categoryReducer;