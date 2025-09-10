# Star Wars Character Explorer

![Star Wars image](https://i.ibb.co/Sd1QZjj/starwars.png)

A modern React application for exploring and editing Star Wars character profiles. Built with TypeScript, Material-UI, and MobX for a seamless user experience.

**🚀 [Live Demo](https://romantrukhtanov.github.io/star-wars-demo/)**

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Development](#development)
- [Scripts](#scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 About the Project

Star Wars Character Explorer is a web application that allows users to browse, view, and edit Star Wars character profiles. The application features a clean, modern interface built with Material-UI components and provides an engaging way to explore the Star Wars universe.

### Key Highlights

- **Interactive Character Profiles**: View detailed information about Star Wars characters
- **Editable Biographies**: Users can edit and update character biographies
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI/UX**: Clean interface with Material-UI components
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Type Safety**: Full TypeScript implementation for reliability

## ✨ Features

- 🔍 Browse Star Wars characters
- 📝 Edit character biographies with form validation
- 📱 Responsive design for all devices  
- ⚡ Fast loading with skeleton screens
- 🎨 Modern Material-UI interface
- 🔄 Persistent state management with MobX
- 🧪 Comprehensive testing coverage
- ♿ Accessibility features

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Material-UI (MUI)** - React component library for consistent UI
- **MobX** - Simple, scalable state management
- **React Router** - Declarative routing for React applications
- **React Hook Form** - Performant forms with easy validation

### Build Tools & Development
- **Vite** - Next generation frontend tooling
- **Vitest** - Blazing fast unit testing framework
- **ESLint** - Code linting with Airbnb configuration
- **Prettier** - Code formatting for consistency
- **Husky** - Git hooks for code quality
- **PostCSS** - CSS transformations

### Deployment
- **GitHub Pages** - Automated deployment via GitHub Actions
- **GitHub Actions** - CI/CD pipeline for testing and deployment

## 🏗 Architecture

The project follows a feature-based architecture with clear separation of concerns:

```
src/
├── core/                 # Core application setup
│   ├── App.tsx          # Root application component
│   ├── Router.tsx       # Application routing
│   ├── Layout/          # Main layout components
│   ├── api/             # API layer and data models
│   └── stores.ts        # MobX store configuration
├── pages/               # Page components
│   └── character/       # Character-related pages
│       ├── Character.tsx           # Main character page
│       ├── EditableBio/           # Editable biography component
│       └── CharacterSkeletons/    # Loading skeletons
├── stores/              # MobX stores
│   └── settings/        # Application settings store
├── utils/               # Utility functions and hooks
├── tests/               # Testing utilities and mocks
└── types/               # TypeScript type definitions
```

### Key Architectural Decisions

- **MobX for State Management**: Provides reactive state management with minimal boilerplate
- **Component-Based Architecture**: Modular, reusable components for maintainability
- **TypeScript Throughout**: Full type safety across the entire application
- **CSS Modules**: Scoped styling to prevent conflicts
- **API Layer Abstraction**: Centralized API management for data consistency

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/romantrukhtanov/star-wars-project.git
   cd star-wars-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:9000](http://localhost:9000)

## 💻 Development

### Environment Setup

The project uses several environment variables for configuration:

- `VITE_BASE_URL` - API base URL for Star Wars data

### Code Style

The project enforces consistent code style through:

- **ESLint** with Airbnb configuration
- **Prettier** for code formatting
- **Husky** pre-commit hooks for quality checks

Run code quality checks:
```bash
npm run lint        # Check for linting errors
npm run lint:fix    # Fix linting errors automatically
npm run format      # Format code with Prettier
```

### Development Workflow

1. Create a feature branch from `main`
2. Make your changes with proper TypeScript types
3. Add tests for new functionality
4. Ensure all tests pass: `npm test`
5. Check code quality: `npm run lint`
6. Submit a pull request

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run ts` | Run TypeScript type checking |
| `npm test` | Run all tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code for linting errors |
| `npm run lint:fix` | Fix linting errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is properly formatted |
| `npm run prepare` | Install Husky git hooks |

## 🧪 Testing

The project uses **Vitest** for testing with comprehensive coverage:

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: Feature testing with user interactions
- **Snapshot Tests**: UI regression testing

### Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

### Testing Philosophy

- Tests are written using React Testing Library
- Focus on testing user behavior rather than implementation details
- Comprehensive test coverage for critical user flows

## 🚀 Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions:

### Automatic Deployment

- **Trigger**: Push to `main` branch
- **Build**: Vite production build
- **Deploy**: GitHub Pages
- **URL**: [romantrukhtanov.github.io/star-wars-demo](https://romantrukhtanov.github.io/star-wars-demo/)

### Manual Deployment

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

The build artifacts are generated in the `build/` directory and can be deployed to any static hosting service.

## 🤝 Contributing

We welcome contributions to improve the Star Wars Character Explorer! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** with proper tests and documentation
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Add tests for new features or bug fixes
- Update documentation as needed
- Ensure all tests pass before submitting
- Write clear, descriptive commit messages

## 📝 License

This project is created for educational and demonstration purposes.

## 🙏 Acknowledgments

- Star Wars API for character data
- Material-UI team for the excellent component library
- React and TypeScript communities for the amazing tools
- All contributors who help improve this project

---

**Made with ❤️ by Roman Trukhtanov** 🌟
