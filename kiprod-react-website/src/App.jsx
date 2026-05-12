import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Academy from './pages/Academy'
import Partnerships from './pages/Partnerships'
import Institute from './pages/Institute'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}
