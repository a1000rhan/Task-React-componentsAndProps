import React from "react";
import Products from "../Products";

export default function productList({ list }) {
  return (
    <div className="container">
      <img className="img" src={list.image} />
      <div>
        {" "}
        <p className="font">{list.name}</p>
        <p className="price">{list.price} USD</p>
      </div>
    </div>
  );
}
