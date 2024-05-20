import React from 'react'
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

export const Menu = () => {
  return (
    <div>
<BrowserRouter>
        <Link to='home'>Home</Link>
     <Link to='about'>About</Link>
     <Link to='contact'>Contact</Link>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
    </BrowserRouter> 
    

    </div>
  )
}
