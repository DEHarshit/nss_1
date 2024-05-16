import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
