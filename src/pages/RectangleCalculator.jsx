import { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import InputField from '../components/InputField';
import ButtonGroup from '../components/ButtonGroup';
import ResultDisplay from '../components/ResultDisplay';
import InfoCard from '../components/InfoCard';
import './RectangleCalculator.css';

function RectangleCalculator() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  
  const widthInputRef = useRef(null);
  const heightInputRef = useRef(null);
  const resultRef = useRef(null);

  const calculateArea = () => {
    if (!width || !height || isNaN(width) || isNaN(height)) {
      alert('Por favor, ingresa valores válidos para el ancho y alto');
      if (!width) {
        widthInputRef.current.focus();
      } else {
        heightInputRef.current.focus();
      }
      return;
    }

    const numWidth = parseFloat(width);
    const numHeight = parseFloat(height);

    if (numWidth <= 0 || numHeight <= 0) {
      alert('Los valores deben ser mayores a cero');
      return;
    }

    const area = numWidth * numHeight;
    const perimeter = 2 * (numWidth + numHeight);
    
    setResult({
      area: area.toFixed(2),
      perimeter: perimeter.toFixed(2),
      width: numWidth,
      height: numHeight
    });

    // Mostrar el resultado con efecto
    if (resultRef.current) {
      resultRef.current.classList.add('result-animate');
      setTimeout(() => {
        resultRef.current.classList.remove('result-animate');
      }, 600);
    }
  };

  const clearFields = () => {
    setWidth('');
    setHeight('');
    setResult('');
    widthInputRef.current.focus();
  };

  const fillExample = () => {
    setWidth('10');
    setHeight('5');
    widthInputRef.current.focus();
  };

  const getRectangleColor = (area) => {
    if (area < 10) return '#74b9ff';
    if (area < 50) return '#55a3ff';
    if (area < 100) return '#fdcb6e';    return '#e17055';
  };

  const formulaInfo = {
    title: "Fórmulas matemáticas",
    items: [
      {
        icon: "📏",
        label: "Área = ancho × alto",
        description: "Superficie del rectángulo"
      },
      {
        icon: "⭕",
        label: "Perímetro = 2 × (ancho + alto)",
        description: "Contorno del rectángulo"
      }
    ]
  };

  const actionButtons = [
    {
      key: "calculate",
      label: "Calcular",
      icon: "📊",
      onClick: calculateArea,
      variant: "primary"
    },
    {
      key: "example",
      label: "Ejemplo",
      icon: "💡",
      onClick: fillExample,
      variant: "warning"
    },
    {
      key: "clear",
      label: "Limpiar",
      icon: "🗑️",
      onClick: clearFields,
      variant: "secondary"
    }
  ];

  return (
    <div className="rectangle-calculator">
      <div className="calculator-container">
        <PageHeader 
          title="Calculadora de Área del Rectángulo"
          subtitle="Calcula el área y perímetro de un rectángulo"
          icon="📐"
        />
        
        <div className="calculator-card">
          <InfoCard {...formulaInfo} variant="formula" />

          <div className="inputs-container">
            <InputField
              ref={widthInputRef}
              id="width"
              label="Ancho:"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Ingresa el ancho"
              symbol="cm"
              step="0.1"
              min="0"
            />

            <div className="multiplication-symbol">×</div>

            <InputField
              ref={heightInputRef}
              id="height"
              label="Alto:"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ingresa el alto"
              symbol="cm"
              step="0.1"
              min="0"
            />
          </div>

          <ButtonGroup buttons={actionButtons} />          <ResultDisplay
            ref={resultRef}
            title="Resultados:"
            isVisible={!!result}
            variant="success"
          >
            {result && (
              <>
                <div className="results-grid">
                  <div className="result-card area-card">
                    <div className="result-icon">📏</div>
                    <div className="result-label">Área</div>
                    <div 
                      className="result-value"
                      style={{ color: getRectangleColor(parseFloat(result.area)) }}
                    >
                      {result.area} cm²
                    </div>
                  </div>
                  
                  <div className="result-card perimeter-card">
                    <div className="result-icon">⭕</div>
                    <div className="result-label">Perímetro</div>
                    <div className="result-value">
                      {result.perimeter} cm
                    </div>
                  </div>
                </div>

                <div className="visual-rectangle">
                  <div className="rectangle-title">Representación visual:</div>
                  <div className="rectangle-container">
                    <div 
                      className="rectangle-visual"
                      style={{
                        width: `${Math.min(result.width * 10, 200)}px`,
                        height: `${Math.min(result.height * 10, 150)}px`,
                        backgroundColor: getRectangleColor(parseFloat(result.area))
                      }}
                    >
                      <span className="rectangle-label">
                        {result.width} × {result.height}
                      </span>
                    </div>
                    <div className="rectangle-dimensions">
                      <div className="dimension-label width-label">
                        Ancho: {result.width} cm
                      </div>
                      <div className="dimension-label height-label">
                        Alto: {result.height} cm
                      </div>
                    </div>
                  </div>
                </div>

                <div className="calculation-steps">
                  <h4>Paso a paso:</h4>
                  <div className="step">
                    <span className="step-number">1.</span>
                    Área = {result.width} × {result.height} = {result.area} cm²
                  </div>
                  <div className="step">
                    <span className="step-number">2.</span>
                    Perímetro = 2 × ({result.width} + {result.height}) = {result.perimeter} cm
                  </div>
                </div>
              </>
            )}
          </ResultDisplay>
        </div>
      </div>
    </div>
  );
}

export default RectangleCalculator;
