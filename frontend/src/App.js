
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/components.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/SignUp'
import LogIn from './components/LogIn'
import NotFound from './components/NotFound'
import ScrollToTop from './components/ScrollToTop'
import FindJob from './components/FindJob'
import SearchPage from './components/SearchPage'
import SignUpProvider from './components/SignUpProvider'
import SignUpProviderTwo from './components/SignUpProviderTwo'
import ProfileProvider from './components/ProfileProvider'



function App () {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <div className="content">
            <Navbar />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/searchpage" element={<SearchPage />} />
              <Route path="/findjob" element={<FindJob />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signupproviderone" element={<SignUpProvider />} />
              <Route path="/signupprovidertwo" element={<SignUpProviderTwo />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/profileprovider" element={<ProfileProvider />} />
            </Routes>
            <Footer />
          </div>
        </ScrollToTop>
      </div>
    </Router>
  )
}

export default App