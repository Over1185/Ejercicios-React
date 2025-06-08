import { forwardRef } from 'react';
import './ResultDisplay.css';

const ResultDisplay = forwardRef(({ 
  title = "Resultado", 
  result, 
  className = "", 
  variant = "default",
  children,
  isVisible = true 
}, ref) => {
  if (!isVisible || (!result && !children)) {
    return null;
  }

  return (
    <div ref={ref} className={`result-display ${variant} ${className}`}>
      <h3 className="result-title">{title}</h3>
      <div className="result-content">
        {children || (
          <div className="result-value">{result}</div>
        )}
      </div>
    </div>
  );
});

ResultDisplay.displayName = 'ResultDisplay';

export default ResultDisplay;
