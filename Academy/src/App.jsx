import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Courses from './pages/Courses'
import GirlsCorner  from './pages/GirlsCorner'
import Toppers from './pages/Toppers'
import Gallery from './pages/Gallery'
import Latest from './pages/Latest'
import About from './pages/About'
import Contact from './pages/Contact'
import UpcomingBatch from './components/upcomingbatch'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/GirlsCorner" element={<GirlsCorner/>} />
        <Route path="/Toppers" element={<Toppers />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Latest" element={<Latest />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
          <Route path="/upcomingbatch" element={<UpcomingBatch />} />
      </Routes>
    </>
  )
}
