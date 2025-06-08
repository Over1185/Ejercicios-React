import { forwardRef } from 'react';
import './InputField.css';

const InputField = forwardRef(({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  symbol, 
  className = "", 
  step,
  min,
  max,
  maxLength,
  showCharCount = false,
  id,
  required = false,
  ...props 
}, ref) => {
  return (
    <div className="input-field">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        <input
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-control ${className}`}
          step={step}
          min={min}
          max={max}
          maxLength={maxLength}
          {...props}
        />
        {symbol && (
          <span className="input-symbol">{symbol}</span>
        )}
      </div>
      {showCharCount && maxLength && (
        <span className="char-count">{value?.length || 0}/{maxLength}</span>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;
