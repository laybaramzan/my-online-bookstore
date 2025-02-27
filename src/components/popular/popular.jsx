import React, { useContext } from "react";
import "./popular.css";
import data_product from "../assets/data";
import { ShopContext } from "../../context/ShopContext";
import Item from "../item/item";
const Popular = () => {
  const {setProdType,setItemId } = useContext(ShopContext);
  return (
    <div className="popular ">
      <div className=" container">
        <h1 className="h1">POPULAR IN WOMEN</h1>
        <hr />

        <div className="popular-item  row">
          {data_product.map((item, i) => {
            return (
              <div
                key={i}
                className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
                onClick={() =>{ setItemId(item.id);setProdType("dataProd")}}
              >
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
