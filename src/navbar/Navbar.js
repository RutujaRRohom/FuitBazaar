import { useState } from 'react';
import'./Navbar.css';
import { LoginForm } from '../Login/Login';
import { RegisterForm } from '../Register/Register.js'
import {Home} from '../Home/Home.js'
import Store from '../store/Store.js';
import { useNavigate } from 'react-router-dom';
//import ProductList from '../store/ProductList.js';





export default function Navbar(){
    const navigate = useNavigate();

    const [showLoginform,setShowLoginForm]=useState(false)
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleLoginClick=()=>{
        // setShowLoginForm(true)
        // setShowRegisterForm(false);
        // setIsLoggedIn(true);
        // {isLoggedIn && <Home />}
        navigate("/login")

        
    }

    const handleRegisterClick = () => {
        // setShowRegisterForm(true);
        // setShowLoginForm(false); 
        navigate("/register")// Close login form if open
    };

    return(
        <>
        <div style={{ backgroundImage: 'url("images/booklet.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <nav className="nav" >
        <button className="site-title" onClick={handleLoginClick}>Login</button>
        <button className="site-title" onClick={handleRegisterClick}>Register</button>
         </nav>
         </div>
        
        
        {/* {showLoginform && <LoginForm/>}  */}
        {/* {isLoggedIn && <Store />} */}

        {/* {showRegisterForm && <RegisterForm/>} */}
       
        {/* {isLoggedIn && <Home/>}  */}
        
       
        </>

    );

}

