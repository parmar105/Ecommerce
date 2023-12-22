import React from "react";
import Rating from "./Rating";
import {Link} from 'react-router-dom'

function Product(props) {
  const { product } = props;
  return (
    <div className="card my-3">
      <Link to={`/product/${product._id}`}><img src={product.image} className="card-img-top" alt={product.name} /></Link>
      <div className="card-body">
      <Link to={`/product/${product._id}`}><h5 className="card-title my-2">{product.name}</h5></Link>
        <div className="card-text my-3">
          {/* {product.rating} from {product.numReviews} reviews */}
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color={`#f8e825`} />
        </div>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
}

export default Product;
