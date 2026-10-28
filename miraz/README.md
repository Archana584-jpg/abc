# Miraz - React Application

A modern React application built with Vite, featuring a clean architecture and reusable components.

## 🚀 Getting Started

### Prerequisites

-  Node.js (v16 or higher)
-  Yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd miraz
```

2. Install dependencies using Yarn

```bash
yarn install
```

### Running the Project

#### Development Mode

```bash
yarn dev
```

This will start the development server at `http://localhost:5173`

#### Build for Production

```bash
yarn build
```

#### Preview Production Build

```bash
yarn preview
```

#### Linting

```bash
yarn lint
```

## 🏗️ High-Level Design

### Architecture Overview

This project follows a component-based architecture with the following key principles:

-  **Component-Driven Development**: Reusable UI components in the `src/shared/` directory
-  **Modern React Patterns**: Functional components with hooks
-  **Responsive Design**: Mobile-first approach with Tailwind CSS
-  **Performance Optimized**: Vite for fast development and optimized builds

### Technology Stack

-  **Framework**: React 18+
-  **Build Tool**: Vite
-  **Styling**:
   -  Tailwind CSS for utility-first styling
   -  Ant Design (antd) for pre-built components
-  **Code Quality**: ESLint for code linting
-  **Package Manager**: Yarn

### Project Structure

```
miraz/
├── src/
│   ├── shared/           # Reusable components
│   │   ├── spinner/      # Custom loading spinner component
│   │   └── ...
│   ├── components/       # Feature-specific components
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   └── App.jsx          # Main application component
├── public/              # Static assets
└── package.json         # Project dependencies
```

### Key Features

#### Custom Spinner Component

-  **Location**: `src/shared/spinner/`
-  **Features**:
   -  Fullscreen loading overlay
   -  Customizable colors
   -  Ant Design integration
   -  Responsive design

#### Styling System

-  **Tailwind CSS**: Utility-first CSS framework for rapid UI development
-  **Ant Design**: Enterprise-class UI components
-  **Custom Components**: Styled with Tailwind classes for consistency

### Development Guidelines

1. **Component Structure**: Each component should be in its own directory with an `index.jsx` file
2. **Styling**: Use Tailwind classes for styling, avoid inline styles
3. **Props**: Always define prop types and default values
4. **Reusability**: Create shared components for common UI patterns

### Performance Considerations

-  **Code Splitting**: Components are lazy-loaded where appropriate
-  **Bundle Optimization**: Vite handles automatic code splitting and optimization
-  **Tree Shaking**: Unused code is eliminated during build process

## 🛠️ Development

### Adding New Components

1. Create a new directory in `src/shared/` for reusable components
2. Create an `index.jsx` file with your component
3. Export your component as default
4. Document props and usage in comments

### Customization

#### Tailwind Configuration

Customize Tailwind settings in `tailwind.config.js`

#### Ant Design Theme

Modify Ant Design theme in your main CSS file or component level

## 📦 Scripts

-  `yarn dev` - Start development server
-  `yarn build` - Build for production
-  `yarn preview` - Preview production build locally
-  `yarn lint` - Run ESLint

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Write meaningful commit messages
3. Test your changes thoroughly
4. Update documentation when needed

## 📄 License

This project is licensed under the MIT License.
