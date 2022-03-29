import React, { useEffect, useState } from "react";

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

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul className="heading">
        <li>S. No</li>
        <li>Product Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {product.map((data, index) => {
        return (
          <ul key={index}>
            <li>{index + 1}</li>
            <li>{data.name}</li>
            <li>{data.price}</li>
            <li>{data.category}</li>
            <li>
              <button onClick={() => deleteproduct(data._id)}>Delete</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Productlist;
