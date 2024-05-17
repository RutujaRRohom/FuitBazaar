// In a file named rootReducer.js

import { combineReducers } from 'redux';
import { ADD_TO_CART } from './product.action';

// Initial state for the cart
const initialCartState = {
  items: [],
};

// Reducer function for the cart
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  // Add more reducers as needed
});

export default rootReducer;
