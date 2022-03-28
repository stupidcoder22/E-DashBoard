import React, { useState } from "react";

const SignupPage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = () => {
    console.log(name, email, password);
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
