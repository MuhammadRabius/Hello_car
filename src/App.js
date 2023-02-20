import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
