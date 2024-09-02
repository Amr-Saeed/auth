import React, { useState } from 'react';
import { supabase } from '../client';
import { Link, useNavigate } from "react-router-dom";

const Login = ({setToken}) => {
    let Navigate = useNavigate();
  const [formData, setData] = useState({
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
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })
        if(error) throw error
        
        console.log(data)
        setToken(data)
        Navigate('/HomePage')
    } catch (error) {
        alert(error.message)
      
    }
  }
  return (
    <div>
      
        <form onSubmit={handleSubmit}>
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
        Don't have an acc?<Link to={'/SignUp'} className="link"  >SignUp</Link>
    </div>
  );
};
export default Login;
