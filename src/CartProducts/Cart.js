



// CartForm.js
import React from 'react';
import { Button, Container, Table } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';


const CartForm = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    alert("Thank You Your Order is Placed");
    navigate("/")
    
  }
  const location  =  useLocation()
    // console.log("location",location.state.CartItems)
   // location.prop.CartItems
  const cartItems =location.state.CartItems;
    console.log("cartitems printed",cartItems)
   
    const totalPrice = cartItems?.reduce((total, item) => total + item.price, 0);
    console.log("totalPrice",totalPrice);
  
      const sum = cartItems.reduce((previousValue, currentItem) => previousValue + currentItem?.price, 0);
      console.log("cartItems sum",cartItems, sum);

  return (
   
<div style={{ backgroundImage: 'url("images/veg_rack.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div  >

        <Container>

          <div className='cart-background'>
            <div className='top-content'>
          <h3 className="cart-h3">Order Details</h3>
          <Table  className='table-body' >
            <tbody>
              <tr className="table-row">
                <th className="total-heading">Subtotal</th>
                <td className="total-price">${sum.toFixed(2)}.00</td>
              </tr>
              <tr className="table-row">
                <th className="total-heading">Delivery</th>
                <td className="total-price">free</td>
              </tr>
              <tr className="table-row">
                <th className="total-heading">Amount Payable</th>
                <td className="total-price">${sum.toFixed(2)}.00</td>
              </tr>
            </tbody>
          </Table>
          </div>
          
            <div className="button-div">
             
                <Button className="cart" onClick={handleClick}>Proceed to checkout</Button>
           
            </div>
            </div>
          
        </Container>
      </div>
      </div>
  );
};

export default CartForm;
