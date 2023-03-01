import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResult/SearchResult";
import AllOffer from "./pages/Offer/AllOffer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/searchresult" element={<SearchResult />} />
        <Route path="/user-login" element={<Login />} exact />
        <Route path="/user-register" element={<Register />} exact />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/all-offer" element={<AllOffer />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
