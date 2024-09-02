import React, { useState } from 'react';
import { supabase } from '../client';
import { Link } from "react-router-dom";

const SignUp = () => {
    const MyStyle ={
        textDecoration: "none",
        cursor: "pointer",
    }
  const [formData, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  console.log(formData);
  function handleChange(e) {
    const value = e.target.value;
    setData({ ...formData, [e.target.name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullname,
          },
        },
      })
      alert("Check your email")
    } catch (error) {
      
    }
  }
  return (
    <div>
      
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input className="btn" type="submit" />
        </form>
        Already have an acc?<Link to={'/'} className="link"  >Login</Link>
    </div>
  );
};
export default SignUp;
