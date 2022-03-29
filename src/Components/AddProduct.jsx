import React, { useState } from "react";

const AddProduct = () => {
  const [productdetail, setproductdetail] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });

  const texthandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setproductdetail({ ...productdetail, [name]: value });
  };

  const addProduct = () => {
    console.log(productdetail);
  };
  return (
    <div className="register">
      <h1>AddProduct</h1>;
      <input
        type="text"
        placeholder="Enter Product name"
        className="inputbox"
        onChange={texthandle}
        name="name"
        value={productdetail.name}
      />
      <input
        type="text"
        placeholder="Enter Product price"
        className="inputbox"
        onChange={texthandle}
        name="price"
        value={productdetail.price}
      />
      <input
        type="text"
        placeholder="Enter Product category"
        className="inputbox"
        onChange={texthandle}
        name="category"
        value={productdetail.category}
      />
      <input
        type="text"
        placeholder="Enter Product company"
        className="inputbox"
        onChange={texthandle}
        name="company"
        value={productdetail.company}
      />
      <button className="btn" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
