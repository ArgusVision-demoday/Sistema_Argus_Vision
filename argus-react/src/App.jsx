import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AccessibilityPanel from './components/AccessibilityPanel'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#mainContent">Pular para o conteúdo</a>
      <AccessibilityPanel />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
