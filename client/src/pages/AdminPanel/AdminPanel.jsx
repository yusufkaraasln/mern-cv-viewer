import React, { useEffect, useState } from "react";
import "./admin-panel.scss";
import LoginPage from "../LoginPage";
import PanelPage from "../PanelPage";

function AdminPanel(auth,setAuth,authData) {



  return (
      <>
      {auth ? <PanelPage auth={auth} setAuth={setAuth} authData={authData} /> : <LoginPage />}
      </>
  );
}

export default AdminPanel;
