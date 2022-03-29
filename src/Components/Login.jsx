import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handlesubmit = async () => {
    let data = await fetch("http://localhost:1000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();

    if (data.name) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
      swal("Welcome Back", `You have successfully logged in`, "success");
    } else {
      swal("Oops!", "Please enter correct details", "error");
    }
  };
  return (
    <div className="register">
      <h1>Login</h1>;
      <input
        className="inputbox"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button type="button" className="btn" onClick={handlesubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
