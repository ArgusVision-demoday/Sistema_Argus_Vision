import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container nav-container">
        <Link to="/" className="logo-area" aria-label="Ir para o início">
          <div className="logo-img">
            <img src="/logo.png" alt="Logo da Argus Vision" />
          </div>
          <span>ARGUS VISION</span>
        </Link>

        <nav>
          <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
            <li><NavLink to="/" end onClick={closeMenu}>Início</NavLink></li>
            <li><NavLink to="/sobre" onClick={closeMenu}>Sobre</NavLink></li>
            <li><NavLink to="/produto" onClick={closeMenu}>Produto</NavLink></li>
            <li><NavLink to="/suporte" onClick={closeMenu}>Suporte</NavLink></li>
            <li className="mobile-only-btn" style={{ display: menuOpen ? 'block' : 'none' }}>
              <Link to="/cadastro" className="btn btn-blue" onClick={closeMenu}>Cadastre-se</Link>
            </li>
          </ul>
        </nav>

        <div className="user-actions">
          <Link to="/login" className="icon-profile" aria-label="Entrar">
            <svg viewBox="0 0 24 24" fill="var(--primary-blue)" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </Link>
          <Link to="/cadastro" className="btn btn-blue">Cadastre-se</Link>
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-controls="navLinks"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
