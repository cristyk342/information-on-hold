# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React single-page application for "Information On Hold," a business providing professional on-hold messaging services since 1994. The application is built using Create React App and serves as a company website showcasing their services.

## Development Commands

- **Start development server**: `npm start` - Runs the app at http://localhost:3000 with hot reload
- **Run tests**: `npm test` - Launches the test runner in interactive watch mode
- **Build for production**: `npm run build` - Creates optimized production build in `build/` folder
- **Eject configuration**: `npm run eject` - One-way operation to expose all configuration files

## Architecture

The application uses a single-component architecture with state-based navigation:

- **Single Component App**: The entire application is contained in `src/App.js` as `InformationOnHoldWebsite` component
- **State-based Navigation**: Uses React useState hook with `currentPage` state to control which page content is displayed
- **Page Components**: Each page (Home, Messaging, Work, Industries, About, Contact) is implemented as a separate functional component within the main component
- **Responsive Design**: Uses Tailwind CSS classes for responsive layout with mobile-first approach

### Key Features

- **Navigation**: Desktop navigation bar with mobile dropdown fallback
- **Page Routing**: Client-side navigation without React Router - uses conditional rendering based on state
- **Icon Integration**: Uses Lucide React icon library for consistent iconography
- **Form Handling**: Contact form with industry-specific dropdown options
- **Conditional CTA**: Call-to-action section appears on all pages except contact page

## Technology Stack

- **React 19.1.1**: Main framework with hooks (useState)
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for UI elements
- **Testing**: React Testing Library and Jest (via react-scripts)

## Code Structure

- `src/App.js`: Main component containing all page logic and rendering
- `src/index.js`: React app entry point with ReactDOM.createRoot
- `src/index.css`: Global styles with Tailwind CSS base
- `public/index.html`: HTML template with meta tags and title

## Styling Approach

The application uses Tailwind CSS exclusively with:
- Gradient backgrounds (`bg-gradient-to-r`)
- Grid layouts (`grid md:grid-cols-2 lg:grid-cols-4`)
- Shadow effects (`shadow-lg hover:shadow-xl`)
- Color-coded sections (blue, green, purple, orange themes)
- Responsive breakpoints (`md:`, `lg:`)