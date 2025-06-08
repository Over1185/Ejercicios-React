import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">🚀 Aprender React con 100 ejercicios prácticos</h1>
        <p className="hero-subtitle">
          Bienvenido a nuestra plataforma de aprendizaje interactivo
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💱</div>
            <h3>Conversor de Monedas</h3>
            <p>Convierte entre Dólares y Euros con un tipo de cambio fijo</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌡️</div>
            <h3>Conversor de Temperatura</h3>
            <p>Transforma grados Celsius a Fahrenheit y viceversa</p>
          </div>          <div className="feature-card">
            <div className="feature-icon">📐</div>
            <h3>Calculadora de Área</h3>
            <p>Calcula la superficie de un rectángulo fácilmente</p>
          </div>          <div className="feature-card">
            <div className="feature-icon">✈️</div>
            <h3>Coste de Viaje</h3>
            <p>Calcula el coste de hotel y alquiler de coche para tu viaje</p>
          </div>          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Gestor de Posts</h3>
            <p>Crea y gestiona tus publicaciones de blog personales</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3>Teleprompter Digital</h3>
            <p>Sistema profesional de presentaciones con control automático y manual</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
