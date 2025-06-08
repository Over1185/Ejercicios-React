import './PageHeader.css';

function PageHeader({ title, subtitle, icon }) {
  return (
    <div className="page-header">
      <h1 className="page-title">
        {icon && <span className="page-icon">{icon}</span>}
        {title}
      </h1>
      {subtitle && (
        <p className="page-subtitle">{subtitle}</p>
      )}
    </div>
  );
}

export default PageHeader;
