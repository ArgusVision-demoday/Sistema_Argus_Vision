import { Link } from 'react-router-dom'
import './Login.css'

export default function Cadastro() {
  return (
    <div className="login-container" id="mainContent">
      <section className="login-form-area">
        <div className="form-wrapper">
          <Link to="/" className="btn-back">← Voltar</Link>
          <p className="welcome-text">Crie sua conta Argus</p>
          <h1 className="login-title">Cadastro</h1>
          <div className="social-login">
            <div className="social-buttons">
              <button className="btn-social"><img src="/icons/googleIcon.png" alt="Google" /> Google</button>
              <button className="btn-social"><img src="/icons/facebookIcon.png" alt="Facebook" /> Facebook</button>
              <button className="btn-social">Apple</button>
            </div>
            <div className="divider"><span>Cadastrar-se com</span></div>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <div className="input-group">
              <label>Nome Completo</label>
              <div className="input-field"><input type="text" placeholder="Seu Nome Completo" /></div>
            </div>
            <div className="input-group">
              <label>CPF</label>
              <div className="input-field"><input type="text" placeholder="Digite seu CPF" /></div>
            </div>
            <div className="input-group">
              <label>E-mail</label>
              <div className="input-field"><input type="email" placeholder="seuemail@gmail.com" /></div>
            </div>
            <div className="input-group">
              <label>Senha</label>
              <div className="input-field"><input type="password" placeholder="***************" /></div>
            </div>
            <div className="input-group">
              <label>Confirmar Senha</label>
              <div className="input-field"><input type="password" placeholder="***************" /></div>
            </div>
            <div className="checkbox-area">
              <input type="checkbox" id="lgpd" />
              <label htmlFor="lgpd">Li e concordo com os Termos de Consentimento e Tratamento de Dados conforme a LGPD.</label>
            </div>
            <button type="submit" className="btn-enter">Criar minha conta</button>
          </form>
          <p className="signup-text">Já tem conta? <Link to="/login">Fazer Login</Link></p>
        </div>
      </section>

      <aside className="login-hero">
        <img src="/pageLoginCadastro/img.png" alt="Cão Guia" className="hero-bg-img" />
        <div className="hero-content">
          <div className="logo-area">
            <img src="/logo.png" alt="Logo" className="login-logo" />
            <span>ARGUS VISION</span>
          </div>
          <h2 className="hero-title">Sua autonomia, <br /><span className="highlight-orange">em </span><span className="highlight-yellow">qualquer</span><span className="highlight-blue"> lugar</span>.</h2>
          <p className="hero-subtitle">Conecte-se ao seu parceiro e explore o mundo com total confiança.</p>
          <div className="testimonial-bubble">
            <p>"O Argus não é só tecnologia; é uma nova forma de sentir o mundo ao meu redor. A precisão me deu a confiança que eu precisava para explorar novos lugares."</p>
            <div className="testimonial-author">
              <img src="/pageLoginCadastro/comunityImg.png" alt="Comunidade" />
              <span>COMUNIDADE ARGUS</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
