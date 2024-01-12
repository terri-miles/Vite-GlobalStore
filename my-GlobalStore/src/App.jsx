import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/NavBar";
import Home from "../src/Pages/Home";
import Cart from "../src/Pages/Cart";
import GlobalContextProvider from "../src/Utils/GlobalContext";



function App() {
  return (
    <>
    <GlobalContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </GlobalContextProvider>
    </>
  );
}

export default App;
