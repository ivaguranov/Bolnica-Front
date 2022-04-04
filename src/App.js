import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./pages/DemoPage/DemoPage";
import DoctorHomepage from "./pages/DoctorHomepage/DoctorHomepage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DoctorHomepage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/demp-page" exact element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
