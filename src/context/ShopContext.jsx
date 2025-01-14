import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";
import new_collections from "../components/assets/new_collections";
import data_product from "../components/assets/data";
import Product from "../pages/Product";


export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < all_product.length + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

const ShopContextProvider = (props) => {
  const [type, setType] = useState();
  const [itemId, setItemId] = useState(null);
  // const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount,setTotalAmount] = useState(0);
  const [prodType,setProdType] = useState()



  const updateTotal = (cartItems)=>{
    let newTotal = 0;
    if(cartItems.length>0){
      cartItems.forEach(product=>{
        const price = parseInt(product.new_price)
        newTotal += price
      })
    }
    setTotalAmount(newTotal)
  }

  const addToCart = (newItemAdd) => {
    const prev = cartItems;
    const updatedCart = [...prev, newItemAdd]
    setCartItems(updatedCart);
    
    updateTotal(updatedCart)
    alert("Item Added");
    // console.log(cartItems)
    // const newItem = data_product.map((newitem,i)=>{
    //   if(newitem.id===itemId){
    //     console.log(newitem)
    //     // setCartItems({...prev, newitem})
    //   }
    // console.log(itemId == ItemId)
    // })
    // all_product.filter(itemId==data_product.id)
    // setCartItems(() => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  console.log(cartItems);
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((product) => product.id !== itemId);
    setCartItems(updatedCart);
    updateTotal(updatedCart)
    alert("Item Removed");
    // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  console.log(cartItems);
  const contextvalue = {
    new_collections,
    all_product,
    type,
    setType,
    data_product,
    itemId,
    setItemId,
    addToCart,
    removeFromCart,
    cartItems,
    totalAmount,
    prodType,
    setProdType
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
