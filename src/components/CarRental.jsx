import { useState, useEffect } from 'react';

function CarRental({ opcion, noches }) {
  const [costo, setCosto] = useState(0);
  const [descuento, setDescuento] = useState(0);

  useEffect(() => {
    if (opcion === 2 && noches > 0) {
      const costoPorDia = 40; // 40 dolares por día
      const costoBase = noches * costoPorDia;
      let descuentoAplicado = 0;

      // Aplicar descuentos según las reglas
      if (noches >= 7) {
        descuentoAplicado = 50; // Descuento de 50$ para 7+ días
      } else if (noches >= 3) {
        descuentoAplicado = 20; // Descuento de 20$ para 3+ días
      }

      const costoFinal = Math.max(0, costoBase - descuentoAplicado);
      
      setCosto(costoFinal);
      setDescuento(descuentoAplicado);
    } else {
      setCosto(0);
      setDescuento(0);
    }
  }, [opcion, noches]);

  if (opcion !== 2) {
    return null; // No mostrar si no es la opción de alquiler de coche
  }

  return (
    <div className="car-rental-result">
      <p className="cost-result car-cost">
        {noches > 0 
          ? `El coste del alquiler del coche por ${noches} ${noches === 1 ? 'día' : 'días'} es: $${costo} USD`
          : 'Ingresa el número de días para calcular el coste del alquiler'
        }
      </p>
      {descuento > 0 && noches > 0 && (
        <p className="discount-info">
          🎉 ¡Descuento aplicado: -${descuento} USD! 
          {noches >= 7 ? ' (7+ días)' : ' (3+ días)'}
        </p>
      )}
    </div>
  );
}

export default CarRental;
