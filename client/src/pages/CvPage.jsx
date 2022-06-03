import React, { useState } from "react";
import "../App.scss";
import axios from "axios";
function CvPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [departmant, setDepartment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCv = {
      name,
      email,
      phone,
      school,
      departmant
    };
    try {
      const res = await axios.post("/cv", newCv);
      console.log(res);
    } catch (e) {}
  };
  return (
    <div>
      <div className="main">
        <div className="main-container">
          <div className="main-container-header">
            <span>Başvuru Formu</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="main-container-content">
              <div className="main-container-content-item">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  type="text"
                  placeholder="Ad Soyad"
                />
              </div>
              <div className="main-container-content-item">
                <label htmlFor="">E-Mail</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="@okul.edu"
                />
              </div>
              <div className="main-container-content-item">
                <label htmlFor="">Telefon</label>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+90 *** *** ** **"
                />
              </div>
              <div className="main-container-content-item">
                <label htmlFor="">Okul</label>
                <input
                  onChange={(e) => setSchool(e.target.value)}
                  type="text"
                  placeholder="*** Üniversitesi"
                />
              </div>
              <div className="main-container-content-item">
                <label htmlFor="">Bölüm</label>
                <input
                  onChange={(e) => setDepartment(e.target.value)}
                  type="text"
                  placeholder="**** Bölümü"
                />
              </div>
              <button type="submit">Gönder</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CvPage;
