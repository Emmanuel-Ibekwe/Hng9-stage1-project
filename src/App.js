import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ContactForm from "./components/Contact/ContactForm";
import { useState } from "react";
function App() {
  const [displaySuccess, setDisplaySuccess] = useState(false);

  const passDisplaySuccessHandler = (val) => {
    setDisplaySuccess(val);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={<Home triggerDisplay={displaySuccess} />}
        />
        <Route
          path="/contact"
          element={
            <ContactForm onPassDisplaySuccess={passDisplaySuccessHandler} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
