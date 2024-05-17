

import { Fragment, useState } from "react";
import {  toast } from "react-toastify";

import "../routes/Routes.js"
import { Home } from "../Home/Home.js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ShopNowCont from "../Home/ShopNowCont.js";




const Url="http://localhost:8080/login"


 export const LoginForm =()=>{
    const navigate = useNavigate();
    const initialValues ={
    email:"",
    password:"",

    }
const nextPage =()=>{
    navigate("/cartItem")
}
    const [inputs,setInputs]=useState(initialValues)
    const [isLoggedIn, setIsLoggedIn] = useState(false); 


    const handleChange=(e)=>{
        setInputs({
            ...inputs, //spreading input object and not the direct inputs
            [e.target.name]:e.target.value
        } )

    }

    const onSubmitForm= async (e)=>{
        setIsLoggedIn(true)
        e.preventDefault()
        // navigate("/shop");
        if (inputs.email==="" || inputs.password===""){
            alert("All fields are mandatory")
        }
        else{
             try{
                const response = await fetch(Url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(inputs)
                });
                    if (!response.ok) {
                        const errorMessage = await response.text();
                        console.log(errorMessage)
                        if (errorMessage !=""){
                            alert(" Wrong username or password")

                        }
                        return;
                    }
            
                    // If the response is successful, navigate to /shop
                    navigate("/shop");

                }catch(error){
                    toast.error("User not Found", {
                        position: toast.POSITION.TOP_LEFT,
                      });
                    alert("please try again")
                console.log(error.message+"please try again")
            }
            
        }
       
    }

    return(
        <div style={{ backgroundImage: 'url("images/veg_rack.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>

           <div className="container">
            <div className="login-form">
        <h1 className="text-center  my-3"></h1>
        <form>
            <input 
            onChange={(e) => { handleChange(e) }} 
            type="email"
             name="email"
              value={inputs.email} 
              placeholder="email"
              className="form-control mb-3" 
              />
            <input 
            onChange={(e) => { handleChange(e) }} 
            type="password" name="password"
             value={inputs.password} 
             placeholder="Password" 
             className="form-control mb-3"
             />
            <button 
            onClick={(e) => { onSubmitForm(e) }} 
            className="btn btn-success btn-block" >
                Submit 
                </button>

         {/* {isLoggedIn && <ShopNowCont/>} */}
                <div> Not having account. <NavLink to="/register">Signup</NavLink> here</div>
           </form>
           </div>
           </div>
           </div>
        

    );
};

//export default LoginForm;