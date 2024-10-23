import React from 'react';
import './Total.css';
import Button from '../../commen coponet/botton/botton';
import Arrow from '../../images/icons/Aerrow.png';
import Cardimg1 from '../../images/Blog_news_bg.png'
const Total = () => {
    const data = JSON.parse(localStorage.getItem("selectitem"));
    
    return (
        <section className='total_sec_1'>
            <div className='container'>
                <div className='row border-bottom mb-5'>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <img src={data.Cardimg} className='ig' alt='Product' />
                            </div>
                            <div className='col-lg-5'>
                                <div className='mt-5'>
                                    <h2 className='color font_family_roboto'>{data.title}</h2>
                                    <p className='color mb-2 font_family_roboto fs-5'>{data.currentP} USD</p>
                                  
                                </div>
                            </div>
                            <div className='col-lg-2'>
                                <div className='mt-5 ooo'>
                                    <button className='btnn'>+</button>
                                    <input
                                        type="number"
                                        className='total_input'
                                        value={1} 
                                        min="0"
                                    />
                                    <button className='btnn'>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around'>
                    <p className='color fs-3 font_family_roboto'>Sub Total</p>
                    <h4 className='color font_family_roboto'>$ 100.00 USD</h4> 
                </div>
                <div className='text-center'>
                    <Button style={"#274C5B"} name={"Continue To Checkout"} font={"700"} color={"white"} icon={Arrow} />
                </div>
            </div>
        </section>
    );
};

export default Total;
// export default Total;
// import React, { useEffect, useState } from 'react';
// import './Total.css';
// import Button from '../../commen coponet/botton/botton';
// import Arrow from '../../images/icons/Aerrow.png';

// const Total = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);

//   useEffect(() => {
//     // Retrieve cart items from localStorage
//     const cartData = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(cartData);
//     // Calculate initial subtotal
//     calculateSubtotal(cartData);
//   }, []);

//   const calculateSubtotal = (items) => {
//     const total = items.reduce((acc, item) => acc + item.currentP * item.quantity, 0);
//     setSubtotal(total);
//   };

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedCart = [...cartItems];

//     if (newQuantity < 1) {
//       updatedCart.splice(index, 1);  // Remove item if quantity goes to 0
//     } else {
//       updatedCart[index].quantity = newQuantity;
//     }

//     // Update cart in localStorage and state
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     setCartItems(updatedCart);

//     // Recalculate subtotal
//     calculateSubtotal(updatedCart);
//   };

//   const handleRemoveItem = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);  // Remove item from cart

//     // Update cart in localStorage and state
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     setCartItems(updatedCart);

//     // Recalculate subtotal
//     calculateSubtotal(updatedCart);
//   };

//   return (
//     <section className='total_sec_1'>
//       <div className='container'>
//         <div className='row border-bottom mb-5 justify-content-center align-items-center'>
//           <div className='col-lg-8'>
//             {cartItems.length > 0 ? (
//               cartItems.map((item, index) => (
//                 <div className='row mb-3' key={index}>
//                   <div className='col-lg-5'>
//                     <img src={item.Cardimg} className='ig' alt={item.title} />
//                   </div>
//                   <div className='col-lg-5'>
//                     <div className='mt-5'>
//                       <h2 className='color font_family_roboto'>{item.title}</h2>
//                       <p className='color mb-2 font_family_roboto fs-5'>
//                         {item.currentP} USD
//                       </p>
//                     </div>
//                   </div>
//                   <div className='col-lg-2'>
//                     <div className='mt-5 ooo'>
//                       <button 
//                         className='btnn' 
//                         onClick={() => handleQuantityChange(index, item.quantity + 1)}>
//                         +
//                       </button>
//                       <input
//                         type="number"
//                         className='total_input'
//                         value={item.quantity}
//                         min="1"
//                         onChange={(e) => handleQuantityChange(index, Math.max(e.target.value, 1))}
//                       />
//                       <button 
//                         className='btnn' 
//                         onClick={() => handleQuantityChange(index, item.quantity - 1)}>
//                         -
//                       </button>
//                     </div>
//                     <button 
//                       className='btnn remove' 
//                       onClick={() => handleRemoveItem(index)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No items in cart</p>
//             )}
//           </div>
//         </div>

//         <div className='d-flex justify-content-around'>
//           <p className='color fs-3 font_family_roboto'>Sub Total</p>
//           <h4 className='color font_family_roboto'>$ {subtotal.toFixed(2)} USD</h4>
//         </div>

//         <div className='text-center'>
//           <Button
//             style={"#274C5B"}
//             name={"Continue To Checkout"}
//             font={"700"}
//             color={"white"}
//             icon={Arrow}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Total; 