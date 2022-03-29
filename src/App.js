import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/AddProduct";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Privatecomp from "./Components/Privatecomp";
import Productlist from "./Components/Productlist";
import SignupPage from "./Components/SignupPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Privatecomp />}>
            <Route path="/" element={<Productlist />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h1>update</h1>} />
            <Route path="/logout" element={<h1>logout</h1>} />
            <Route path="/profile" element={<h1>profile</h1>} />
          </Route>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
