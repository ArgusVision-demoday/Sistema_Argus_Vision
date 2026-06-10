import { Link } from 'react-router-dom'
import './Confirmacao.css'

export default function Confirmacao() {
  return (
    <main id="mainContent" className="confirmacao-page">
      <section className="confirmation-container-wrapper">
        <div className="confirmation-container">
          <section className="confirmation-details">
            <div className="frame-parent27">
              <div className="compra-aprovada-wrapper">
                <h1 className="compra-aprovada">
                  <span>Compra </span>
                  <span className="aprovada">Aprovada!</span>
                </h1>
              </div>
              <p>Obrigado por escolher o Argus Guide. Seu pedido foi confirmado e já estamos preparando tudo para o envio.</p>
            </div>
          </section>

          <section className="order-summary2">
            <div className="order-information">
              <div className="order-details">
                <div className="order-labels">
                  <h3>Número do Pedido</h3>
                  <h3>Previsão de Entrega</h3>
                </div>
              </div>
              <div className="arg-986784-parent">
                <h3>#ARG-986784</h3>
                <h3>12 a 15 de Abril</h3>
              </div>
            </div>

            <div className="plan-details-wrapper">
              <div className="plan-details">
                <div className="plan-data">
                  <h3>1x Argus Guide</h3>
                  <div>Plano: PRO</div>
                  <h3>R$ 2.548,90</h3>
                </div>
              </div>
            </div>
          </section>

          <div className="track-order">
            <Link to="/" className="btn btn-orange">Acompanhar Pedido</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
