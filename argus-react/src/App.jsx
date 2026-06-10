import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AccessibilityPanel from './components/AccessibilityPanel'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produto from './pages/Produto'
import Suporte from './pages/Suporte'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Confirmacao from './pages/Confirmacao'
import Desenvolvimento from './pages/Desenvolvimento'

const noLayoutRoutes = ['/login', '/cadastro']

export default function App() {
  return (
    <>
      <a className="skip-link" href="#mainContent">Pular para o conteúdo</a>
      <AccessibilityPanel />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="/confirmacao" element={<Confirmacao />} />
                <Route path="/desenvolvimento" element={<Desenvolvimento />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}
