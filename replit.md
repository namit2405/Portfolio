# Portfolio Application - Development Guide

## Overview

This is a modern portfolio website built as a full-stack application featuring a React frontend with TypeScript, Django REST API backend, and SQLite database. The application showcases personal projects, skills, experience, education, certifications, and includes a contact form for potential clients or employers to reach out.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Django 5.2.4 with Django REST Framework
- **Language**: Python 3.11
- **API Design**: RESTful API structure
- **Database**: SQLite for development (easily configurable for PostgreSQL in production)
- **Validation**: Django model validation and DRF serializers
- **Development**: Django's built-in development server with auto-reload

### Data Storage
- **Database**: SQLite for development (Django default)
- **ORM**: Django ORM with built-in migrations
- **Models**: Django models with automatic field validation
- **Admin Interface**: Django admin panel for data management

## Key Components

### Core Features
1. **Portfolio Showcase**: Personal information, skills, experience, education, and project display
2. **Professional Sections**: Experience timeline, education history, certifications, and personal details
3. **Contact Form**: Functional contact form with validation and database storage
4. **Responsive Design**: Mobile-first approach with Tailwind CSS
5. **Component Library**: Comprehensive UI components using Radix UI primitives
6. **Admin Interface**: Django admin panel for managing contact submissions

### Database Models
```python
# Contact model for form submissions
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
```

### API Endpoints
- `POST /api/contact/` - Submit contact form
- `GET /api/contacts/` - Retrieve all contact submissions (admin functionality)
- Django admin panel at `/admin/` for data management

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in React frontend
   - Form data validated using Zod schema on client-side
   - Submitted via TanStack Query mutation to Django REST API backend
   - Backend validates data using Django REST Framework serializers
   - Data stored in SQLite database via Django ORM
   - Success/error feedback shown to user via toast notifications

2. **Project Display**:
   - Project data statically defined in React components
   - Rendered using reusable ProjectCard components
   - Responsive grid layout with hover animations

3. **Navigation**:
   - Smooth scrolling navigation between sections
   - Active section highlighting based on scroll position
   - Mobile-responsive hamburger menu

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: wouter
- **State Management**: @tanstack/react-query
- **Forms**: react-hook-form, @hookform/resolvers
- **Validation**: zod
- **Styling**: tailwindcss, clsx, tailwind-merge
- **Components**: @radix-ui/* components
- **Animations**: framer-motion
- **Icons**: lucide-react
- **Utilities**: date-fns, class-variance-authority

### Backend Dependencies
- **Framework**: django, djangorestframework
- **Database**: SQLite (Django default)
- **CORS**: django-cors-headers
- **Environment**: python-dotenv

### Development Tools
- **Build**: vite, @vitejs/plugin-react
- **TypeScript**: typescript
- **CSS**: postcss, autoprefixer
- **Database**: Django migrations system

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express server for production
3. **Database**: Drizzle migrations applied via `drizzle-kit push`

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

### Production Setup
- Frontend assets served statically by Express
- Express server handles API routes and serves React app
- PostgreSQL database for persistent data storage
- Session management configured with connect-pg-simple

### Development Workflow
- Hot reload via Vite development server
- API routes proxied to Express backend
- In-memory storage fallback for local development
- TypeScript compilation checking across frontend/backend/shared code

The application uses a monorepo structure with shared TypeScript definitions, enabling type safety across the full stack while maintaining clear separation between client and server concerns.