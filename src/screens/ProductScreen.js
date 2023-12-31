import React, {useState, useEffect} from "react";
// import products from "../products";
import { useParams, Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from 'axios'

function ProductScreen() {
  const param = useParams();
  //   console.log(param);
  // const product = products.find((p) => param.id == p._id);
  //   console.log(product);

  const [product, setProduct] = useState({})

  useEffect(()=>{
    async function fetchProducts(){
      const {data} = await axios.get(`/api/products/${param.id}`)
      setProduct(data)  
    }
    fetchProducts()

  },[])

  console.log("Product : ",product)

  return (
    <div className="container">
      <Link className="btn btn-secondary my-3" to={"/"}>
        Go Back{" "}
      </Link>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} fluid />
        </div>
        <div className="col-md-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{product.name}</h3>
            </li>
            <li className="list-group-item">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={`#f8e825`}
              />
            </li>
            <li className="list-group-item">Price: ${product.price}</li>
            <li className="list-group-item">
              Description: {product.description}
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">
                    <div className="col">Price</div>
                    <div className="col"><strong>${product.price}</strong></div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                    <div className="col">Status</div>
                    <div className="col">{product.countInStock > 0 ? "In Stock" : "Out Of Stock" }</div>
                </div>
                <li className="list-group-item d-flex justify-content-center">
                    <button className="btn btn-dark" type="button" disabled={product.countInStock == 0}>Add To Cart</button>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
