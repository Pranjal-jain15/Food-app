import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
