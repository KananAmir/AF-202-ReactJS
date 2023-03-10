import Footer from "./layouts/footer";
import "./App.scss";
import Header from "./layouts/header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import CustomerList from "./pages/customers-list";
import CustomerDetail from "./pages/customer-detail";
import FavoriteCustomers from "./pages/favorite-customers";
import NotFound from "./pages/not-found";
import AddCustomerAntd from "./pages/add-customer-antd";
import { useState } from "react";
import AddCustomerFormikYup from "./pages/add-customer-formik-yup";

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="App">
      <Header />
      {/* <Rounting /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/customers-list"
          element={
            <CustomerList favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="/customers-list/:id" element={<CustomerDetail />} />
        <Route
          path="/favorite-customers"
          element={
            <FavoriteCustomers
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        {/* <Route path="/add-customer" element={<AddCustomerAntd />} /> */}
        <Route path="/add-customer" element={<AddCustomerFormikYup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
