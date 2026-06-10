import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div className="login-page" id="mainContent">
      <main className="login-container">
        <section className="login-hero">
          <img src="/pageLoginCadastro/img2.png" alt="Cão guia usando o argus guide" className="hero-bg-img" />
          <div className="hero-content">
            <div className="logo-area">
              <img src="/logo.png" alt="Logo Argus Vision" className="login-logo" />
              <span>ARGUS VISION</span>
            </div>
            <h1 className="hero-title">
              Sua autonomia, <br />
              <span className="highlight-orange">em </span>
              <span className="highlight-yellow">qualquer</span>
              <span className="highlight-blue"> lugar</span>.
            </h1>
            <p className="hero-subtitle">Conecte-se ao seu parceiro e explore o mundo com total confiança.</p>
            <div className="testimonial-bubble">
              <p>"O Argus não é só tecnologia; é uma nova forma de sentir o mundo ao meu redor. A precisão me deu a confiança que eu precisava para explorar novos lugares."</p>
              <div className="testimonial-author">
                <img src="/pageLoginCadastro/comunityImg.png" alt="Membro da comunidade" />
                <span>COMUNIDADE ARGUS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="login-form-area">
          <div className="form-wrapper">
            <Link to="/" className="btn-back">← Voltar</Link>
            <header className="form-header">
              <p className="welcome-text">Bem-vindo de volta</p>
              <h2 className="login-title">Login</h2>
            </header>
            <div className="social-login">
              <p>Entrar com</p>
              <div className="social-buttons">
                <button className="btn-social"><img src="/icons/googleIcon.png" alt="Google" /> Google</button>
                <button className="btn-social"><img src="/icons/facebookIcon.png" alt="Facebook" /> Facebook</button>
                <button className="btn-social">Apple</button>
              </div>
            </div>
            <div className="divider"><span>ou</span></div>
            <form onSubmit={e => e.preventDefault()}>
              <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <div className="input-field">
                  <input type="email" id="email" placeholder="seuemail@gmail.com" required />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="password">Senha</label>
                <div className="input-field">
                  <input type="password" id="password" placeholder="***************" required />
                </div>
                <a href="#" className="forgot-link">Esqueceu a senha?</a>
              </div>
              <button type="submit" className="btn-enter">Entrar</button>
            </form>
            <p className="signup-text">Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
          </div>
        </section>
      </main>
    </div>
  )
}
