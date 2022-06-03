import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./details-cv.scss";

function DetailsCv() {
  const location = useLocation();

  const [cv, setCv] = useState([]);
  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const getCv = async () => {
      const res = await axios.get(`/cv/${path}`);
      setCv(res.data);
      console.log(cv);
    };
    getCv();
  }, [path]);

  return (
    <>
      <div className="cv-container">
        <ul>
          <li>
            <span>{cv.name}</span>
          </li>
          <li>
            <span>{cv.school}</span>
          </li>
          <li>
            <span>{cv.departmant}</span>
          </li>
          <li>
            <span>{cv.email}</span>
          </li>
          <li>
            <span>{cv.phone}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DetailsCv;
