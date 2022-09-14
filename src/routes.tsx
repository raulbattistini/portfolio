import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Certificates } from './pages/Certificates';
import { ContactMe } from './pages/Contact';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/Project';

export const RoutesList = () => {
  return (
   <>
   <Router>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/contact" element={<ContactMe/>} />
         <Route path="/:project" element={<ProjectPage/>} />
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/certificados" element={<Certificates/>}/>
      </Routes>
   </Router>
   </>
  )
}
