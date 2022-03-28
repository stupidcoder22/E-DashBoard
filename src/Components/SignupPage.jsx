import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const SignupPage = () => {
  const [name, setname] = useState("");
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
    console.log(name, email, password);
    const result = await fetch("http://localhost:1000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.log(data);

    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
      swal("Security", "You have successfully logged in", "success");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>;
      <input
        className="inputbox"
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setname(e.target.value)}
      />
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
        Signup
      </button>
    </div>
  );
};

export default SignupPage;
