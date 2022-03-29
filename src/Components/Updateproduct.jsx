import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const Updateproduct = () => {
  const [productdetail, setproductdetail] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  const texthandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setproductdetail({ ...productdetail, [name]: value });
  };

  const addProduct = async () => {
    let result = await fetch(`http://localhost:1000/update/${params.id}`, {
      method: "put",
      body: JSON.stringify({
        name: productdetail.name,
        price: productdetail.price,
        category: productdetail.category,
        company: productdetail.company,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.acknowledged) {
      swal(`Congrats🤗`, `You have updated your data successfully`, "success");
      navigate("/");
    }
  };

  useEffect(() => {
    prefilldataApi();
  }, []);

  const prefilldataApi = async () => {
    let result = await fetch(`http://localhost:1000/product/${params.id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      setproductdetail({
        name: result.name,
        category: result.category,
        company: result.company,
        price: result.price,
      });
    }
  };
  return (
    <div className="register">
      <h1>Update Product</h1>
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
        update Product
      </button>
    </div>
  );
};

export default Updateproduct;
