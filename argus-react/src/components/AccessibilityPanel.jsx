import { useState, useEffect, useCallback } from 'react'

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('av_fontSize') || 'normal')
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem('av_highContrast') === 'true')
  const [reduceMotion, setReduceMotion] = useState(() => localStorage.getItem('av_reduceMotion') === 'true')

  useEffect(() => {
    document.body.classList.remove('font-small', 'font-large')
    if (fontSize === 'small') document.body.classList.add('font-small')
    if (fontSize === 'large') document.body.classList.add('font-large')
    localStorage.setItem('av_fontSize', fontSize)
  }, [fontSize])

  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast)
    localStorage.setItem('av_highContrast', highContrast)
  }, [highContrast])

  useEffect(() => {
    document.body.classList.toggle('reduce-motion', reduceMotion)
    localStorage.setItem('av_reduceMotion', reduceMotion)
  }, [reduceMotion])

  const handleReset = () => {
    setFontSize('normal')
    setHighContrast(false)
    setReduceMotion(false)
  }

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <button
        className="accessibility-toggle"
        id="accessibilityToggle"
        aria-controls="accessibilityPanel"
        aria-expanded={open}
        aria-label="Abrir painel de acessibilidade"
        onClick={() => setOpen(prev => !prev)}
      />
      <div
        className={`accessibility-panel${open ? ' open' : ''}`}
        id="accessibilityPanel"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Preferências de acessibilidade"
      >
        <div className="accessibility-panel-header">
          <h2>Preferências de acessibilidade</h2>
          <button
            type="button"
            className="accessibility-close"
            aria-label="Fechar painel de acessibilidade"
            onClick={() => setOpen(false)}
          >✕</button>
        </div>

        <form className="accessibility-form" aria-label="Configurações de acessibilidade">
          <fieldset>
            <legend>Tamanho da fonte</legend>
            <div className="font-size-options" role="radiogroup" aria-label="Tamanho da fonte">
              {['small', 'normal', 'large'].map(size => (
                <label key={size} className="font-size-option">
                  <input
                    type="radio"
                    name="fontSize"
                    value={size}
                    checked={fontSize === size}
                    onChange={() => setFontSize(size)}
                  />
                  <span>{{ small: 'Pequeno', normal: 'Normal', large: 'Grande' }[size]}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Contraste</legend>
            <label>
              <input
                type="checkbox"
                checked={highContrast}
                onChange={e => setHighContrast(e.target.checked)}
              />
              Alto contraste
            </label>
          </fieldset>

          <fieldset>
            <legend>Movimento</legend>
            <label>
              <input
                type="checkbox"
                checked={reduceMotion}
                onChange={e => setReduceMotion(e.target.checked)}
              />
              Reduzir animações
            </label>
          </fieldset>

          <button type="button" className="btn btn-outline" onClick={handleReset}>
            Reiniciar padrão
          </button>
        </form>
      </div>
    </>
  )
}
