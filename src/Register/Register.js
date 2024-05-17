import { useCallback, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Url="http://localhost:8080/signup"

 export const RegisterForm =() =>{

    const values={
        email:"",
        username:"",
        password:"",
        contact:""
    }

    const [inputs,setInputs]=useState(values)
    const navigate=useNavigate()

    const onhandleChange=(e)=>{
        setInputs({
            ...inputs,[e.target.name]:e.target.value}
        )
    }

    const onSubmitForm= async ()=>{
        if (inputs.email==="" || inputs.password==="" || inputs.username ==="" || inputs.contact ==="" ){
            alert("All fields are mandatory")
        }else{
            try{
                const response = await fetch(Url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(inputs)
                });
                    if (!response.ok) {
                        const errorMessage = await response.text();
                        console.log(errorMessage)

                        if (errorMessage == "invalid mail") {
                            toast.error("User not found", {
                                position: toast.POSITION.TOP_LEFT
                            });
                        } else {
                            alert("An error occurred. Please try again.");
                        }
                        return;
                    }
            
                    console.log(response)
                    // If the response is successful, navigate to "/shop"
                    navigate("/login");

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
            onChange={(e) => { onhandleChange(e) }} 
            type="email"
             name="email"
              value={inputs.email} 
              placeholder="email"
              className="form-control mb-3" 
              />
            <input 
            onChange={(e) => { onhandleChange(e)}} 
            type="password" name="password"
             value={inputs.password} 
             placeholder="Password" 
             className="form-control mb-3"
             />
             <input
             onChange={(e)=>{onhandleChange(e)}}
             value={inputs.username}
             type="text" 
             name="username"
             placeholder="username"
             className="form-control mb-3" 
             />
             <input
             onChange={(e)=>{onhandleChange(e)}}
             type="text"
             name="contact"
             value={inputs.contact}
             placeholder="mobile"
             className="form control mb-3"
             />
            <button           
            onClick={(e) => { onSubmitForm(e)}} 
            className="btn btn-success btn-block" >
                Submit 
                </button>
            <a href="/register">Signup</a>
           </form>
           </div>
           </div>
           </div>
        

    );
};

//export default RegisterForm;