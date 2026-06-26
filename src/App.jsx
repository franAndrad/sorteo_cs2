import './styles.css'
import Participantes from './components/Participantes.jsx'
import Resultados from './components/Resultados.jsx'

import { useState } from 'react'

function App() {

  const [participantes, setParticipantes] = useState([])
  const [sorteados, setSorteados] = useState(new Set())

  function handleSetParticipantes(nuevos) {
    setParticipantes(nuevos)
    setSorteados(new Set())
  }

  function sortear() {
    if (participantes.length !== 10) return
    const indices = new Set()
    while (indices.size < 10) {
      const numRandom = Math.random()
      const indiceRandom = parseInt(numRandom * participantes.length)
      indices.add(indiceRandom)
    }
    setSorteados(indices)
  }

  return (
    <div className="app">
      <div className="operator-side left">
        <img src="/ct.png" alt="CT Operator" />
      </div>

      <div className="app-main">
        <header className="cs2-header">
          <h1>CS<span>2</span></h1>
          <p className="sub">Sorteo de Equipos</p>
        </header>

        <Participantes setParticipantes={handleSetParticipantes} />

        <div className="sort-area">
          <button
            className="cs2-btn"
            onClick={sortear}
            disabled={participantes.length !== 10}
          >
            Sortear Equipos
          </button>
        </div>

        {sorteados.size > 0 && (
          <Resultados key={[...sorteados].join(",")} participantes={participantes} sorteados={sorteados} />
        )}

        {sorteados.size === 0 && (
          <p className="status-msg">Esperando 10 jugadores para ejecutar el sorteo...</p>
        )}
      </div>

      <div className="operator-side right">
        <img src="/t.png" alt="T Operator" />
      </div>
    </div>
  )
}

export default App
