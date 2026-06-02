import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import DeliveryPage from "./components/delivery/DeliveryPage";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import CustomerPage from "./components/customer/CustomerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="" element={<HomePage />} />
        <Route path="/deliveries" element={<DeliveryPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/couriers" element={<div>Couriers</div>} />
      </Route>
    </Routes>
  );
}

export default App;
