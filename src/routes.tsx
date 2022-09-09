import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ContactMe } from './pages/Contact';
import { Home } from './pages/Home';

export const RoutesList = () => {
  return (
   <>
   <Router>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/contact" element={<ContactMe/>} />
      </Routes>
   </Router>
   </>
  )
}
