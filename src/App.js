import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/user-login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
