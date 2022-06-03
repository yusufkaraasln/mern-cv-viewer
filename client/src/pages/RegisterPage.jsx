import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AdminPanel/admin-panel.scss";
function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/panel");
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div>
      <div>
        <div className="main">
          <form onSubmit={handleSubmit}>
            <div className="main-container">
              <div className="main-container-header">
                <span>Kayıt Ol</span>
              </div>

              <div className="main-container-content">
                <div className="main-container-content-item">
                  <label htmlFor="">Kullanıcı Adı</label>
                  <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="@karaaslan" />
                </div>

                <div className="main-container-content-item">
                  <label htmlFor="">Email</label>
                  <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="@karaaslan" />
                </div>

                <div className="main-container-content-item">
                  <label htmlFor="">Şifre</label>
                  <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="****" />
                </div>
                <button> Kayıt Ol</button>
                <br /><br /><br />
                <br /><br /><br />
                <br />
                <Link to={"/panel"}><button type="submit">Giriş Yap</button></Link>
                {error && <div className="main-container-header">
                <span>Bir şeyler ters gitti ve kayıt işlemi gerçekleşemedi.</span>
              </div> }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
