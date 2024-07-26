import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';  
import Pag404 from './components/Pag404';
import Footer from './components/Footer';
import { AuthProvider } from './authContext';
import UserProfile from './components/UserProfile';

const App = () => {
  return(
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Pag404 />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </Router>
  );
};

export default App;
