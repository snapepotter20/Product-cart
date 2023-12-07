import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  },[]);

  const getProductDetails = async () => {
    let result = await fetch(`https://product-cart-backend.vercel.app/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {

    let result = await fetch(`https://product-cart-backend.vercel.app/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    })
    result = await result.json();
    if(result)
     navigate('/');
  };

  return (
    <div className="updateProduct">
      <input
        type="text"
        placeholder="Enter product name"
        value={name}
        className="product-input"
        onChange={(e) => setName(e.target.value)}
      />
     
      <input
        type="number"
        placeholder="Enter product price"
        value={price}
        className="product-input"
        onChange={(e) => setPrice(e.target.value)}
      />
     
      <input
        type="text"
        placeholder="Enter product category"
        value={category}
        className="product-input"
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter product company"
        value={company}
        className="product-input"
        onChange={(e) => setCompany(e.target.value)}
      />
     

      <button
        className="product-btn"
        onClick={updateProduct}
        disabled={!name || !price || !category || !company}
      >
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
