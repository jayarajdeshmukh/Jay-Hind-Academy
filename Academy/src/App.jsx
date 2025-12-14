import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Courses from './pages/Courses'
import Toppers from './pages/Toppers'
import Gallery from './pages/Gallery'
import Latest from './pages/Latest'
import Scolarship from './pages/Scolarship'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Toppers" element={<Toppers />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Latest" element={<Latest />} />
        <Route path="/Scolarship" element={<Scolarship />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}
