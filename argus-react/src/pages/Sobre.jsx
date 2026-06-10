import { useState, useEffect } from 'react'
import './Sobre.css'

const teamMembers = [
  { name: 'Esther Dourado', role: 'Product Owner, Desenvolvedora Full Stack', img: '/pageAbout/membroEsther.png', color: 'bg-blue', github: 'https://github.com/EstherDourado', linkedin: 'https://www.linkedin.com/in/esther-batista/' },
  { name: 'Renan Teixeira', role: 'Scrum Master, Desenvolvedor Full Stack', img: '/pageAbout/membroRenan.png', color: 'bg-orange', github: 'https://github.com/renan-teixx', linkedin: 'https://www.linkedin.com/in/renan-de-castro-teixeira/' },
  { name: 'Mary Lacerda', role: 'Desenvolvedora Full Stack, UI/UX Design', img: '/pageAbout/membroMary.png', color: 'bg-yellow', github: 'https://github.com/mellacer', linkedin: 'https://www.linkedin.com/in/marylacerda583/' },
  { name: 'Evelyn Alves', role: 'Desenvolvedora Full Stack, Marketing', img: '/pageAbout/membroEvelyn.png', color: 'bg-blue', github: 'https://github.com/evelynalves2003', linkedin: 'https://www.linkedin.com/in/evelyn-alves-54a721318/' },
  { name: 'João Vitor Monteiro', role: 'Desenvolvedor Full Stack', img: '/pageAbout/membroJoao.png', color: 'bg-orange', github: 'https://github.com/joaovitorbfm', linkedin: 'https://www.linkedin.com/in/jo%C3%A3omonteiro9/' },
  { name: 'Matheus Silveira', role: 'Desenvolvedor Full Stack, Financeiro', img: '/pageAbout/membroMatheus.png', color: 'bg-yellow', github: 'https://github.com/matheusnsi', linkedin: 'https://www.linkedin.com/in/matheusns-dev/' },
]

const slides = [
  { img: '/pageAbout/card1.png', alt: 'Inovação 1' },
  { img: '/pageAbout/card2.png', alt: 'Inovação 2' },
  { img: '/pageAbout/card3.png', alt: 'Inovação 3' },
]

export default function Sobre() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 10000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <main id="mainContent" className="container">
      <img src="/pageAbout/equipe.png" alt="Imagem de Capa" className="hero-image" />

      <section className="hero-section">
        <div className="text-elion">
          <h1>Criadores da <span>Argus Vision</span></h1>
          <p className="hero-description">
            Cada rosto aqui não mediu esforços para fazer esse projeto ganhar vida, e garantir que a Argus fosse não só inovadora, mas um produto capaz de transformar a forma com que os deficientes visuais passeiam com seus cães-guia. Juntos realizamos pesquisas, desenvolvimento tecnológico, design de interface e negócios.
          </p>
        </div>
        <img src="/pageAbout/elion2.png" className="elion-image" alt="Elion" />
      </section>

      {/* Missão, Visão, Valores */}
      <section className="info-cards-container">
        <div className="info-card card-mission card-hover">
          <div className="icon-placeholder"><img src="/pageAbout/elionMissao.png" alt="" /></div>
          <h3 className="missao">Missão</h3>
          <p>Promover mais autonomia, segurança e inclusão social de pessoas com deficiência visual, ao passearem com seus cães-guia.</p>
        </div>
        <div className="info-card card-values card-hover">
          <div className="icon-placeholder"><img src="/pageAbout/elionVisao.png" alt="" /></div>
          <h3 className="visao">Visão</h3>
          <p>Ser pioneiros nacionais no desenvolvimento de tecnologias assistivas integradas para cães-guia.</p>
        </div>
        <div className="info-card card-vision card-hover">
          <div className="icon-placeholder"><img src="/pageAbout/elionValores.png" alt="" /></div>
          <h3 className="valores">Valores</h3>
          <p>Empatia com o usuário, foco total em acessibilidade, inovação contínua e profundo respeito e cuidado com o bem-estar animal.</p>
        </div>
      </section>

      {/* Carrossel de Inovação */}
      <section className="innovation-section">
        <div className="carousel-simple">
          <img src={slides[currentSlide].img} alt={slides[currentSlide].alt} className="d-block w-100" />
          <div className="carousel-indicators-simple">
            {slides.map((_, i) => (
              <button key={i} className={i === currentSlide ? 'active' : ''} onClick={() => setCurrentSlide(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
        <div className="horizon-box card-hover">
          <h2>Rumo a novos <br /> horizontes</h2>
          <p>Nosso objetivo é expandir a ARGUS, levando nossa tecnologia inclusiva para diferentes regiões e transformando vidas além das fronteiras locais.</p>
        </div>
      </section>

      {/* ODS */}
      <section className="ods-section">
        <img src="/pageAbout/cidade.png" alt="Imagem ODS Cidade" className="ods-city-bg" />
        <div className="ods-content">
          <div className="ods-header">
            <h2>Compromisso com o Futuro Sustentável</h2>
            <p>Nossa missão está conectada aos Objetivos de Desenvolvimento Sustentável da ONU, com foco em inclusão e acessibilidade para todos.</p>
          </div>
          <div className="ods-grid">
            <div className="ods-item ods3">
              <div className="ods-image-placeholder"><img src="/pageAbout/ods3.png" alt="ODS 3" /></div>
              <div className="ods-text">
                <h4>ODS 3: Boa saúde e bem-estar:</h4>
                <p>Contribuímos para cidades mais inclusivas e seguras, onde a mobilidade assistida é parte essencial da infraestrutura urbana.</p>
              </div>
            </div>
            <div className="ods-item ods9">
              <div className="ods-image-placeholder"><img src="/pageAbout/ods9.png" alt="ODS 9" /></div>
              <div className="ods-text">
                <h4>ODS 9: Indústria, inovação e infraestrutura:</h4>
                <p>Contribuímos para cidades mais inclusivas e seguras, onde a mobilidade assistida é parte essencial da infraestrutura urbana.</p>
              </div>
            </div>
          </div>
          <div className="ods-item ods10">
            <div className="ods-image-placeholder"><img src="/pageAbout/ods10.png" alt="ODS 10" /></div>
            <div className="ods-text">
              <h4>ODS 10: Redução das Desigualdades:</h4>
              <p>Promovemos a participação plena de pessoas com deficiência visual, fortalecendo sua autonomia e presença ativa na sociedade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="team-section">
        <h2 className="team-title">Equipe <span>Argus</span></h2>
        <div className="team-layout">
          {Array.from({ length: Math.ceil(teamMembers.length / 2) }, (_, rowIdx) => (
            <div className="team-row" key={rowIdx}>
              {teamMembers.slice(rowIdx * 2, rowIdx * 2 + 2).map(member => (
                <div className="team-card" key={member.name}>
                  <div className="team-photo">
                    <img src={member.img} alt={`Foto de ${member.name}`} className="team-photo-img" />
                  </div>
                  <div className={`team-info ${member.color}`}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="social-icons">
                      <a href={member.github} target="_blank" rel="noreferrer"><img src="/icons/Social-Icons1.svg" alt="GitHub" /></a>
                      <a href={member.linkedin} target="_blank" rel="noreferrer"><img src="/icons/Social-Icons2.svg" alt="LinkedIn" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
