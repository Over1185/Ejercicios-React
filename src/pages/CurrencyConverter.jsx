import { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import InputField from '../components/InputField';
import ButtonGroup from '../components/ButtonGroup';
import ResultDisplay from '../components/ResultDisplay';
import InfoCard from '../components/InfoCard';
import './CurrencyConverter.css';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [result, setResult] = useState('');
  
  const amountInputRef = useRef(null);
  const resultRef = useRef(null);

  const exchangeRate = 1.2; // 1 USD = 1.2 EUR

  const convertCurrency = () => {
    if (!amount || isNaN(amount)) {
      alert('Por favor, ingresa una cantidad válida');
      amountInputRef.current.focus();
      return;
    }

    const numAmount = parseFloat(amount);
    let convertedAmount;

    if (fromCurrency === 'USD') {
      convertedAmount = numAmount * exchangeRate;
      setResult(`${numAmount} USD = ${convertedAmount.toFixed(2)} EUR`);
    } else {
      convertedAmount = numAmount / exchangeRate;
      setResult(`${numAmount} EUR = ${convertedAmount.toFixed(2)} USD`);
    }

    // Mostrar el resultado con efecto
    if (resultRef.current) {
      resultRef.current.classList.add('result-animate');
      setTimeout(() => {
        resultRef.current.classList.remove('result-animate');
      }, 600);
    }
  };

  const clearFields = () => {
    setAmount('');
    setResult('');
    amountInputRef.current.focus();
  };

  const switchCurrency = () => {
    setFromCurrency(fromCurrency === 'USD' ? 'EUR' : 'USD');
    if (result) {
      convertCurrency();
    }
  };
  const exchangeRateInfo = {
    title: "Tipo de cambio",
    items: [
      {
        icon: "💱",
        label: "1 USD = 1.20 EUR",
        description: "Tipo de cambio fijo"
      }
    ]
  };

  const actionButtons = [
    {
      key: "convert",
      label: "Convertir",
      icon: "💸",
      onClick: convertCurrency,
      variant: "primary"
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
    <div className="currency-converter">
      <div className="converter-container">
        <PageHeader 
          title="Conversor de Monedas"
          subtitle="Convierte entre Dólares estadounidenses y Euros"
          icon="💱"
        />
        
        <div className="converter-card">
          <InfoCard {...exchangeRateInfo} variant="primary" />
          
          <InputField
            ref={amountInputRef}
            id="amount"
            label="Cantidad:"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ingresa la cantidad"
            symbol={fromCurrency === 'USD' ? '$' : '€'}
            step="0.01"
            min="0"
          />          <div className="currency-selector">
            <label>Convertir de:</label>
            <div className="currency-buttons">
              <button
                className={`currency-btn ${fromCurrency === 'USD' ? 'active' : ''}`}
                onClick={() => setFromCurrency('USD')}
              >
                🇺🇸 USD
              </button>
              <button
                className="switch-btn"
                onClick={switchCurrency}
                title="Intercambiar monedas"
              >
                ⇄
              </button>
              <button
                className={`currency-btn ${fromCurrency === 'EUR' ? 'active' : ''}`}
                onClick={() => setFromCurrency('EUR')}
              >
                🇪🇺 EUR
              </button>
            </div>
          </div>

          <ButtonGroup buttons={actionButtons} />

          <ResultDisplay
            ref={resultRef}
            title="Resultado:"
            result={result}
            isVisible={!!result}
            variant="success"
          />
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
