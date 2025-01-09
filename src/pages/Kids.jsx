import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ShopCategory from "./ShopCategory";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/item";

const Kids = (props) => {
  const { type, setType, all_product ,setProdType,setItemId } = useContext(ShopContext);
  useEffect(() => {
    setType("kid");
    document.title = "Kids";
  }, []);
  return (
    <div className="bg-white">
    <div className="container">
      <img src={props.banner} style={{height:"240px",width:"100%"}}/>
      {/* <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by
          <img
            src={dropdown_icon}
            style={{
              maxWidth: "1%", // Ensure image resizes within parent container
              height: "auto", // Maintain aspect ratio
            }}
          />
        </div>
      </div> */}
      <div className="shopcategory-products row">
        {all_product.map((item, i) => {
          console.log(item.category);
          if (type === item.category) {
            console.log(type);
            return (
              <div key={i} className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" onClick={() =>{setItemId(item.id);setProdType("bioProd");}}>
              <Item
                
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              /></div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore text-center">Explore More</div>
    </div>
    </div>
  );
};

export default Kids;
