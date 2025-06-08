import { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import InputField from '../components/InputField';
import ButtonGroup from '../components/ButtonGroup';
import InfoCard from '../components/InfoCard';
import HotelCost from '../components/HotelCost';
import CarRental from '../components/CarRental';
import './TravelCalculator.css';

function TravelCalculator() {
  const [noches, setNoches] = useState('');
  const [opcion, setOpcion] = useState(1); // 1 = Hotel, 2 = Coche
  
  const nochesInputRef = useRef(null);

  const handleNochesChange = (e) => {
    const value = e.target.value;
    // Permitir solo números positivos
    if (value === '' || (Number(value) >= 0 && !isNaN(value))) {
      setNoches(value);
    }
  };
  const clearFields = () => {
    setNoches('');
    nochesInputRef.current.focus();
  };

  const fillExample = () => {
    setNoches('5');
    nochesInputRef.current.focus();
  };

  const pricingInfo = {
    title: "Información de precios",
    items: [
      {
        icon: "🏨",
        label: "Hotel: $40 USD por noche",
        description: "Precio fijo por noche de alojamiento"
      },
      {
        icon: "🚗",
        label: "Alquiler de coche: $40 USD por día",
        description: "Precio base diario",
        details: [
          "3+ días: -$20 de descuento total",
          "7+ días: -$50 de descuento total (no acumulable)"
        ]
      }
    ]
  };

  const actionButtons = [
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
    <div className="travel-calculator">
      <div className="calculator-container">
        <PageHeader 
          title="Calculadora de Coste de Viaje"
          subtitle="Calcula el coste de tu hotel o alquiler de coche"
          icon="✈️"
        />
        
        <div className="calculator-card">
          <InfoCard {...pricingInfo} variant="primary" />          <div className="option-selector">
            <label>Selecciona qué quieres calcular:</label>
            <div className="option-buttons">
              <button
                className={`option-btn ${opcion === 1 ? 'active' : ''}`}
                onClick={() => setOpcion(1)}
              >
                🏨 Coste del Hotel
              </button>
              <button
                className={`option-btn ${opcion === 2 ? 'active' : ''}`}
                onClick={() => setOpcion(2)}
              >
                🚗 Alquiler de Coche
              </button>
            </div>
          </div>

          <InputField
            ref={nochesInputRef}
            id="noches"
            label={opcion === 1 ? 'Número de noches:' : 'Número de días:'}
            type="number"
            value={noches}
            onChange={handleNochesChange}
            placeholder={opcion === 1 ? "Ingresa las noches" : "Ingresa los días"}
            symbol={opcion === 1 ? (noches == 1 ? 'noche' : 'noches') : (noches == 1 ? 'día' : 'días')}
            step="1"
            min="0"
          />

          <ButtonGroup buttons={actionButtons} />

          <div className="calculation-result">
            {opcion === 1 ? (
              <HotelCost opcion={opcion} noches={parseInt(noches) || 0} />
            ) : (
              <CarRental opcion={opcion} noches={parseInt(noches) || 0} />
            )}
          </div>        </div>
      </div>
    </div>
  );
}

export default TravelCalculator;
