# 🚀 React Exercises - Interactive Learning Platform

**English | [Versión en Español](README.md)**

A modern and comprehensive React application that includes 6 interactive tools for learning and practicing web development concepts. This project implements development best practices, responsive design, and a scalable component architecture.

## 🌟 Features

- ✅ **Modern Design**: Clean interface with gradients and smooth animations
- ✅ **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ✅ **Reusable Components**: Modular and scalable architecture
- ✅ **Intuitive Navigation**: Route system with React Router
- ✅ **Form Validation**: Real-time validation and error handling
- ✅ **Smooth Animations**: Professional transitions and visual effects
- ✅ **Optimized Code**: Clean and maintainable development practices
- ✅ **Accessibility**: Inclusive design and keyboard navigation

## 🛠️ Technologies Used

### Frontend

- **React 19.1.0** - User interface library
- **React DOM 19.1.0** - Component rendering
- **React Router DOM 7.6.2** - Client-side routing

### Development Tools

- **Vite 6.3.5** - Modern and fast build tool
- **ESLint 9.25.0** - Linter for maintaining code quality
- **@vitejs/plugin-react-swc** - React plugin with SWC for better performance

## 📱 Included Applications

### 1. 💱 Currency Converter

**Route:** `/converter`

- Conversion between US Dollars (USD) and Euros (EUR)
- Fixed exchange rate: 1 USD = 0.85 EUR
- Numeric input with validation
- One-click currency swap interface
- Animated results and currency formatting

### 2. 🌡️ Temperature Converter

**Route:** `/temperature`

- Bidirectional Celsius ↔ Fahrenheit conversion
- Visible mathematical formulas
- Intuitive unit selector
- Temperature range validation
- Results with explanatory notes

### 3. 📐 Rectangle Area Calculator

**Route:** `/rectangle`

- Area and perimeter calculation
- Graphical rectangle visualization
- Proportional visual representation
- Explained mathematical formulas
- Example and clear functions

### 4. ✈️ Travel Cost Calculator

**Route:** `/travel`

- **Hotel Option**: $50 USD per night
  - 3+ nights discount: -$20 total
  - 7+ nights discount: -$50 total
- **Car Rental Option**: $40 USD per day
  - 3+ days discount: -$20 total  
  - 7+ days discount: -$50 total
- Detailed calculation breakdown
- Automatic discount system

### 5. 📝 Posts Manager

**Route:** `/posts`

- Blog post creation
- Complete form with validation
- Fields: title, author, content
- Real-time character counter
- Interactive list of created posts
- Session-persistent data
- Metadata information (date, reading time)

### 6. 🎬 Digital Teleprompter

**Route:** `/teleprompter`

- Professional presentation system
- **Manual Mode**: Control with navigation buttons
- **Automatic Mode**: Configurable time advance (1-10 seconds)
- Dynamic font size control
- Visual progress bar
- Quick text navigation
- 5 sample texts included
- Visual playback indicators

## 🚀 Installation

### Installation Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd Ejercicios-React
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Run in development mode**

```bash
pnpm run dev
# or  
npm run dev
```

4. **Open in browser**

```
http://localhost:5173
```

## 💻 Development

### Development Server

```bash
pnpm run dev
# or  
npm run dev
```

Starts the development server with automatic reload.

### Production Build

```bash
pnpm run build
# or  
npm run build
```

Generates an optimized production version in the `dist/` folder.

### Linting

```bash
pnpm run lint
# or  
npm run lint
```

Runs ESLint to check code quality.

### Production Preview

```bash
pnpm run preview
# or  
npm run preview
```

Serves the production build locally for testing.

## 📁 Project Structure

```
Ejercicios-React/
├── public/
│   ├── react.svg
│   └── ...
├── src/
│   ├── components/          # Reusable components
│   │   ├── ButtonGroup.jsx  # Button groups
│   │   ├── InfoCard.jsx     # Information cards
│   │   ├── InputField.jsx   # Input fields
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── PageHeader.jsx   # Page headers
│   │   ├── ProgressIndicator.jsx # Progress indicator
│   │   ├── ResultDisplay.jsx # Result display
│   │   ├── TeleprompterDisplay.jsx # Teleprompter screen
│   │   ├── CarRental.jsx    # Car rental component
│   │   ├── HotelCost.jsx    # Hotel cost component
│   │   └── *.css           # Component styles
│   ├── pages/              # Application pages
│   │   ├── Home.jsx        # Main page
│   │   ├── CurrencyConverter.jsx
│   │   ├── TemperatureConverter.jsx
│   │   ├── RectangleCalculator.jsx
│   │   ├── TravelCalculator.jsx
│   │   ├── PostsManager.jsx
│   │   ├── Teleprompter.jsx
│   │   └── *.css          # Page-specific styles
│   ├── data/              # Application data
│   │   ├── posts.json     # Sample posts
│   │   └── textos.json    # Teleprompter texts
│   ├── App.jsx            # Main component
│   ├── App.css           # Global app styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Global base styles
├── index.html            # HTML template
├── package.json         # Project configuration
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── README.md           # Documentation
```

## 🎨 Component Architecture

### Main Components

#### `ButtonGroup`

Component for creating button groups with different variants:

- Horizontal/vertical orientation
- Variants: primary, secondary, success, warning, danger
- Icon support and disabled states

#### `InfoCard`

Flexible information cards:

- Color variants (primary, success, warning, formula)
- Blog post support
- Automatic metadata (author, date, reading time)

#### `InputField`

Input field with advanced functionality:

- Real-time validation
- Character counter
- Unit symbols
- Error and focus states

#### `ResultDisplay`

Component for displaying results:

- State variants (success, warning, error, info)
- Appearance animations
- Icon support

#### `ProgressIndicator`

Sophisticated progress indicator:

- Animated progress bar
- Visual progress points
- Numbers and percentages
- Responsive design

### Design Patterns Used

- **Composition over Inheritance**: Flexible and reusable components
- **Props Drilling**: Efficient data passing between components
- **Render Props**: Components with reusable logic
- **Custom Hooks**: For shared state logic
