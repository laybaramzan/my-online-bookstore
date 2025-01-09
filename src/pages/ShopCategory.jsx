// import React, { useContext } from "react";
// import "./CSS/ShopCategory.css";
// import { ShopContext } from "../context/ShopContext";
// import dropdown_icon from "../components/assets/dropdown_icon.png";
// import Item from "../components/item/item";

// const ShopCategory = (props) => {
//   const { all_product ,type } = useContext(ShopContext);
//   // const cat = {
//   //   men:"men",
//   //   women:"women",
//   //   kid:"kid"
//   // }
//   return (
//     <div className="shop-category">
//       <img src={props.banner} />
//       <div className="shopcategory-indexsort">
//         <p>
//           <span>showing 1-12</span>out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} />
//         </div>
//       </div>
//       {/* <div className="shopcategory-products">
//         {all_product.map((item, i) => {
//           console.log(props.category)
//           if (type === item.category) {
//             console.log(type)
//             return (
//               <Item
//                 key={i}
//                 id={item.id}
//                 name={item.name}
//                 image={item.image}
//                 new_price={item.new_price}
//                 old_price={item.old_price}
//               />
//             );
//           }
//           else {
//             return null;
//           }
//         })}
//       </div> */}
//     </div>
//   );
// };

// export default ShopCategory;
