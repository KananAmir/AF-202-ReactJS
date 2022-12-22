import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import Detail from "../pages/contact-page/detail";
import HomePage from "../pages/home-page";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact/:id" element={<Detail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
