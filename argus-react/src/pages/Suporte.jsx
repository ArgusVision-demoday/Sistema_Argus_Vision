import { useState } from 'react'
import './Suporte.css'

export default function Suporte() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main id="mainContent">
      {/* Hero */}
      <section className="hero-support container">
        <div className="hero-card">
          <div className="hero-bg">
            <img src="/pageSuport/Group-77@2x.png" alt="Mulher usando aplicativo Argus" />
          </div>
          <div className="hero-content">
            <h1>Suporte ARGUS</h1>
            <p>Bem-vindo à Central de Suporte ARGUS. Escolha uma das opções abaixo para aprender, atualizar ou pedir ajuda.</p>
          </div>
        </div>
      </section>

      {/* Guia de Uso */}
      <section className="section container">
        <h2 className="section-title">Guia de Uso</h2>
        <div className="guia-grid">
          <div className="guia-card orange card-hover">
            <div className="guia-img">
              <img src="/pageSuport/conexao_coleira_argus.png" alt="Conectando à guia do cão" />
            </div>
            <div className="guia-text">
              <h3>1. Conecte o ARGUS à guia do cão.</h3>
            </div>
          </div>
          <div className="guia-card darkblue card-hover">
            <div className="guia-img">
              <img src="/pageSuport/tela_de_conexao.png" alt="Pareamento com aplicativo" />
            </div>
            <div className="guia-text">
              <h3>2. Ligue o dispositivo e aguarde o pareamento com o aplicativo.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container">
        <h2 className="section-title blue">Perguntas Frequentes (FAQ)</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h4>Preciso de internet para usar?</h4>
            <p>Não durante o uso. Apenas para atualizações e configurações via app.</p>
          </div>
          <div className="faq-item">
            <h4>Funciona com qualquer cão-guia?</h4>
            <p>Sim, o design é compatível com guias padrão.</p>
          </div>
          <div className="faq-item">
            <h4>O dispositivo é resistente à chuva?</h4>
            <p>Sim, é resistente à água e ao uso urbano diário.</p>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="download-app">
        <div className="download-wrapper">
          <div className="download-text">
            <h2>Baixe o Aplicativo</h2>
            <h3>Disponível para Android e iOS</h3>
            <p>Acesse a loja de aplicativos do seu celular e procure por ARGUS Mobilidade. Instale gratuitamente e comece a explorar uma nova forma de caminhar com autonomia.</p>
            <div className="store-buttons">
              <button type="button" className="btn btn-dark">
                <img src="/logoPlayStore.png" alt="Google Play" /> Google Play
              </button>
              <button type="button" className="btn btn-dark">
                <img src="/logoAppStore.png" alt="App Store" /> App Store
              </button>
            </div>
          </div>
          <div className="app-mockup">
            <img src="/app-mockup.png" alt="App Mockup" />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="section container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Fale com a Gente</h2>
            <p>Tem dúvidas, sugestões ou quer saber mais sobre o ARGUS? Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </div>
                <div><h4>Email Suporte</h4><span>suporte@argus.com</span></div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                </div>
                <div><h4>Telefone Suporte</h4><span>+55 (11) 9 9999-9999</span></div>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="contact-success">
              <h3>Mensagem enviada com sucesso!</h3>
              <p>Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" className="form-control" placeholder="Digite seu nome completo" required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="seunome@gmail.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="assunto">Assunto</label>
                <input type="text" id="assunto" className="form-control" placeholder="Assunto" required value={form.assunto} onChange={e => setForm({ ...form, assunto: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" className="form-control" placeholder="Nos conte como podemos te ajudar..." required value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-dark">Enviar Mensagem</button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
