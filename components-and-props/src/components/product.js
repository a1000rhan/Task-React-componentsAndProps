import React from "react";
import Product from "./productList";
import productList from "../Products";

export default function product() {
  const productFile = productList.map((prod) => <Product list={prod} />);
  return (
    <div>
      <div className="border"> {productFile}</div>
    </div>
  );
}
