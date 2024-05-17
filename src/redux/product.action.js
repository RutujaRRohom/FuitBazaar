// In a file named cartActions.js

// Action type constant
export const ADD_TO_CART = 'ADD_TO_CART';

// Action creator function
export const addToCart = (fruit) => {
  return {
    type: ADD_TO_CART,
    payload: fruit,
  };
};
