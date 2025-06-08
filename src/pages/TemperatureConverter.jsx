import { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import InputField from '../components/InputField';
import ButtonGroup from '../components/ButtonGroup';
import ResultDisplay from '../components/ResultDisplay';
import InfoCard from '../components/InfoCard';
import './TemperatureConverter.css';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [fromUnit, setFromUnit] = useState('C');
  const [result, setResult] = useState('');
  
  const temperatureInputRef = useRef(null);

  const convertTemperature = () => {
    if (!temperature || isNaN(temperature)) {
      alert('Por favor, ingresa una temperatura válida');
      temperatureInputRef.current.focus();
      return;
    }

    const numTemp = parseFloat(temperature);
    let convertedTemp;
    let resultText;

    if (fromUnit === 'C') {
      convertedTemp = (numTemp * 9/5) + 32;
      resultText = `${numTemp}°C = ${convertedTemp.toFixed(2)}°F`;
    } else {
      convertedTemp = (numTemp - 32) * 5/9;
      resultText = `${numTemp}°F = ${convertedTemp.toFixed(2)}°C`;
    }

    setResult(resultText);
  };
  const clearFields = () => {
    setTemperature('');
    setResult('');
    temperatureInputRef.current.focus();
  };
  const actionButtons = [
    {
      text: "🌡️ Convertir",
      onClick: convertTemperature,
      variant: "primary"
    },
    {
      text: "🗑️ Limpiar",
      onClick: clearFields,
      variant: "secondary"
    }
  ];

  const formulaInfo = {
    title: "Fórmulas de conversión",
    items: [
      {
        icon: "🧮",
        label: "°F = (°C × 9/5) + 32",
        description: "Celsius a Fahrenheit"
      },
      {
        icon: "🧮", 
        label: "°C = (°F - 32) × 5/9",
        description: "Fahrenheit a Celsius"
      }
    ]
  };

  return (<div className="temperature-converter">
      <div className="converter-container">
        <PageHeader 
          title="Conversor de Temperatura"
          subtitle="Convierte entre grados Celsius y Fahrenheit"
          icon="🌡️"
        />        <div className="converter-card">
          <InfoCard {...formulaInfo} variant="formula" />
          
          <InputField
            ref={temperatureInputRef}
            id="temperature"
            label="Temperatura:"
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Ingresa la temperatura"
            symbol={`°${fromUnit}`}
            step="0.1"
          />

          <div className="unit-selector">
            <label>Convertir de:</label>
            <div className="unit-buttons">
              <button
                className={`unit-btn ${fromUnit === 'C' ? 'active' : ''}`}
                onClick={() => setFromUnit('C')}
              >
                🧊 Celsius (°C)
              </button>
              <button
                className={`unit-btn ${fromUnit === 'F' ? 'active' : ''}`}
                onClick={() => setFromUnit('F')}
              >
                🔥 Fahrenheit (°F)
              </button>
            </div>
          </div>          <div className="form-buttons">
            <ButtonGroup buttons={actionButtons} />
          </div>

          <ResultDisplay
            title="Resultado:"
            result={result}
            isVisible={!!result}
            variant="info"
          />
        </div>
      </div>
    </div>
  );
}

export default TemperatureConverter;
