import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo-area-footer" aria-label="Ir para o início">
              <div className="logo-img">
                <img src="/logoFooter.png" alt="Logo da Argus Vision" />
              </div>
              <span>ARGUS VISION</span>
            </Link>
            <p>Tecnologia Assistiva para tutores de Cães-Guia: Trazendo mais autonomia ao passear com seu cão</p>
            <div className="social-icons">
              <div className="social-icon">
                <a href="https://www.instagram.com/argus.vision.guia/" target="_blank" rel="noreferrer">
                  <img src="/icons/Vector7.svg" alt="Instagram" />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://github.com/ArgusVision-demoday" target="_blank" rel="noreferrer">
                  <img src="/icons/Vector8.svg" alt="GitHub" />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <img src="/icons/Vector9.svg" alt="Facebook" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h4>Institucional</h4>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/produto">Produto</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Suporte</h4>
            <ul>
              <li><Link to="/suporte">Fale conosco</Link></li>
              <li><Link to="/suporte">Dúvidas Frequentes (FAQ)</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos e condições</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2026 ARGUS VISION - Todos os Direitos Reservados | Termos e Condições | Política de Privacidade
        </div>
      </div>
    </footer>
  )
}
