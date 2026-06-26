import { useState } from "react"

export default function Participantes({setParticipantes}) {
    const [texto, setTexto] = useState("")

    function handleChange(e) {
        const lineas = e.target.value.split('\n')
        if (lineas.length > 10) return
        setTexto(e.target.value)
        setParticipantes(lineas)
    }

    const count = texto ? texto.split('\n').filter(l => l.trim()).length : 0

    return (
        <div className="input-monitor monitor">
            <div className="monitor-label">
                <span className="dot" />
                INPUT — Ingresa 10 jugadores
            </div>
            <div className="monitor-screen">
                <textarea
                    className="cs-input"
                    placeholder="player1&#10;player2&#10;player3&#10;..."
                    value={texto}
                    onChange={handleChange}
                />
                <div className="counter">{count} / 10 jugadores</div>
            </div>
            <div className="monitor-brand">CS2 SORTEO v1.0</div>
            <span className="monitor-led on" />
        </div>
    )
}
