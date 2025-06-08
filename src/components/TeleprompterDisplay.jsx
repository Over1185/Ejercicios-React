import './TeleprompterDisplay.css';

function TeleprompterDisplay({ 
  texto, 
  className = "", 
  fontSize = "2rem",
  isPlaying = false 
}) {
  if (!texto) {
    return (
      <div className={`teleprompter-display empty ${className}`}>
        <p className="no-text-message">
          📝 No hay texto para mostrar
        </p>
      </div>
    );
  }

  return (
    <div className={`teleprompter-display ${isPlaying ? 'playing' : ''} ${className}`}>
      <div className="teleprompter-content" style={{ fontSize }}>
        <h2 className="teleprompter-title">{texto.titulo}</h2>
        <p className="teleprompter-text">{texto.contenido}</p>
      </div>
      <div className="teleprompter-indicator">
        {isPlaying && (
          <div className="playing-indicator">
            <span className="pulse-dot"></span>
            <span className="playing-text">En reproducción</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeleprompterDisplay;
