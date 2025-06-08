import './ProgressIndicator.css';

function ProgressIndicator({ 
  current, 
  total, 
  className = "",
  showNumbers = true,
  showPercentage = true 
}) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className={`progress-indicator ${className}`}>
      <div className="progress-info">
        {showNumbers && (
          <span className="progress-numbers">
            <span className="current">{current}</span>
            <span className="separator">/</span>
            <span className="total">{total}</span>
          </span>
        )}
        {showPercentage && (
          <span className="progress-percentage">{percentage}%</span>
        )}
      </div>
      
      <div className="progress-bar">
        <div className="progress-track">
          <div 
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="progress-dots">
          {Array.from({ length: total }, (_, index) => (
            <div
              key={index}
              className={`progress-dot ${index < current ? 'completed' : ''} ${index === current - 1 ? 'current' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressIndicator;
