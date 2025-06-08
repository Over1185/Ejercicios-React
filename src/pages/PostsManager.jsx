import { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import InputField from '../components/InputField';
import ButtonGroup from '../components/ButtonGroup';
import ResultDisplay from '../components/ResultDisplay';
import InfoCard from '../components/InfoCard';
import postsData from '../data/posts.json';
import './PostsManager.css';

function PostsManager() {
  const [posts, setPosts] = useState(postsData);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [contenido, setContenido] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const tituloInputRef = useRef(null);
  const autorInputRef = useRef(null);
  const contenidoTextareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!titulo.trim()) {
      alert('Por favor, ingresa un título para el post');
      tituloInputRef.current.focus();
      return;
    }
    
    if (!autor.trim()) {
      alert('Por favor, ingresa el nombre del autor');
      autorInputRef.current.focus();
      return;
    }
    
    if (!contenido.trim()) {
      alert('Por favor, ingresa el contenido del post');
      contenidoTextareaRef.current.focus();
      return;
    }

    // Crear nuevo post
    const nuevoPost = {
      id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      titulo: titulo.trim(),
      autor: autor.trim(),
      contenido: contenido.trim(),
      fecha: new Date().toISOString()
    };

    // Agregar el nuevo post al inicio de la lista
    setPosts([nuevoPost, ...posts]);
    
    // Limpiar el formulario
    clearForm();
    
    // Ocultar el formulario después de crear el post
    setIsFormVisible(false);
  };

  const clearForm = () => {
    setTitulo('');
    setAutor('');
    setContenido('');
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      // Si se va a mostrar el formulario, hacer focus en el primer campo
      setTimeout(() => {
        tituloInputRef.current?.focus();
      }, 100);
    } else {
      // Si se va a ocultar, limpiar el formulario
      clearForm();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return (
    <div className="posts-manager">
      <div className="posts-container">
        <PageHeader 
          title="Gestor de Posts"
          subtitle="Crea y gestiona tus publicaciones de blog"
          icon="📝"
        />
        
        <div className="posts-header">
          <ResultDisplay 
            result={`Total de posts: ${posts.length}`}
            variant="info"
            icon="📊"
          />
          
          <ButtonGroup 
            buttons={[
              {
                text: isFormVisible ? '❌ Cancelar' : '➕ Nuevo Post',
                onClick: toggleForm,
                variant: isFormVisible ? 'danger' : 'primary',
                className: `toggle-form-btn ${isFormVisible ? 'active' : ''}`
              }
            ]}
          />
        </div>

        {isFormVisible && (
          <div className="form-container">
            <form onSubmit={handleSubmit} className="post-form">
              <h3>✍️ Crear Nuevo Post</h3>
              
              <InputField
                ref={tituloInputRef}
                id="titulo"
                label="Título del Post:"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ingresa un título atractivo..."
                maxLength={100}
                showCharCount={true}
                required
              />

              <InputField
                ref={autorInputRef}
                id="autor"
                label="Autor:"
                type="text"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                placeholder="Tu nombre..."
                maxLength={50}
                showCharCount={true}
                required
              />

              <div className="form-group">
                <label htmlFor="contenido">Contenido:</label>
                <textarea
                  ref={contenidoTextareaRef}
                  id="contenido"
                  value={contenido}
                  onChange={(e) => setContenido(e.target.value)}
                  placeholder="Escribe el contenido de tu post..."
                  className="form-textarea"
                  rows="6"
                  maxLength={1000}
                />
                <span className="char-count">{contenido.length}/1000</span>
              </div>

              <ButtonGroup 
                buttons={[
                  {
                    text: '📤 Publicar Post',
                    type: 'submit',
                    variant: 'success'
                  },
                  {
                    text: '🗑️ Limpiar',
                    onClick: clearForm,
                    variant: 'secondary'
                  }
                ]}
              />
            </form>
          </div>
        )}

        <div className="posts-list">
          <h2>📚 Todos los Posts</h2>
          
          {posts.length === 0 ? (
            <div className="no-posts">
              <p>📝 No hay posts disponibles</p>
              <p>¡Crea tu primer post usando el botón de arriba!</p>
            </div>
          ) : (
            posts.map((post) => (
              <InfoCard
                key={post.id}
                icon="📝"
                title={post.titulo}
                details={[
                  { label: "Autor", value: post.autor, icon: "👤" },
                  { label: "Fecha", value: formatDate(post.fecha), icon: "📅" },
                  { label: "ID", value: `#${post.id}`, icon: "🆔" },
                  { label: "Tiempo de lectura", value: `~${Math.max(1, Math.ceil(post.contenido.split(' ').length / 200))} min`, icon: "⏱️" }
                ]}
                content={post.contenido}
                className="post-card"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PostsManager;
