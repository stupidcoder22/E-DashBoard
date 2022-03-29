import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let response = await fetch("http://localhost:1000/products");
    response = await response.json();
    setproduct(response);
  };

  const deleteproduct = async (id) => {
    let response = await fetch(`http://localhost:1000/delete/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    getProduct();
  };

  const serchhandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:1000/search/${key}`);
      result = await result.json();
      if (result) {
        setproduct(result);
      }
    } else {
      getProduct();
    }
  };

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        type="text"
        className="search"
        placeholder="Search Product"
        onChange={serchhandle}
      />
      <ul className="heading">
        <li>S. No</li>
        <li>Product Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {product.length > 0 ? (
        product.map((data, index) => {
          return (
            <ul key={index}>
              <li>{index + 1}</li>
              <li>{data.name}</li>
              <li>{data.price}</li>
              <li>{data.category}</li>
              <li>
                <button onClick={() => deleteproduct(data._id)}>Delete</button>
                <Link to={`/update/${data._id}`}>Update</Link>
              </li>
            </ul>
          );
        })
      ) : (
        <h1>No Data Available</h1>
      )}
    </div>
  );
};

export default Productlist;
