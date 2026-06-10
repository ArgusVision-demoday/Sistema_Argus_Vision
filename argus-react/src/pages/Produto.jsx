import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Produto.css'

const thumbs = [
  { src: '/pageProduct/ArgusVision02.png', alt: 'Frontal' },
  { src: '/pageProduct/ArgusVision03.png', alt: 'Lateral' },
  { src: '/pageProduct/ArgusVision04.png', alt: 'Traseira' },
]

export default function Produto() {
  const [mainImg, setMainImg] = useState(thumbs[0])

  return (
    <main id="mainContent">
      {/* Hero */}
      <section id="inicio" className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="badge">O Futuro da Mobilidade</span>
            <h1>Veja o mundo<br />através da <span className="text-orange">Argus Vision</span></h1>
            <p>O primeiro dispositivo inteligente projetado especificamente para cães-guia, fornecendo alertas de obstáculos por áudio e vibração para uma navegação mais segura e independente.</p>
            <div className="hero__actions">
              <Link to="/desenvolvimento" className="btn btn-orange">Adquirir o Argus Vision</Link>
              <a href="#como-funciona" className="btn btn-outline">Explorar Produto</a>
            </div>
          </div>
          <figure className="hero__figure">
            <img src="/pageProduct/ArgusVision01.png" alt="Dispositivo Argus Vision em sua embalagem" />
          </figure>
        </div>
      </section>

      {/* Spotlight / Galeria */}
      <section className="section spotlight" id="produto">
        <div className="container spotlight-grid">
          <figure className="gallery">
            <div className="gallery-main">
              <img src={mainImg.src} alt={mainImg.alt} />
            </div>
            <div className="gallery-thumbs">
              {thumbs.map(t => (
                <img
                  key={t.src}
                  src={t.src}
                  alt={t.alt}
                  className={`thumb${mainImg.src === t.src ? ' active' : ''}`}
                  onClick={() => setMainImg(t)}
                />
              ))}
            </div>
          </figure>

          <div className="spotlight-info">
            <span className="badge badge-yellow">LANÇAMENTO</span>
            <h2>Argus <span className="text-orange">Guide</span></h2>
            <p>Dispositivo inteligente que se acopla a coleira do cão guia, oferecendo rastreamento GPS, feedback acessível por áudio e vibração, tudo em um design compacto e resistente.</p>
            <ul className="specs-list">
              <li>🛰️ GPS Preciso</li>
              <li>💧 IP67 à prova d'água</li>
              <li>🔋 Bateria 72h</li>
              <li>📳 Feedback Háptico</li>
            </ul>
            <p className="price-tag">R$ 1.400,00</p>
            <div className="action-group">
              <Link to="/desenvolvimento" className="btn btn-orange">Comprar Agora</Link>
              <a href="#tecnologia" className="btn btn-outline">Saiba Mais</a>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="como-funciona">
        <div className="container">
          <header className="section-header section-header--light text-center">
            <h2>Como Funciona o Argus</h2>
            <p>Um sistema integrado que transforma dados visuais em feedback sensorial imediato e preciso.</p>
          </header>
          <ol className="steps" role="list">
            <li className="steps__card card-hover">
              <h3>1. Alertas Inteligentes</h3>
              <p>Através de fones bluetooth pareados, o usuário recebe avisos de áudio espaciais indicando a direção e distância do obstáculo.</p>
            </li>
            <li className="steps__card card-hover">
              <h3>2. Navegação por Vibração</h3>
              <p>O dispositivo emite padrões de vibração na coleira que podem ser sentidos através da guia, oferecendo um canal secundário de feedback.</p>
            </li>
            <li className="steps__card card-hover">
              <h3>3. Autonomia Garantida</h3>
              <p>O sistema complementa o treinamento do cão, sem interferir na sua função, oferecendo uma camada extra de segurança.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Tecnologia */}
      <section id="tecnologia" className="tecnologia">
        <div className="container tecnologia__grid">
          <figure className="tecnologia__figure">
            <img src="/pageProduct/ArgusVision05.png" alt="Componentes internos do Argus Guide" />
          </figure>
          <div className="tecnologia__content">
            <h2>Tecnologia de Ponta, <span className="text-orange">Embutida</span></h2>
            <p>Cada milímetro do Argus foi projetado para abrigar sensores avançados mantendo um peso inferior a 150g, para não cansar o animal.</p>
            <ul className="tech-list" aria-label="Recursos de hardware">
              <li className="tech-list__item">
                <span className="tech-list__icon tech-list__icon--orange" aria-hidden="true">🛰️</span>
                <div><h3>GPS + GLONASS</h3><p>Dupla constelação para rastreamento preciso em qualquer ambiente.</p></div>
              </li>
              <li className="tech-list__item">
                <span className="tech-list__icon tech-list__icon--blue" aria-hidden="true">🔋</span>
                <div><h3>Bateria de Alta Densidade</h3><p>Autonomia de 3 dias com uso contínuo. Recarga USB-C rápida.</p></div>
              </li>
              <li className="tech-list__item">
                <span className="tech-list__icon tech-list__icon--yellow" aria-hidden="true">📶</span>
                <div><h3>Conectividade Bluetooth 5.2</h3><p>Conexão estável e de baixa latência com o smartphone e fones de ouvido do usuário.</p></div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="planos">
        <div className="container">
          <header className="section-header text-center">
            <h2 className="text-orange">Escolha o plano ideal para você</h2>
            <p>O dispositivo Argus é vendido separadamente. Melhore sua experiência com nossos planos de software e serviços.</p>
          </header>
          <div className="planos__grid">
            <article className="plano" aria-label="Plano Gratuito">
              <header className="plano__header">
                <h3>Gratuito (App)</h3>
                <p className="plano__subtitle">Aplicativo companion básico</p>
                <p className="plano__price">R$ 0<span>/mês</span></p>
              </header>
              <ul className="plano__features">
                <li>Configuração do dispositivo</li>
                <li>Status da bateria</li>
                <li>Histórico simples de uso</li>
                <li>Atualizações de firmware</li>
              </ul>
              <a href="#" className="btn btn-outline-blue">Baixar App</a>
            </article>

            <article className="plano plano--featured" aria-label="Plano Argus Pro — Mais Popular">
              <span className="badge badge--pop">Mais Popular</span>
              <header className="plano__header">
                <h3>Argus Pro</h3>
                <p className="plano__subtitle">Para o usuário diário ativo</p>
                <p className="plano__price">R$ 39<span>/mês</span></p>
              </header>
              <ul className="plano__features">
                <li><strong>Tudo do plano Gratuito</strong></li>
                <li>Personalização avançada de áudio</li>
                <li>Mapeamento de rotas frequentes</li>
                <li>Suporte prioritário 24/7</li>
                <li>Substituição expressa de peças</li>
              </ul>
              <a href="#" className="btn btn-orange">Assinar Pro</a>
            </article>

            <article className="plano" aria-label="Plano Argus Premium">
              <header className="plano__header">
                <h3>Argus Premium</h3>
                <p className="plano__subtitle">Para independência total</p>
                <p className="plano__price">R$ 69<span>/mês</span></p>
              </header>
              <ul className="plano__features">
                <li><strong>Tudo do plano Pro</strong></li>
                <li>Compartilhamento de rotas</li>
                <li>Integração com GPS avançado</li>
                <li>Detecção de obstáculos complexos</li>
                <li>Seguro total do dispositivo incluído</li>
              </ul>
              <a href="#" className="btn btn-outline-blue">Assinar Premium</a>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta bg-yellow">
        <div className="container cta-grid">
          <div className="cta-content">
            <h2>Pronto para passear<br /><span className="text-white">com a Argus Guide?</span></h2>
            <p>Adquira o Argus Guide e experimente uma nova forma de independência com seu cão-guia.</p>
            <Link to="/desenvolvimento" className="btn btn-orange">Adquira</Link>
            <p className="frete-text">Frete grátis para todo o Brasil.</p>
          </div>
          <figure className="cta-image">
            <img src="/pageProduct/ArgusVision06.png" alt="Argus Guide em destaque" />
          </figure>
        </div>
      </section>
    </main>
  )
}
