import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./layouts/header";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";
import NotFound from "./pages/not-found";
import CustomersPage from "./pages/customers-page";
import Footer from "./layouts/footer";
import CustomersDetailPage from "./pages/customers-detail-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/customers/:id" element={<CustomersDetailPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
