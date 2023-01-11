import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Certificates } from './pages/Certificates';
import { ContactMe } from './pages/Contact';
import { Home } from './pages/Home';
import { EBDoceria } from './pages/Project/EBDoceria';
import { Estate } from './pages/Project/Estate';
import { LandingPageProject } from './pages/Project/LandingPage';

export const RoutesList = () => {
  return (
   <>
   <Router>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/contact" element={<ContactMe/>} />
         <Route path="/landing-page-project" element={<LandingPageProject/>} />
         <Route path="/eb-doceria-project" element={<EBDoceria/>} />
         <Route path="/estate-project" element={<Estate/>} />
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/certificados" element={<Certificates/>}/>
      </Routes>
   </Router>
   </>
  )
}
