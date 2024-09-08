import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Signin from './pages/signin';
import SignUp from './pages/signup';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element= {<Dashboard/>}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    
    </BrowserRouter>
    
  )
}
