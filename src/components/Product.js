import React from "react";
import Rating from "./Rating";
import {Link} from 'react-router-dom'

function Product(props) {
  const { product } = props;
  return (
    <div className="card my-3">
      <Link to={'/product/:id'}><img src={product.image} className="card-img-top" alt="..." /></Link>
      <div className="card-body">
      <Link to={'/product/:id'}><h5 className="card-title my-2">{product.name}</h5></Link>
        <p className="card-text">
          {/* {product.rating} from {product.numReviews} reviews */}
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color={`#f8e825`} />
        </p>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
}

export default Product;
