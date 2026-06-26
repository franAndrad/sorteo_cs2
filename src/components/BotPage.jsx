const DISCORD_INVITE = "https://discord.com/oauth2/authorize?client_id=1519934873777999892&permissions=0&integration_type=0&scope=bot"

export default function BotPage({ onBack }) {
  return (
    <div className="bot-page">
      <div className="bot-page-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m7-7l-7 7 7 7" />
          </svg>
          VOLVER
        </button>
        <header className="cs2-header">
          <h1>CS<span>2</span></h1>
          <p className="sub">Bot de Discord</p>
        </header>
      </div>

      <div className="bot-monitor monitor">
        <div className="monitor-label">
          <span className="dot" />
          COMANDOS
        </div>
        <div className="monitor-screen bot-screen">
          <div className="cmd-line">
            <span className="cmd-tag">COMANDO</span>
            <span className="cmd-name">/sortear</span>
          </div>
          <p className="cmd-desc">
            Ordena aleatoriamente 10 jugadores en 2 equipos (Terrorists vs Counter-Terrorists).
          </p>

          <div className="cmd-section">
            <span className="cmd-tag">USO</span>
            <div className="cmd-usage">
              <span className="cmd-prompt">/sortear</span>
              <span className="cmd-arg">jugadores:</span>
              <span className="cmd-val">"jugador1, jugador2, ... jugador10"</span>
            </div>
          </div>

          <div className="cmd-section">
            <span className="cmd-tag">EJEMPLO</span>
            <div className="cmd-example">
              <span className="cmd-prompt">/sortear</span>
              <span className="cmd-arg">jugadores:</span>
              <span className="cmd-val">"s1mple, ZywOo, NiKo, m0NESY, ropz, dev1ce, sh1ro, Twistzz, frozen, Ax1Le"</span>
            </div>
          </div>

          <div className="cmd-section">
            <span className="cmd-tag">NOTAS</span>
            <ul className="cmd-notes">
              <li>Se requieren exactamente 10 jugadores separados por comas</li>
              <li>Los jugadores se mezclan aleatoriamente y se dividen en 2 equipos de 5</li>
              <li>El resultado se publica en el canal donde se usó el comando</li>
            </ul>
          </div>
        </div>
        <div className="monitor-brand">BOT v1.0 — Hecho por <a href="https://github.com/franAndrad/" target="_blank" rel="noopener noreferrer" className="brand-link">Francisco Andrade</a></div>
        <span className="monitor-led on" />
      </div>

      <div className="discord-area">
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="discord-btn"
        >
          <svg className="discord-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Agregar Bot a Discord
        </a>
      </div>
    </div>
  )
}
