import { useState, useEffect, useCallback } from 'react';
import PageHeader from '../components/PageHeader';
import ButtonGroup from '../components/ButtonGroup';
import ResultDisplay from '../components/ResultDisplay';
import InfoCard from '../components/InfoCard';
import TeleprompterDisplay from '../components/TeleprompterDisplay';
import ProgressIndicator from '../components/ProgressIndicator';
import textosData from '../data/textos.json';
import './Teleprompter.css';

function Teleprompter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fontSize, setFontSize] = useState('2rem');
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [autoSpeed, setAutoSpeed] = useState(5000); // 5 segundos por defecto
  const textos = textosData.textos || [];
  const currentText = textos[currentIndex];
  const totalTextos = textos.length;

  const handleNext = useCallback(() => {
    if (currentIndex < totalTextos - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (autoAdvance && isPlaying) {
      // Si llegamos al final en modo automático, detenemos
      setIsPlaying(false);
    }
  }, [currentIndex, totalTextos, autoAdvance, isPlaying]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  // Auto-advance functionality
  useEffect(() => {
    let interval;
    if (isPlaying && autoAdvance && currentIndex < totalTextos - 1) {
      interval = setInterval(() => {
        handleNext();
      }, autoSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, autoAdvance, currentIndex, autoSpeed, totalTextos, handleNext]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  const handleJumpTo = (index) => {
    setCurrentIndex(index);
  };

  const increaseFontSize = () => {
    const currentSize = parseFloat(fontSize);
    if (currentSize < 4) {
      setFontSize(`${Math.min(currentSize + 0.2, 4)}rem`);
    }
  };

  const decreaseFontSize = () => {
    const currentSize = parseFloat(fontSize);
    if (currentSize > 1) {
      setFontSize(`${Math.max(currentSize - 0.2, 1)}rem`);
    }
  };

  const navigationButtons = [
    {
      key: "previous",
      label: "Anterior",
      icon: "⬅️",
      onClick: handlePrevious,
      variant: "secondary",
      disabled: currentIndex === 0
    },
    {
      key: "play-pause",
      label: isPlaying ? "Pausar" : "Reproducir",
      icon: isPlaying ? "⏸️" : "▶️",
      onClick: handlePlayPause,
      variant: isPlaying ? "warning" : "success"
    },
    {
      key: "next",
      label: "Siguiente",
      icon: "➡️",
      onClick: handleNext,
      variant: "secondary",
      disabled: currentIndex === totalTextos - 1
    }
  ];

  const controlButtons = [
    {
      key: "reset",
      label: "Reiniciar",
      icon: "🔄",
      onClick: handleReset,
      variant: "warning"
    },
    {
      key: "font-decrease",
      label: "A-",
      icon: "🔻",
      onClick: decreaseFontSize,
      variant: "secondary",
      disabled: parseFloat(fontSize) <= 1
    },
    {
      key: "font-increase",
      label: "A+",
      icon: "🔺",
      onClick: increaseFontSize,
      variant: "secondary",
      disabled: parseFloat(fontSize) >= 4
    }
  ];

  const settingsInfo = {
    title: "Configuración del Teleprompter",
    items: [
      {
        icon: "📖",
        label: `Tamaño de fuente: ${fontSize}`,
        description: "Usa A+ y A- para ajustar"
      },
      {
        icon: "⚡",
        label: autoAdvance ? `Auto-avance: ${autoSpeed/1000}s` : "Avance manual",
        description: autoAdvance ? "Modo automático activado" : "Controla manualmente con los botones"
      },
      {
        icon: "📊",
        label: `${totalTextos} textos disponibles`,
        description: "Navega usando los controles"
      }
    ]
  };

  return (
    <div className="teleprompter">
      <div className="teleprompter-container">
        <PageHeader 
          title="Teleprompter Digital"
          subtitle="Sistema de presentación profesional con control de navegación"
          icon="🎬"
        />
        
        <div className="teleprompter-card">
          <InfoCard {...settingsInfo} variant="primary" />
          
          <ProgressIndicator 
            current={currentIndex + 1}
            total={totalTextos}
            showNumbers={true}
            showPercentage={true}
          />

          <TeleprompterDisplay 
            texto={currentText}
            fontSize={fontSize}
            isPlaying={isPlaying}
          />

          <div className="teleprompter-controls">
            <div className="control-section">
              <h4>🎮 Navegación</h4>
              <ButtonGroup buttons={navigationButtons} />
            </div>

            <div className="control-section">
              <h4>⚙️ Controles</h4>
              <ButtonGroup buttons={controlButtons} />
            </div>
          </div>

          <div className="auto-advance-controls">
            <label className="auto-advance-label">
              <input
                type="checkbox"
                checked={autoAdvance}
                onChange={(e) => setAutoAdvance(e.target.checked)}
              />
              <span>🤖 Avance automático</span>
            </label>
            
            {autoAdvance && (
              <div className="speed-control">
                <label htmlFor="speed">⏱️ Velocidad (segundos):</label>
                <select
                  id="speed"
                  value={autoSpeed}
                  onChange={(e) => setAutoSpeed(Number(e.target.value))}
                >
                  <option value={2000}>2s - Rápido</option>
                  <option value={3000}>3s - Medio-rápido</option>
                  <option value={5000}>5s - Normal</option>
                  <option value={8000}>8s - Lento</option>
                  <option value={10000}>10s - Muy lento</option>
                </select>
              </div>
            )}
          </div>

          <ResultDisplay
            title="Estado del sistema:"
            result={`Texto ${currentIndex + 1} de ${totalTextos} | ${isPlaying ? 'Reproduciendo' : 'Pausado'} | Fuente: ${fontSize}`}
            isVisible={true}
            variant="info"
          />

          <div className="quick-navigation">
            <h4>🔍 Navegación rápida</h4>
            <div className="text-grid">
              {textos.map((texto, index) => (
                <button
                  key={texto.id}
                  className={`text-card ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleJumpTo(index)}
                  title={texto.titulo}
                >
                  <span className="text-number">{index + 1}</span>
                  <span className="text-title">{texto.titulo}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teleprompter;
