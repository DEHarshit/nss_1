import React, {useRef} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Events from './Events'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'
import Team from './Team'


function Main() {
  const bottomRef = useRef(null);
  const scroll = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar onContact={scroll}/>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Events' element={ <Events/>}/>
        <Route path='/Office' element={ <Team/>}/>
        <Route path='/Contact' element={ <Home/>}/>
      </Routes>
      <Contact/>
      <div ref={bottomRef} style={{ height: '1px' }}></div>
    </BrowserRouter>
  </React.StrictMode>
);
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />)