import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Signin from './pages/signin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/DashBoard';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element= {<Dashboard/>}/>
        </Route>
        
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}
