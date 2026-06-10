(function() {
  const styleContent = `
  .skip-link {
    position: absolute;
    top: -48px;
    left: 16px;
    background: #1e3a8a;
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px;
    z-index: 9999;
    transition: top 0.2s ease;
    text-decoration: none;
    font-size: 0.95rem;
  }
  .skip-link:focus {
    top: 16px;
  }
  .accessibility-toggle {
    position: fixed;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9998;
    width: 54px;
    height: 54px;
    background: #1e3a8a;
    color: #fff;
    border: none;
    border-radius: 50%;
    padding: 0;
    font-size: 1.2rem;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0,0,0,0.18);
    display: grid;
    place-items: center;
  }
  .accessibility-toggle::before {
    content: '♿';
  }
  .accessibility-toggle:focus-visible {
    outline: 3px solid #ffd600;
    outline-offset: 3px;
  }
  .accessibility-panel {
    position: fixed;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
    width: min(420px, calc(100% - 48px));
    max-width: 420px;
    max-height: calc(100vh - 160px);
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid rgba(30, 58, 138, 0.15);
    border-radius: 18px;
    box-shadow: 0 24px 48px rgba(0,0,0,0.18);
    padding: 16px;
    overflow-y: auto;
    overflow-x: hidden;
    display: none;
    z-index: 9998;
  }
  .accessibility-panel.open {
    display: block;
  }
  .accessibility-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 18px;
  }
  .accessibility-panel-header h2 {
    font-size: 1rem;
    margin: 0;
  }
  .accessibility-close {
    background: transparent;
    border: none;
    color: #1e3a8a;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .accessibility-close:focus-visible {
    outline: 3px solid #ffd600;
    outline-offset: 3px;
  }
  .accessibility-form {
    display: grid;
    gap: 16px;
  }
  .accessibility-form fieldset {
    border: 1px solid rgba(30, 58, 138, 0.15);
    border-radius: 14px;
    padding: 14px 16px;
    display: grid;
    gap: 10px;
  }
  .accessibility-form legend {
    font-size: 0.95rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 12px;
    display: block;
  }
  .accessibility-form label {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.95rem;
    line-height: 1.4;
    cursor: pointer;
  }
  .font-size-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
  .font-size-option {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    padding: 12px 14px;
    box-sizing: border-box;
    border: 1px solid rgba(30, 58, 138, 0.2);
    border-radius: 16px;
    background: rgba(30, 58, 138, 0.04);
    color: #1e3a8a;
    font-size: 0.95rem;
    font-weight: 700;
    transition: 0.2s ease;
    position: relative;
    text-align: left;
    width: 100%;
  }
  .font-size-option input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    left: -9999px;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  .font-size-option span {
    position: relative;
    display: block;
    width: 100%;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    line-height: 1.1;
  }
  .font-size-option span::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid #1e3a8a;
    border-radius: 2px;
    background: #fff;
    flex-shrink: 0;
    margin-right: 12px;
  }
  .font-size-option input:checked + span::before {
    background: #1e3a8a;
    box-shadow: inset 0 0 0 3px #fff;
  }
  .font-size-option input:checked + span {
    color: #1e3a8a;
  }
  .font-size-option:hover {
    border-color: #1e3a8a;
    background: rgba(30, 58, 138, 0.08);
  }
  .font-size-option:focus-within {
    outline: 3px solid #ffd600;
    outline-offset: 3px;
  }
  .accessibility-form fieldset > label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    padding: 12px 14px;
    border-radius: 16px;
    border: 1px solid rgba(30, 58, 138, 0.2);
    background: rgba(30, 58, 138, 0.04);
    box-sizing: border-box;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 700;
    color: #1e3a8a;
    width: 100%;
    transition: 0.2s ease;
  }
  .accessibility-form fieldset > label:hover {
    border-color: #1e3a8a;
    background: rgba(30, 58, 138, 0.08);
  }
  .accessibility-form fieldset > label:focus-within {
    outline: 3px solid #ffd600;
    outline-offset: 3px;
  }
  .accessibility-form fieldset > label input {
    margin: 0;
  }
  .accessibility-form input[type="radio"],
  .accessibility-form input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    border-radius: 2px;
  }
  .accessibility-form .btn {
    width: 100%;
    margin-top: 8px;
  }
  body.font-small {
    font-size: 0.92rem;
  }
  body.font-large {
    font-size: 1.12rem;
  }
  body.high-contrast {
    background: #000;
    color: #fff;
  }
  body.high-contrast a {
    color: #ffd600 !important;
    background: rgba(255, 214, 0, 0.15) !important;
    padding: 0 2px;
    border-radius: 2px;
  }
  body.high-contrast .btn {
    color: #000 !important;
    background: #ffd600 !important;
    border-color: #ffd600 !important;
  }
  body.high-contrast .accessibility-toggle {
    color: #000 !important;
    background: #ffd600 !important;
    box-shadow: 0 10px 30px rgba(255, 214, 0, 0.3) !important;
  }
  body.high-contrast .accessibility-panel {
    background: #000;
    border-color: #ffd600;
    border-width: 2px;
    color: #fff;
    box-shadow: 0 0 0 3px rgba(255, 214, 0, 0.2);
  }
  body.high-contrast .accessibility-panel h2,
  body.high-contrast .accessibility-panel legend,
  body.high-contrast .accessibility-panel label,
  body.high-contrast .accessibility-panel .accessibility-close {
    color: #fff !important;
  }
  body.high-contrast .accessibility-panel .btn,
  body.high-contrast .accessibility-panel .btn-outline {
    color: #fff !important;
    background: transparent !important;
    border-color: #fff !important;
  }
  body.high-contrast .accessibility-panel fieldset {
    border-color: #ffd600;
    border-width: 2px;
    background: rgba(255, 214, 0, 0.05);
  }
  body.high-contrast input[type="radio"],
  body.high-contrast input[type="checkbox"] {
    outline: 3px solid #ffd600;
    outline-offset: 2px;
    accent-color: #ffd600;
    border-color: #ffd600 !important;
  }
  body.high-contrast .btn-orange,
  body.high-contrast .btn-blue,
  body.high-contrast .btn-yellow,
  body.high-contrast .btn-dark {
    background: #ffd600 !important;
    color: #000 !important;
    border-color: #000 !important;
  }
  body.reduce-motion *,
  body.reduce-motion *::before,
  body.reduce-motion *::after {
    animation-duration: 0.001ms !important;
    animation-delay: 0ms !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  @media (max-width: 600px) {
    .accessibility-toggle,
    .accessibility-panel {
      right: 12px;
      left: 12px;
      width: auto;
    }
  }
  `;

  const styleNode = document.createElement('style');
  styleNode.textContent = styleContent;
  document.head.appendChild(styleNode);

  const toggle = document.getElementById('accessibilityToggle');
  const panel = document.getElementById('accessibilityPanel');
  const closeButton = document.getElementById('accessibilityClose');
  const resetButton = document.getElementById('accessibilityReset');
  const fontRadios = document.querySelectorAll('input[name="fontSize"]');
  const highContrastCheckbox = document.getElementById('highContrastToggle');
  const reduceMotionCheckbox = document.getElementById('reduceMotionToggle');

  const preferences = {
    fontSize: localStorage.getItem('av_fontSize') || 'normal',
    highContrast: localStorage.getItem('av_highContrast') === 'true',
    reduceMotion: localStorage.getItem('av_reduceMotion') === 'true',
  };

  const applyPreferences = () => {
    document.body.classList.remove('font-small', 'font-large');
    if (preferences.fontSize === 'small') {
      document.body.classList.add('font-small');
    } else if (preferences.fontSize === 'large') {
      document.body.classList.add('font-large');
    }
    document.body.classList.toggle('high-contrast', preferences.highContrast);
    document.body.classList.toggle('reduce-motion', preferences.reduceMotion);

    if (fontRadios.length) {
      fontRadios.forEach((radio) => {
        radio.checked = radio.value === preferences.fontSize;
      });
    }

    if (highContrastCheckbox) {
      highContrastCheckbox.checked = preferences.highContrast;
    }
    if (reduceMotionCheckbox) {
      reduceMotionCheckbox.checked = preferences.reduceMotion;
    }
  };

  const savePreferences = () => {
    localStorage.setItem('av_fontSize', preferences.fontSize);
    localStorage.setItem('av_highContrast', preferences.highContrast);
    localStorage.setItem('av_reduceMotion', preferences.reduceMotion);
  };

  const openPanel = () => {
    if (!panel || !toggle) return;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    const firstControl = panel.querySelector('input, button');
    if (firstControl) firstControl.focus();
  };

  const closePanel = () => {
    if (!panel || !toggle) return;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  };

  const updatePreference = () => {
    if (!fontRadios.length || !highContrastCheckbox || !reduceMotionCheckbox) return;
    preferences.fontSize = document.querySelector('input[name="fontSize"]:checked')?.value || 'normal';
    preferences.highContrast = highContrastCheckbox.checked;
    preferences.reduceMotion = reduceMotionCheckbox.checked;
    applyPreferences();
    savePreferences();
  };

  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      panel.classList.contains('open') ? closePanel() : openPanel();
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', closePanel);
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      preferences.fontSize = 'normal';
      preferences.highContrast = false;
      preferences.reduceMotion = false;
      applyPreferences();
      savePreferences();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel && panel.classList.contains('open')) {
      closePanel();
    }
  });

  if (fontRadios.length) {
    fontRadios.forEach((radio) => {
      radio.addEventListener('change', updatePreference);
    });
  }

  if (highContrastCheckbox) {
    highContrastCheckbox.addEventListener('change', updatePreference);
  }

  if (reduceMotionCheckbox) {
    reduceMotionCheckbox.addEventListener('change', updatePreference);
  }

  applyPreferences();
})();