import React from "react";
import { useEffect } from "react";
import SingleCv from "./SingleCv";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function PanelPage(authData) {
  const [cvList, setCvList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/cv");
      setCvList(res.data);
    };
    fetchPosts();
  });

  

  return (
    <div className="admin">
      <header>
        <div className="header-container">
          <span>Hoşgeldiniz, @{authData.authData.data.username}</span>
          
            <button onClick={()=> window.location.reload()}>Çıkış Yap</button>
          
        </div>
      </header>
      <main>
        {cvList.map((cv) => (
          <Link to={`/panel/cv/${cv._id}`}>
            <SingleCv key={cv._id} cv={cv} />
          </Link>
        ))}
      </main>
    </div>
  );
}

export default PanelPage;
