import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CvPage from "./pages/CvPage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import DetailsCv from "./pages/DetailsCv/DetailsCv";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import PanelPage from "./pages/PanelPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [auth, setAuth] = useState(false);
  const [authData, setAuthData] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CvPage />} />
        <Route
          path="/panel"
          element={
            auth ? (
              <PanelPage authData={authData} auth={auth} setAuth={setAuth} />
            ) : (
              <LoginPage auth={auth} authData={authData} setAuthData={setAuthData} setAuth={setAuth} />
            )
          }
        />
        <Route path="/panel/cv/:id" element={<DetailsCv />} />
        <Route
          path="/panel"
          element={
            auth ? (
              <PanelPage authData={authData} auth={auth} setAuth={setAuth} />
            ) : (
              <LoginPage authData={authData} setAuthData={setAuthData} auth={auth} setAuth={setAuth} />
            )
          }
        ></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
