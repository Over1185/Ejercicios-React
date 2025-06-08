import './ButtonGroup.css';

function ButtonGroup({ buttons, orientation = "horizontal", className = "" }) {
  return (
    <div className={`button-group ${orientation} ${className}`}>
      {buttons.map((button, index) => (
        <button
          key={button.key || index}
          className={`btn ${button.variant || 'primary'} ${button.className || ''}`}
          onClick={button.onClick}
          disabled={button.disabled}
          title={button.title}
          type={button.type || 'button'}
        >          {button.icon && <span className="btn-icon">{button.icon}</span>}
          {button.text || button.label}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
