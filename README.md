# Product Builder

A modern React application for managing and building product catalogs with an intuitive user interface. Built with React 19, TypeScript, and Vite for optimal performance and developer experience.

## 🚀 Features

- **Product Management**: Create, edit, and delete products with ease
- **Interactive UI**: Modern interface with modals and responsive design
- **Type Safety**: Full TypeScript support for robust development
- **Real-time Feedback**: Toast notifications for user actions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Reusable UI components for consistent design

## 🛠️ Tech Stack

### Core Technologies

- **React 19** - Latest React version with improved performance
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4.1** - Utility-first CSS framework

### UI & UX Libraries

- **@headlessui/react** - Unstyled, accessible UI components
- **react-hot-toast** - Beautiful toast notifications
- **@faker-js/faker** - Generate fake data for development

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - React support for Vite

## 📁 Project Structure

```
product-builder/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Application assets
│   ├── components/        # Reusable React components
│   │   ├── ui/           # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Circle.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   ├── Img.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Select.tsx
│   │   ├── AddModal.tsx   # Product creation modal
│   │   ├── DeleteModal.tsx # Product deletion confirmation
│   │   ├── InfoCard.tsx   # Information display card
│   │   ├── PriceAndColor.tsx # Price and color selector
│   │   └── ProductCard.tsx # Product display card
│   ├── constants/         # Application constants
│   ├── interfaces/        # TypeScript interfaces
│   ├── lib/              # Utility libraries
│   ├── pages/            # Application pages
│   │   └── products/     # Product management pages
│   │       ├── index.tsx
│   │       └── useProduct.tsx
│   ├── validations/      # Form validation schemas
│   ├── App.tsx           # Main application component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment types
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TypeScript config
├── tsconfig.node.json    # Node-specific TypeScript config
├── vite.config.ts        # Vite configuration
└── yarn.lock             # Yarn lock file
```

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **Yarn** (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd product-builder
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 📜 Available Scripts

- **`yarn dev`** - Start the development server with hot reload
- **`yarn build`** - Build the application for production
- **`yarn lint`** - Run ESLint to check code quality
- **`yarn preview`** - Preview the production build locally

## 🏗️ Component Architecture

### UI Components (`src/components/ui/`)

Base components that provide consistent styling and behavior:

- **Button** - Customizable button component
- **Input** - Form input with validation support
- **Modal** - Reusable modal dialog
- **Select** - Dropdown selection component
- **Circle** - Color indicator component
- **Img** - Optimized image component
- **ErrorMessage** - Form error display

### Feature Components (`src/components/`)

Higher-level components for specific features:

- **ProductCard** - Display individual product information
- **AddModal** - Form for creating new products
- **DeleteModal** - Confirmation dialog for product deletion
- **PriceAndColor** - Product pricing and color selection
- **InfoCard** - General information display card

## 🎨 Styling

The project uses **Tailwind CSS 4.1** for styling with:

- Utility-first approach for rapid development
- Responsive design patterns
- Custom color schemes and spacing
- Component-based styling architecture

## 📱 Responsive Design

The application is built with a mobile-first approach:

- Responsive grid layouts
- Adaptive component sizing
- Touch-friendly interactions
- Optimized for various screen sizes

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all new components
- Follow React functional component patterns
- Implement proper error handling
- Use custom hooks for complex logic

### File Naming

- Components: PascalCase (e.g., `ProductCard.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useProduct.tsx`)
- Utilities: camelCase (e.g., `formatPrice.ts`)
- Constants: UPPER_SNAKE_CASE

### Component Structure

```typescript
// Component imports
import React from 'react';
import { ComponentProps } from '../interfaces';

// Component definition
export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic

  return (
    // JSX
  );
};
```

## 🚀 Deployment

### Build for Production

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
```

**Built with ❤️ using React, TypeScript, and Vite**
