import logo from './logo.svg';
import './App.css';
import './Styles/Button.css'
import Header from './Components/header';
import Landing from './Components/Landing';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Components/AboutMe';
import Professional from './Components/Professional';
import Pesronal from './Components/PersonalBlog';
import Contact from './Components/ContactMe';
import Resume from './Components/Resume';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/professional' element={<Professional/>}/>
        <Route path='/personal' element={<Pesronal/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
