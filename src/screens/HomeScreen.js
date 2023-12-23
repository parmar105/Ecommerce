import React, {useState, useEffect} from "react";
import Product from "../components/Product";
import axios from 'axios'

function HomeScreen() {
  // console.log(products);
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchProducts(){
      const products = await axios.get("/api/products/")
      console.log(products.data)
      setProducts(products.data)  
    }
    fetchProducts()

  },[])

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="my-3" style={{textAlign: "center"}}>LATEST PRODUCTS</h1>
      {products.map((product) => (
        <div key={product._id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;
