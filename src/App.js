import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Footer from "./components/Footer";
import recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <Router>

      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />

    </Router>

  );
}

export default App;
