// import React, { useState, useEffect } from "react";
// export const AppContext = React.createContext([{}, () => {}]);

// export const AppProvider = (props) => {
//   const [cart, setCart] = useState(0);

//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     if (+cart >= 0) {
//       setCart(+cart + 1);
//       setCartItems(product);
//     }
//   };

//   const removeFromCart = () => {
//     if (+cart !== 0) {
//       setCart(+cart - 1);
//     }
//   };

//   return (
//     <AppContext.Provider
//       value={{ cart, setCart, addToCart, removeFromCart, cartItems }}
//     >
//       {props.children}
//     </AppContext.Provider>
//   );
// };
