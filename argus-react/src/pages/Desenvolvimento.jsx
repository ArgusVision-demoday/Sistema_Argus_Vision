import { Link } from 'react-router-dom'
import './Desenvolvimento.css'

export default function Desenvolvimento() {
  return (
    <main id="mainContent" className="construction-container">
      <div className="construction-content">
        <img src="/pageEmDesenvolvimento/elion.png" alt="Mascote Elion trabalhando" className="construction-elion" />
        <h1>Estamos preparando algo <span>incrível!</span></h1>
        <p>Nossa equipe está trabalhando duro para finalizar esta página. Em breve, você terá acesso a mais funcionalidades da <strong>Argus Vision</strong>.</p>
        <div className="status-box">
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
          <span>Progresso: 85%</span>
        </div>
        <Link to="/" className="btn btn-orange">Voltar para o Início</Link>
      </div>
    </main>
  )
}
