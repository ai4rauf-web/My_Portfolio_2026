import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import CaseStudyHubbit from './pages/CaseStudyHubbit'
import CaseStudyLashic from './pages/CaseStudyLashic'
import CaseStudyEmerson from './pages/CaseStudyEmerson'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Lab from './pages/Lab'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white pt-4 font-sans sm:pt-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects/hubbit" element={<CaseStudyHubbit />} />
          <Route path="/projects/lashic" element={<CaseStudyLashic />} />
          <Route path="/projects/emerson-deltav-psm" element={<CaseStudyEmerson />} />
          <Route path="/projects/:id" element={<ComingSoon title="Case Study" />} />
        </Routes>
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  )
}

export default App
