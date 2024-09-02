import React, { useEffect } from "react";
import { useState } from "react";
import { SignUp, Login, HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  const [token, setToken] = useState(() => {
    // Initialize the state with the value from localStorage
    return localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : false;
  });

  useEffect(() => {
    // Store the token in localStorage whenever it changes
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Login setToken={setToken} />} /> {/* Default to the login page */}
        <Route path={'/SignUp'} element={<SignUp />} />
        {token && <Route path={'/HomePage'} element={<HomePage token={token} />} />} {/* Conditionally render the HomePage */}
      </Routes>
    </div>
  );
};

export default App;






































































/*this was the original code from the video using sessionstorage
but the Problem with this is you get logged out when you close/re-open the browser tab.
one was writing this comment so chat gpt gives us a code with local storage we write it above*/

/*
import React, { useEffect } from "react";
import { useState } from "react";
import { SignUp, Login, HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";
import './App.css';
const App = () => {
  const [token, setToken] = useState(false); /*token= use is logged in*/

  /*
  if(token){
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect (() => {
    if (sessionStorage.getItem("token")) {
    let data =  JSON.parse(sessionStorage.getItem("token"));
    setToken(data);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Login setToken={setToken} />} /> /*we need the log in page to come first be the default */
       /* <Route path={'/SignUp'} element={<SignUp />} />
        /*{token ? <Route path={'/HomePage'} element={<HomePage token={token} />} />: ""} /*if we are logged in we can access the home page : else we do nothing but we can remove this: and the ? and "" and make it roken && route*/
        
/*
      </Routes>
    </div>
  );
};
/ */
/*
export default App;










*/