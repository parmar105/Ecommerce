import React from "react";

function Product(props) {
  const { product } = props;
  return (
    <div className="card my-3">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.rating} from {product.numReviews} reviews
        </p>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
}

export default Product;