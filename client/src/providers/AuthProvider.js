import React, { useState } from "react";
import axios from "axios";
import { checkPropTypes } from "prop-types";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const handleRegister = async (user, history) => {
    console.log("regsiter user:", user);
    // so axios call now
    try {
      setError(null)
      let res = await axios.post("/api/auth", user);
      console.log(res);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      // want to handle this in your UI for you sake
      setError(err.response ? err.response : err)
      console.log(err);
      console.log(err.response);
    }
  };

  const handleLogin = async (user, history) => {
      try {
      let res = await axios.post("/api/auth/sign_in", user)
      setUser(res.data.data)
      console.log("user logged in:", user)
      history.push("/")
      } catch (err) {
        alert("unsuccessful login check console check username or password");
        console.log(err);
        console.log(err.response);
      }
  }

  const handleLogout = (history) => {
      console.log("user logged out:", user);
      setUser(null);
      // remove the access from local storage.
      localStorage.removeItem("access-token");
      history.push("/login");
  };



  return (
    <AuthContext.Provider value={{
      user,
      error,
      setError,
      handleRegister,
      handleLogin,
      handleLogout,
      setUser,
      authenticated: user ? true : false,
    }}
    >
    {props.children}
    </AuthContext.Provider>
  );
};