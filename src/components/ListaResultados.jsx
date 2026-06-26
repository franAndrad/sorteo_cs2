export default function ListaResultados({equipo, icono, nombre, label}){
    return (
        <>
            <div className="team-header">
                <span className="team-icon">{icono}</span>
                <span className="team-name">{nombre}</span>
                <span className="team-label">{label}</span>
            </div>
            <ul className="team-players">
                {equipo.map((participante, i) => (
                    <li key={i} className="player-item">
                        <span className="player-number">{String(i + 1).padStart(2, '0')}</span>
                        <span className="player-name">{participante}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
