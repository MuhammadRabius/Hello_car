import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Search from "./component/SearchComp/Search";
import Login from "./pages/Login/Login";
import Offer from "./pages/Offer/Offer";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user-login" element={<Login />} exact />
        <Route path="/user-register" element={<Register />} exact />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/" element={<Offer />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
