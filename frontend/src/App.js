import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/components.css';
import Signup from './components/SignUp';
import LogIn from './components/LogIn';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <ScrollToTop>
          <div className="content">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </div>

        </ScrollToTop>
        <div className='footerDiv'>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
