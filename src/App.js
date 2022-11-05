import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ContactForm from "./components/Contact/ContactForm";
import { useState } from "react";
import FormProvider from "./store/FormProvider";
function App() {
  return (
    <FormProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </FormProvider>
  );
}

export default App;
