import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="py-3">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/product/:id" element={<ProductScreen />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
