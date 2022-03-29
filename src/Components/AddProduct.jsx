import React, { useState } from "react";
import swal from "sweetalert";

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

  const addProduct = async () => {
    if (
      !productdetail.name ||
      !productdetail.price ||
      !productdetail.category ||
      !productdetail.company
    ) {
      swal("Oops☹", "Please enter correct details", "error");

      return false;
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("http://localhost:1000/add-product", {
      method: "post",
      body: JSON.stringify({
        name: productdetail.name,
        price: productdetail.price,
        category: productdetail.category,
        userId: user._id,
        company: productdetail.company,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    if (result.name) {
      swal(
        `Congrats ${user.name}😍`,
        `You have added Product successfully`,
        "success"
      );
      setproductdetail({
        name: "",
        price: "",
        category: "",
        company: "",
      });
    }
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
