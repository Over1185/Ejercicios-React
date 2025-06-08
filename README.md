# 🚀 Ejercicios React - Plataforma de Aprendizaje Interactivo

**[English Version](README_EN.md) | Español**

Una aplicación React moderna y completa que incluye 6 herramientas interactivas para aprender y practicar conceptos de desarrollo web. Este proyecto implementa mejores prácticas de desarrollo, diseño responsivo y una arquitectura de componentes escalable.

## 🌟 Características

- ✅ **Diseño Moderno**: Interfaz limpia con gradientes y animaciones suaves
- ✅ **Totalmente Responsivo**: Optimizado para móvil, tablet y escritorio
- ✅ **Componentes Reutilizables**: Arquitectura modular y escalable
- ✅ **Navegación Intuitiva**: Sistema de rutas con React Router
- ✅ **Validación de Formularios**: Validación en tiempo real y manejo de errores
- ✅ **Animaciones Fluidas**: Transiciones y efectos visuales profesionales
- ✅ **Código Optimizado**: Prácticas de desarrollo limpio y mantenible
- ✅ **Accesibilidad**: Diseño inclusivo y navegación por teclado

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19.1.0** - Biblioteca de interfaces de usuario
- **React DOM 19.1.0** - Renderizado de componentes
- **React Router DOM 7.6.2** - Enrutamiento del lado del cliente

### Herramientas de Desarrollo

- **Vite 6.3.5** - Herramienta de construcción moderna y rápida
- **ESLint 9.25.0** - Linter para mantener calidad del código
- **@vitejs/plugin-react-swc** - Plugin React con SWC para mejor rendimiento

## 📱 Aplicaciones Incluidas

### 1. 💱 Conversor de Monedas

**Ruta:** `/converter`

- Conversión entre Dólares Americanos (USD) y Euros (EUR)
- Tipo de cambio fijo: 1 USD = 0.85 EUR
- Entrada numérica con validación
- Interfaz de intercambio de monedas con un clic
- Resultados animados y formato de moneda

### 2. 🌡️ Conversor de Temperatura

**Ruta:** `/temperature`

- Conversión bidireccional Celsius ↔ Fahrenheit
- Fórmulas matemáticas visibles
- Selector de unidades intuitivo
- Validación de rangos de temperatura
- Resultados con notas explicativas

### 3. 📐 Calculadora de Área de Rectángulo

**Ruta:** `/rectangle`

- Cálculo de área y perímetro
- Visualización gráfica del rectángulo
- Representación visual proporcional
- Fórmulas matemáticas explicadas
- Funciones de ejemplo y limpieza

### 4. ✈️ Calculadora de Coste de Viaje

**Ruta:** `/travel`

- **Opción Hotel**: $50 USD por noche
  - Descuento 3+ noches: -$20 total
  - Descuento 7+ noches: -$50 total
- **Opción Alquiler de Coche**: $40 USD por día
  - Descuento 3+ días: -$20 total  
  - Descuento 7+ días: -$50 total
- Desglose detallado de cálculos
- Sistema de descuentos automático

### 5. 📝 Gestor de Posts

**Ruta:** `/posts`

- Creación de publicaciones de blog
- Formulario completo con validación
- Campos: título, autor, contenido
- Contador de caracteres en tiempo real
- Lista interactiva de posts creados
- Datos persistentes durante la sesión
- Información de metadata (fecha, tiempo de lectura)

### 6. 🎬 Teleprompter Digital

**Ruta:** `/teleprompter`

- Sistema profesional de presentaciones
- **Modo Manual**: Control con botones de navegación
- **Modo Automático**: Avance temporal configurable (1-10 segundos)
- Control de tamaño de fuente dinámico
- Barra de progreso visual
- Navegación rápida por textos
- 5 textos de muestra incluidos
- Indicadores visuales de reproducción

## 🚀 Instalación

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd Ejercicios-React
```

2. **Instalar dependencias**

```bash
pnpm install
# o
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
pnpm run dev
# o  
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

## 💻 Desarrollo

### Servidor de Desarrollo

```bash
pnpm run dev
# o  
npm run dev
```

Inicia el servidor de desarrollo con recarga automática.

### Construcción para Producción

```bash
pnpm run build
# o  
npm run build
```

Genera una versión optimizada para producción en la carpeta `dist/`.

### Linting

```bash
pnpm run lint
# o  
npm run lint
```

Ejecuta ESLint para verificar la calidad del código.

### Vista Previa de Producción

```bash
pnpm run preview
# o  
npm run preview
```

Sirve la versión de producción localmente para pruebas.

## 📁 Estructura del Proyecto

```
Ejercicios-React/
├── public/
│   ├── react.svg
│   └── ...
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ButtonGroup.jsx  # Grupo de botones
│   │   ├── InfoCard.jsx     # Tarjetas informativas
│   │   ├── InputField.jsx   # Campos de entrada
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── PageHeader.jsx   # Encabezados de página
│   │   ├── ProgressIndicator.jsx # Indicador de progreso
│   │   ├── ResultDisplay.jsx # Mostrar resultados
│   │   ├── TeleprompterDisplay.jsx # Pantalla del teleprompter
│   │   ├── CarRental.jsx    # Componente alquiler coche
│   │   ├── HotelCost.jsx    # Componente coste hotel
│   │   └── *.css           # Estilos de componentes
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Home.jsx        # Página principal
│   │   ├── CurrencyConverter.jsx
│   │   ├── TemperatureConverter.jsx
│   │   ├── RectangleCalculator.jsx
│   │   ├── TravelCalculator.jsx
│   │   ├── PostsManager.jsx
│   │   ├── Teleprompter.jsx
│   │   └── *.css          # Estilos específicos de página
│   ├── data/              # Datos de la aplicación
│   │   ├── posts.json     # Posts de muestra
│   │   └── textos.json    # Textos del teleprompter
│   ├── App.jsx            # Componente principal
│   ├── App.css           # Estilos globales de app
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos base globales
├── index.html            # Template HTML
├── package.json         # Configuración del proyecto
├── vite.config.js      # Configuración de Vite
├── eslint.config.js    # Configuración de ESLint
└── README.md           # Documentación
```

## 🎨 Arquitectura de Componentes

### Componentes Principales

#### `ButtonGroup`

Componente para crear grupos de botones con diferentes variantes:

- Orientación horizontal/vertical
- Variantes: primary, secondary, success, warning, danger
- Soporte para iconos y estados deshabilitados

#### `InfoCard`

Tarjetas informativas flexibles:

- Variantes de color (primary, success, warning, formula)
- Soporte para posts de blog
- Metadatos automáticos (autor, fecha, tiempo de lectura)

#### `InputField`

Campo de entrada con funcionalidades avanzadas:

- Validación en tiempo real
- Contador de caracteres
- Símbolos de unidad
- Estados de error y focus

#### `ResultDisplay`

Componente para mostrar resultados:

- Variantes de estado (success, warning, error, info)
- Animaciones de aparición
- Soporte para iconos

#### `ProgressIndicator`

Indicador de progreso sofisticado:

- Barra de progreso animada
- Puntos de progreso visuales
- Números y porcentajes
- Responsive design

### Patrones de Diseño Utilizados

- **Composición sobre Herencia**: Componentes flexibles y reutilizables
- **Props Drilling**: Paso eficiente de datos entre componentes
- **Render Props**: Componentes con lógica reutilizable
- **Custom Hooks**: Para lógica de estado compartida
