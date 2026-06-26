import { useState, useEffect } from "react"

export default function Resultados({participantes, sorteados}){

    const indices = [...sorteados]
    const equipo1 = indices.slice(0, 5).map(i => participantes[i])
    const equipo2 = indices.slice(5, 10).map(i => participantes[i])

    const [steps, setSteps] = useState(0)

    useEffect(() => {
        if (sorteados.size === 0) return

        const timer = setInterval(() => {
            setSteps(prev => {
                const total = equipo1.reduce((acc, _, i) =>
                    acc + Math.max((equipo1[i] || '').length, (equipo2[i] || '').length), 0)
                if (prev >= total) {
                    clearInterval(timer)
                    return total
                }
                return prev + 1
            })
        }, 70)
        return () => clearInterval(timer)
    }, [sorteados, equipo1, equipo2])

    const offsets = []
    let total = 0
    for (let i = 0; i < 5; i++) {
        offsets.push(total)
        total += Math.max((equipo1[i] || '').length, (equipo2[i] || '').length)
    }

    let pair = 5
    let char = 0
    if (steps < total) {
        for (let i = 0; i < 5; i++) {
            const next = i < 4 ? offsets[i + 1] : total
            if (steps >= offsets[i] && steps < next) {
                pair = i
                char = steps - offsets[i]
                break
            }
        }
    }

    return (
        <div className="teams-container">
            <div className="team-monitor monitor ct">
                <div className="monitor-label ct-label">
                    <span className="dot" />
                    COUNTER-TERRORISTS
                </div>
                <div className="monitor-screen">
                    <div className="team-header-line">
                        <span className="team-tag">[CT]</span>
                        <span className="team-name-display">Equipo</span>
                    </div>
                    {equipo1.map((p, i) => {
                        const done = i < pair
                        const typing = i === pair
                        const visible = done || typing
                        return (
                            <div key={i} className={`player-line ${visible ? 'visible' : ''}`}>
                                <span className="player-idx">{String(i + 1).padStart(2, '0')}</span>
                                <span className="player-name-display">
                                    {done ? p : typing ? p.slice(0, char) : ''}
                                </span>
                                {typing && char < p.length && <span className="typing-cursor" />}
                            </div>
                        )
                    })}
                </div>
                <div className="monitor-brand">CT UNIT</div>
                <span className="monitor-led ct-led" />
            </div>

            <div className="team-monitor monitor t">
                <div className="monitor-label t-label">
                    <span className="dot" />
                    TERRORISTS
                </div>
                <div className="monitor-screen">
                    <div className="team-header-line">
                        <span className="team-tag">[T]</span>
                        <span className="team-name-display">Equipo</span>
                    </div>
                    {equipo2.map((p, i) => {
                        const done = i < pair
                        const typing = i === pair
                        const visible = done || typing
                        return (
                            <div key={i} className={`player-line ${visible ? 'visible' : ''}`}>
                                <span className="player-idx">{String(i + 6).padStart(2, '0')}</span>
                                <span className="player-name-display">
                                    {done ? p : typing ? p.slice(0, char) : ''}
                                </span>
                                {typing && char < p.length && <span className="typing-cursor" />}
                            </div>
                        )
                    })}
                </div>
                <div className="monitor-brand">T UNIT</div>
                <span className="monitor-led t-led" />
            </div>
        </div>
    )
}
