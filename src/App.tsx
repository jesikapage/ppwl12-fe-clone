import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1"; // Halaman Main
import Page2 from "./pages/Page2"; // Halaman Room
import Navbar from "./components/Navbar";
import FooterLinks from "./components/footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/room" element={<Page2 />} />
          </Routes>
        </main>
        <FooterLinks />
      </div>
    </Router>
  );
}

export default App;