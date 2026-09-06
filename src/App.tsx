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
import CaseStudyDaiticsCdp from './pages/CaseStudyDaiticsCdp'
import CaseStudyMvivaCvmaas from './pages/CaseStudyMvivaCvmaas'
import CaseStudyRmnDolphin from './pages/CaseStudyRmnDolphin'
import CaseStudyShopManage from './pages/CaseStudyShopManage'
import PasswordGate from './components/PasswordGate'
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
          <Route
            path="/projects/hubbit"
            element={
              <PasswordGate
                slug="hubbit"
                title="Hubbit"
                subtitle="B2B e-commerce for material bidding and procurement."
              >
                <CaseStudyHubbit />
              </PasswordGate>
            }
          />
          <Route
            path="/projects/lashic"
            element={
              <PasswordGate
                slug="lashic"
                title="Lashic"
                subtitle="IoT nursing-care platform for elderly monitoring."
              >
                <CaseStudyLashic />
              </PasswordGate>
            }
          />
          <Route
            path="/projects/emerson-deltav-psm"
            element={
              <PasswordGate
                slug="emerson-deltav-psm"
                title="Emerson DeltaV™ PSM"
                subtitle="Recipe management for regulated pharma manufacturing."
              >
                <CaseStudyEmerson />
              </PasswordGate>
            }
          />
          <Route
            path="/projects/daitics-cdp"
            element={
              <PasswordGate
                slug="daitics-cdp"
                title="Daitics AI CDP"
                subtitle="This case study describes an R&D platform."
              >
                <CaseStudyDaiticsCdp />
              </PasswordGate>
            }
          />
          <Route
            path="/projects/mviva-cvmaas"
            element={
              <PasswordGate
                slug="mviva-cvmaas"
                title="mViva + CVMaaS"
                subtitle="Enterprise campaign execution."
              >
                <CaseStudyMvivaCvmaas />
              </PasswordGate>
            }
          />
          <Route
            path="/projects/rmn-dolphin"
            element={
              <PasswordGate
                slug="rmn-dolphin"
                title="RMN Dolphin"
                subtitle="Retail media network on first-party telco data."
              >
                <CaseStudyRmnDolphin />
              </PasswordGate>
            }
          />
          <Route
            path="/projects/shop-manage"
            element={
              <PasswordGate
                slug="shop-manage"
                title="Shop & Manage — SIM & plan revamp"
                subtitle="Consumer-facing plan management."
              >
                <CaseStudyShopManage />
              </PasswordGate>
            }
          />
          <Route path="/projects/:id" element={<ComingSoon title="Case Study" />} />
        </Routes>
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  )
}

export default App
