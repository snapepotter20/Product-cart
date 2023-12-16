import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let products = await fetch("http://localhost:5000/products",{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    products = await products.json();
    setProduct(products);
  };

  const setFlagFalse = (result = true) => {
    setFlag(result);
  };
  const deleteItem = async (id) => {
    let deleteProduct = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    deleteProduct = await deleteProduct.json();
    if (deleteProduct) {
      setFlagFalse();
      getProducts();
    }
  };

  const searchHandler = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      result = await result.json();
      if (result) setProduct(result);
    } else getProducts();
  };

  return (
    <div className="product-list">
      <h1 className="products">Products List</h1>
      <input
        type="text"
        placeholder="Search product"
        className="search"
        onChange={searchHandler}
      />
      <ul>
        <li className="list list1">Sr No.</li>
        <li className="list list1">Name</li>
        <li className="list list1">Price</li>
        <li className="list list1">Category</li>
        <li className="list list1">Company</li>
        <li className="list list1">Remove</li>
        <li className="list list1">Update</li>
      </ul>
      {product.length > 0 ? (
        product.map((item, index) => (
          <ul key={item._id}>
            <li className="list">{index + 1}</li>
            <li className="list">{item.name}</li>
            <li className="list">{`$${item.price}`}</li>
            <li className="list">{item.category}</li>
            <li className="list">{item.company}</li>
            <li className="list">
              <button
                onClick={() => deleteItem(item._id)}
                className="deleteBtn"
              >
                Delete
              </button>
            </li>
            <Link to={`/update/${item._id}`} className="list updateLink">
              Update
            </Link>
          </ul>
        ))
      ) : (
        <h1 className="noResult">No result found</h1>
      )}
      {flag ? <Modal setFlagFalse= {setFlagFalse} /> : null}
    </div>
  );
};

export default ProductList;
