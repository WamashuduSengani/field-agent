import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CustomerCreationPage from "./pages/CustomerCreationPage/CustomerCreationPage";
import CustomerDetailPage from "./pages/CustomerDetailPage/CustomerDetailPage";
import MapPage from "./pages/MapPage/ MapPage";
import HomePage from "./pages/HomePage/ HomePage";
import Sidebar from "./components/Sidebar/SideBar";

const App = () => (
  <Router>
     <Sidebar />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-customer" element={<CustomerCreationPage />} />
      <Route path="/customer/:id" element={<CustomerDetailPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
