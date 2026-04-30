import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1"; 
import Page2 from "./pages/Page2"; 
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
            
            <Route path="*" element={
              <div className="flex items-center justify-center h-full py-20">
                <h1 className="text-2xl font-bold">Halaman Tidak Ditemukan (404)</h1>
              </div>
            } />
          </Routes>
        </main>

        <FooterLinks />
      </div>
    </Router>
  );
}

export default App;