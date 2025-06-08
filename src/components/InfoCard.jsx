import './InfoCard.css';

function InfoCard({ 
  title, 
  items, 
  variant = "default", 
  className = "",
  icon,
  details,
  content
}) {
  // Si se pasan props para un post individual (icon, details, content)
  if (icon || details || content) {
    return (
      <div className={`info-card post-card ${variant} ${className}`}>
        <header className="post-header">
          {icon && <span className="post-icon">{icon}</span>}
          {title && <h3 className="post-title">{title}</h3>}
          {details && (
            <div className="post-meta">
              {details.map((detail, index) => (
                <span key={index} className="post-detail">
                  {detail.icon && <span className="detail-icon">{detail.icon}</span>}
                  <span className="detail-text">{detail.value}</span>
                </span>
              ))}
            </div>
          )}
        </header>
        {content && (
          <div className="post-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  }

  // Estructura original para información general
  return (
    <div className={`info-card ${variant} ${className}`}>
      {title && <h3 className="info-title">{title}</h3>}
      <div className="info-content">
        {items?.map((item, index) => (
          <div key={index} className="info-item">
            {item.icon && <span className="info-icon">{item.icon}</span>}
            <div className="info-text">
              {item.label && <strong>{item.label}</strong>}
              {item.description && <div className="info-description">{item.description}</div>}
              {item.details && (
                <div className="info-details">
                  {item.details.map((detail, i) => (
                    <small key={i} className="info-detail">{detail}</small>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoCard;
