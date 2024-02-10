
import './App.css'
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Login from './Components/Login';

// bg-gradient-to-b from-[#FFEADD] via-[rgb(130,184,237)] to-[#FF8989]
function App() {
  
  return (
    <div className='z-0 w-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${"/src/assets/BG.svg"})` }}>
    <Navbar/>
    <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/logsign' element={<Login/>}></Route>
    </Routes>
    </div>
    
  )
}

export default App;
