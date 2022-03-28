import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product</h1>} />
          <Route path="/add" element={<h1>add Product</h1>} />
          <Route path="/update" element={<h1>update</h1>} />
          <Route path="/logout" element={<h1>logout</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
        </Routes>
        <h1>E-DashBoard hai</h1>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
