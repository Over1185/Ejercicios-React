import { useState, useEffect } from 'react';

function HotelCost({ opcion, noches }) {
  const [costo, setCosto] = useState(0);

  useEffect(() => {
    if (opcion === 1 && noches > 0) {
      const costoTotal = noches * 40; // 40 dólares por noche
      setCosto(costoTotal);
    } else {
      setCosto(0);
    }
  }, [opcion, noches]);

  if (opcion !== 1) {
    return null; // No mostrar si no es la opción de hotel
  }

  return (
    <p className="cost-result hotel-cost">
      {noches > 0 
        ? `El coste del hotel por ${noches} ${noches === 1 ? 'noche' : 'noches'} es: $${costo} USD`
        : 'Ingresa el número de noches para calcular el coste del hotel'
      }
    </p>
  );
}

export default HotelCost;
