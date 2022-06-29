import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/components.css';
import ProfileData from './data.json';
import Signup from './components/SignUp';
import Login from './components/Login';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import FindJob from './components/FindJob';
import SearchPage from './components/SearchPage';
import SignUpProvider from './components/SignUpProvider';
import SignUpProviderTwo from './components/SignUpProviderTwo';
import SignUpProviderThree from './components/SignUpProviderThree';
import ProfileProvider from './components/ProfileProvider';
import ViewProfileProvider from './components/ViewProfileProvider';
import AddressPage from './components/AddressPage';

function App () {
  return (
    <Router>
      <div className="App" >
        <ScrollToTop>
          <div className="content">
            <Navbar />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/searchpage" element={<SearchPage searchResults={ProfileData} />} />
              <Route path="/findjob" element={<FindJob />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signupproviderone" element={<SignUpProvider />} />
              <Route path="/signupprovidertwo" element={<SignUpProviderTwo />} />
              <Route path="/signupproviderthree" element={<SignUpProviderThree />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profileprovider" element={<ProfileProvider />} />
              <Route path="/viewprofileprovider" element={<ViewProfileProvider />} />
              <Route path="/addresspage" element={<AddressPage />} />
            </Routes>
            <Footer />
          </div>

        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;