import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const testimonials = [
  { text: '"O ARGUS oferece ao tutor maior independência, permitindo acompanhar e monitorar seu cão-guia sem precisar de auxílio constante de terceiros."', name: 'Jose G.', img: '/pageHome/pessoa1.png' },
  { text: '"Me sinto muito mais seguro para andar em vias movimentadas. O retorno tátil e sonoro é super discreto, ninguém percebe que estou utilizando!"', name: 'Maria F.', img: '/pageHome/pessoa2.png' },
  { text: '"O rastreamento em tempo real do meu cão me trouxe uma tranquilidade inexplicável. A tecnologia é maravilhosa e o suporte da Argus é muito atencioso."', name: 'Carlos A.', img: '/pageHome/pessoa3.png' },
  { text: '"A autonomia é o que eu mais buscava. A bateria dura bastante e a sincronização com o smartphone não possui latência. Recomendo para todos."', name: 'Fernanda S.', img: '/pageHome/pessoa4.png' },
  { text: '"O Elion me ajudou nas configurações iniciais! Muito didático e com recursos avançados para tutores de primeira viagem. Fenomenal."', name: 'Roberto L.', img: '/pageHome/pessoa5.png' },
]

export default function Home() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const card = trackRef.current?.querySelector('.testimonial-card')
    if (!card) return
    trackRef.current.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' })
  }

  return (
    <main id="mainContent">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <h1>ARGUS VISION</h1>
          <p>Nosso propósito é trazer mais autonomia ao passear com seu cão através de tecnologia assistiva.</p>
          <Link to="/sobre" className="btn btn-orange">Saiba Mais</Link>
        </div>
      </section>

      {/* Multi-step */}
      <div className="multi-step" role="list" aria-label="Progresso de etapas">
        <div className="step completed" role="listitem" aria-current="step">
          <div className="circle">1</div>
          <div className="label">Início</div>
        </div>
        <div className="connector" aria-hidden="true" />
        <div className="step" role="listitem">
          <div className="circle">2</div>
          <div className="label">Explorar</div>
        </div>
        <div className="connector" aria-hidden="true" />
        <div className="step" role="listitem">
          <div className="circle">3</div>
          <div className="label">Cadastro</div>
        </div>
      </div>

      {/* Argus Guide */}
      <section className="argus-guide container">
        <div className="guide-wrapper">
          <div className="guide-text">
            <span className="badge">O futuro da mobilidade</span>
            <h2>Veja o mundo<br />através do <span>Argus Guide</span></h2>
            <p>O primeiro dispositivo inteligente projetado especificamente para cães-guia, fornecendo alertas de obstáculos por áudio e vibração traduzindo o ambiente urbano em alertas táteis e sonoros.</p>
            <Link to="/produto" className="btn btn-blue">Explorar Produto</Link>
          </div>
          <div className="guide-image">
            <img src="/pageHome/argusGuide.png" alt="Dispositivo Argus Guide" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features container">
        <h2 className="features-header">Mais <span>autonomia</span> ao passear<br />com seu cão-guia</h2>
        <div className="features-grid">
          <div className="feature-card bg-yellow card-hover">
            <div className="features-content">
              <svg width="32" height="32" fill="var(--secondary-blue)" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              <h3>Rastreamento em Tempo Real</h3>
              <p>O dispositivo informa a distância e direção do cão em metros, garantindo que o tutor saiba sempre onde ele está.</p>
            </div>
            <img src="/pageHome/Rectangle-14@2x.png" alt="Rastreamento em Tempo Real" />
          </div>

          <div className="feature-card bg-darkblue card-hover">
            <svg width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
            <h3>Feedback Sonoro e Tátil</h3>
            <p>Alertas sonoros simples e vibrações discretas ajudam o tutor a localizar o cão sem sobrecarregar sua percepção.</p>
          </div>

          <div className="feature-card bg-orange card-hover">
            <div className="features-content">
              <svg width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" /></svg>
              <h3>Controle via Smartphone</h3>
              <p>Pelo aplicativo ARGUS Vision, o tutor pode ajustar preferências e receber notificações acessíveis em tempo real.</p>
            </div>
            <img src="/pageHome/Rectangle-141@2x.png" alt="Controle via Smartphone" />
          </div>

          <div className="feature-card bg-lightblue card-hover">
            <svg width="32" height="32" fill="var(--primary-yellow)" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>
            <h3>Resposta Rápida</h3>
            <p>As informações chegam instantaneamente, reduzindo a ansiedade e aumentando a sensação de segurança.</p>
          </div>
        </div>
      </section>

      {/* Elion */}
      <section className="elion-section">
        <div className="container elion-wrapper">
          <div className="elion-image">
            <img src="/pageHome/elion.png" alt="Elion" />
          </div>
          <div className="elion-text">
            <h2>Conheça o <span>Elion</span></h2>
            <p>O seu cão-guia digital. Desenvolvido para tornar sua experiência mais simples, intuitiva e envolvente. Ele vai te auxiliar na resolução de dúvidas, compartilha dicas de uso e cuidados de forma clara e acessível, além de apresentar recursos e orientar sobre funcionalidades.</p>
            <button type="button" className="btn btn-yellow">Falar com Elion</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="community container">
        <h2>Nossa Comunidade</h2>
        <p>Experimente o ARGUS Guide e compartilhe da mesma emoção</p>
        <div className="carousel-wrapper" role="region" aria-label="Depoimentos de clientes">
          <button className="carousel-btn prev" onClick={() => scroll(-1)} aria-label="Depoimento anterior">&#10094;</button>
          <div className="testimonials" ref={trackRef}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p>{t.text}</p>
                <div className="testimonial-user">
                  <div className="user-avatar"><img src={t.img} alt={`Foto de ${t.name}`} /></div>
                  <div className="user-info">
                    <strong>{t.name}</strong>
                    <span>10/10 ⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={() => scroll(1)} aria-label="Próximo depoimento">&#10095;</button>
        </div>
      </section>

      {/* Sponsors */}
      <section className="sponsors container">
        <h2>Nossos Apoiadores</h2>
        <div className="sponsors-logos">
          <div className="sponsor-logo" style={{ backgroundColor: 'var(--secondary-blue)', color: 'white' }}>
            <img src="/pageHome/logoProa.png" alt="Logo PROA" />
          </div>
          <div className="sponsor-logo">
            <img src="/pageHome/logoSenac.png" alt="Logo SENAC" />
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
              <a href="#" className="btn btn-dark" role="button">
                <img src="/logoPlayStore.png" alt="Google Play" /> Google Play
              </a>
              <a href="#" className="btn btn-dark" role="button">
                <img src="/logoAppStore.png" alt="App Store" /> App Store
              </a>
            </div>
          </div>
          <div className="app-mockup">
            <img src="/app-mockup.png" alt="App Mockup" />
          </div>
        </div>
      </section>
    </main>
  )
}
