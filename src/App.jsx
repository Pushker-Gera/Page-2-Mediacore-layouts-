import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import UserName from "./pages/UserName";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <div className={isMenuOpen ? "activeNavBar" : ""}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Feed' element={<Feed />} />
        <Route path='/UserName' element={<UserName/>}/>
      </Routes>
    </div>
  );
};

export default App;