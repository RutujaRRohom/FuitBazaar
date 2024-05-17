
// import './App.css';
// import Navbar from './navbar/Navbar';
// import {BrowserRouter as Router, Route, Routes, Navigate,Switch } from "react-router-dom"
// import { LoginForm } from './Login/Login';
// //import { RegisterForm } from './Register/Register';
// import { RegisterForm } from './Register/Register';
// import { Home } from './Home/Home';
// import CartForm from './CartProducts/Cart';
// import Store from './store/Store';
// import ShopNowCont from './Home/ShopNowCont';
// import Dashboard from './Dashboard/Dashboard';

// function App() {
//   return (
  
//     <Router>
//     <div className='App'>
     
//       <Dashboard/>
      
//       <Routes>
//         <Route exact path="/login" element={<LoginForm/>}> </Route>
//         <Route path="/register" element={<RegisterForm/>} /> 
//         <Route path="/home"  render={<Home/>} /> 
//         <Route  path="/shop" element={<Store/>} /> 
//         <Route path="/cartItem" element={<CartForm/>} />
       
      
//         </Routes>
      
//     </div>
//   </Router>
    

//   );
// }

// export default App;

import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from './router/RootLayout'

const App = () => {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  )
}

export default App