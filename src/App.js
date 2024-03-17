import logo from './logo.svg';
import './App.css';
// import HOME from './pages/HOME';
import FAQ from './pages/Theme/FAQ';
// import Header from './pages/Theme/Header';
// import Footer from './pages/Theme/Footer';
// import Sidebar from './pages/Theme/Sidebar';
import Layout from './pages/Theme/Layout';
import Usermanagement from './pages/Theme/Usermanagement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="/usermanagement" element={ <Usermanagement/> } />
        <Route path="/faq" element={ <FAQ /> } />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/aboutus" element={<h1>About Us</h1>} />

      </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
   
  );
}

export default App;
