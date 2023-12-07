import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
        navigate('/');
    }
 })

  const login = async () => {
    let data = await fetch("https://product-cart-backend.vercel.app/login", {
      method: "Post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await data.json();
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else alert("Enter correct details");
  };

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Email"
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="text" className="login-btn" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
