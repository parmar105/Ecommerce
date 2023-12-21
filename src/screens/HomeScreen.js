import React from "react";
import products from "../products";
import Product from "../components/Product";

function HomeScreen() {
  console.log(products);
  return (
    <div className="row">
        <h1>LATEST PRODUCTS</h1>
      {products.map((product)=>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <Product product={product}/>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
