import { Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
