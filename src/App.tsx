<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import PageExample from './pages/PageExample';
import Navbar from './components/Navbar';
import FooterLinks from "./components/footer";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import PageExample from "./pages/PageExample";
import Navbar from "./components/Navbar";
>>>>>>> origin/rating-dan-review

function App() {
  return (
    <Router>
<<<<<<< HEAD
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page-2" element={<Page2 />} />
          <Route path="/page-example" element={<PageExample />} />
        </Routes>
        
      <FooterLinks />
=======
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-example" element={<PageExample />} />
      </Routes>
>>>>>>> origin/rating-dan-review
    </Router>
    
  );
}

export default App;
