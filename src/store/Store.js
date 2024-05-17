import React, { useState } from 'react';
import '../navbar/Navbar.js'
import kiwiImage from '../img/kiwi.png';
import orange from '../img/orrange.jpg'
import carrot from '../img/carrot.jpg'
import pineapple from '../img/pineapple.jpg'
import apple from '../img/apple.jpg'
import tomato from '../img/tomato.jpg'
import { addToCart } from '../redux/product.action.js';
import {Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
// import CartForm from '../CartProducts/Cart.js';
import {  useNavigate } from 'react-router-dom';
import gava from "../img/gava.jpg";
import cucumber from "../img/cucumber.jpg";
import banana from "../img/banana.webp";
import beetrooot from "../img/beetrooot.jpg";
import grapes from "../img/grapes.jpg";



  const fruits = [
    {
      id: 1,
      name: 'Kiwi',
      price: 1.99,
      description: 'Fresh and crispy apples from local orchards.',
      image: kiwiImage,
    },
    {
      id: 2,
      name: 'Orange',
      price: 0.99,
      description: 'Sweet and ripe bananas, perfect for snacking.',
      image: orange,
    },
    {
      id: 3,
      name: 'pineapple',
      price: 1.49,
      description: 'Juicy and refreshing, rich in Vitamin C.',
      image: pineapple,
    },
    {
        id: 4,
        name: 'carrot',
        price: 1.49,
        description: 'Juicy and refreshing, rich in Vitamin A.',
        image: carrot,
      },
      {
        id: 5,
        name: 'apple',
        price: 1.49,
        description: 'Juicy and refreshing Vitamin C.',
        image: apple,
      },
      {
        id: 5,
        name: 'tomato',
        price: 1.49,
        description: 'Juicy,refershing and rich in Vitamin C',
        image: tomato,
      },
      {
        
        id: 6,
        name: 'guava',
        price: 3.49,
        description: 'Juicy and refreshing sweet, rich in Vitamin A.',
        image: gava,
      },
      {
        
        id: 7,
        name: 'cucumber',
        price: 1.49,
        description: 'Juicy and refreshing sweet, rich in Vitamin A.',
        image: cucumber,
      },
      {
        
        id: 8,
        name: 'banana',
        price: 9.49,
        description: 'Juicy and refreshing sweet, rich in Vitamin A.',
        image: banana,
      },
      
        {
        
          id: 9,
          name: 'beetrooot',
          price: 9.49,
          description: 'Juicy and refreshing sweet, rich in Vitamin A.',
          image: beetrooot,
        },
        {
        
          id: 10,
          name: 'grapes',
          price: 10.49,
          description: 'Juicy and refreshing sweet, rich in Vitamin A.',
          image: grapes,
        },
        {
        
          id: 11,
          name: 'carrot',
          price: 10.49,
          description: 'Juicy and refreshing sweet, rich in Vitamin A.',
          image: carrot,
        },

      
  ];
  const Store = () => {

  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[count,setCount]=useState(0)
  const [showCartForm, setShowCartForm] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Store cart items here
const handleAddCart =(productID) =>{
  console.log("productID",productID)
  const product = fruits.find((fruit) => fruit.id=== productID);
 
  productID ? dispatch(addToCart(productID)) :  console.error(`Product with ID ${productID} not found.`);
  setCount(count+1)
  setCartItems(prevItems => [...prevItems, product]); 
}


const goToCartPage = () => {
  navigate('/cartItem',{state:{CartItems:cartItems}}); // Navigate to '/cartItem' route
};


  return (
    <>
       <div className="cart-icon-container" >
     <FaShoppingCart className="cart-icon" onClick={goToCartPage} />
     <span className="cart-count">{count}</span>
   

   </div>
    <div className="fruit-list">
      {fruits.map((fruit,index) => (
        <div key={fruit.id} className="fruit-item">
          <img src={fruit.image} alt={fruits.name} />
          <div className="fruit-details">
            <h3>{fruit.name}</h3>
            <p className="price">${fruit.price.toFixed(2)}</p>
            <p className="description">{fruit.description}</p>
            <Button
              className="card-button mt-3 mb-2"
              onClick={() => handleAddCart(fruit.id)}
            >
              Add to cart
            </Button>
          </div>
        
        </div>
      ))}
    </div>
  
   </>
  );
  
}

export default Store;









// import React from 'react';
// import Kiwi from '../img/kiwi.png'

// function Store() {
//   const fruits = [
//     {
//       id: 1,
//       name: 'Apple',
//       price: 1.99,
//       description: 'Fresh and crispy apples from local orchards.',
//       image: Kiwi,
//     },
//     {
//       id: 2,
//       name: 'Banana',
//       price: 0.99,
//       description: 'Sweet and ripe bananas, perfect for snacking.',
//       image: Kiwi,
//     },
//     {
//       id: 3,
//       name: 'Orange',
//       price: 1.49,
//       description: 'Juicy and refreshing oranges, rich in Vitamin C.',
//       image: Kiwi,
//     },
//     // Add more fruits here
//     {
//         id: 4,
//         name: 'Orange',
//         price: 1.49,
//         description: 'Juicy and refreshing oranges, rich in Vitamin C.',
//         image: Kiwi,
//       },
//   ];

//   return (
    
//     <div className="fruit-list">
//       {fruits.map((fruit, index) => (
//         <React.Fragment key={fruit.id}>
//           {(index % 3 === 0) && <div className="row"></div>} 
//           <div className="col">
//             <div className="fruit-item">
//               <img src={fruit.image} alt={fruit.name} />
//               <div className="fruit-details">
//                 <h3>{fruit.name}</h3>
//                 <p className="price">${fruit.price.toFixed(2)}</p>
//                 <p className="description">{fruit.description}</p>
//               </div>
//             </div>
//           </div>
//           {(index + 1) % 3 === 0 && <div className="row"></div>} 
//         </React.Fragment>
//       ))}
//     </div>
   
//   );
// }

// export default Store;
