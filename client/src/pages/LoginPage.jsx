import React from "react";
import "../App.scss";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage({ auth, setAuth, authData, setAuthData }) {
  const userRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      setAuthData(res);
      console.log(authData);
      setAuth(true);

    } catch (e) {
      setAuth(false);
      setError("Kullanıcı adı veya şifre hatalı !!");
    }  
  };

  return (
    <div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div className="main-container">
            <div className="main-container-header">
              <span>Giriş Yap</span>
            </div>

            <div className="main-container-content">
              <div className="main-container-content-item">
                <label htmlFor="">Kullanıcı Adı</label>
                <input ref={userRef} type="text" placeholder="@karaaslan" />
              </div>

              <div className="main-container-content-item">
                <label htmlFor="">Şifre</label>
                <input ref={passwordRef} type="password" placeholder="****" />
              </div>
              <button type="submit">Giriş Yap</button>
              <Link to={"/register"}> <button> Kayıt Ol</button></Link>
              {!auth && (
                <div className="main-container-header">
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
