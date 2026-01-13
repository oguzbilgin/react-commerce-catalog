# React Commerce Catalog

A modern, scalable e-commerce catalog frontend built to demonstrate best practices in React architecture, state management, and UI composition.

This project focuses on clean separation of concerns, reusable custom hooks, and a maintainable folder structure rather than just UI rendering.

---

## Features

- Product listing fetched from a REST API
- Debounced search for improved performance
- Client-side sorting (title, price ascending/descending)
- Client-side pagination
- Shopping cart with global state management (Context API)
- Product detail pages with dynamic routing
- Responsive layout built with Material UI
- Layout-based routing using React Router

---

## Architecture Overview

The application is structured to reflect real-world frontend applications:

- **Pages** handle routing-level concerns
- **Components** focus on UI rendering
- **Custom Hooks** encapsulate business logic and side effects
- **Context API** manages shared global state (shopping cart)
- **Types** ensure full type safety across the application

Business logic such as filtering, sorting, and pagination is intentionally abstracted into reusable hooks to keep components clean and readable.

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Material UI**
- **React Router**
- **Axios**

---

## 📂 Project Structure

```text
src/
 ├── components/        # Reusable UI components
 ├── pages/             # Route-level pages
 ├── hooks/             # Custom hooks (business logic)
 ├── context/           # Global state management
 ├── layouts/           # Shared layout components
 ├── types/             # TypeScript types
 ├── constants/         # Shared constants
 ├── router.tsx         # Application routes
 └── main.tsx           # Application entry point
```
 
## Getting Started

```bash
npm install
npm run dev
```

The application will be available at http://localhost:5173.

## 👤 Author
**Oğuzhan Bilgin**
- [Github](https://github.com/oguzbilgin)
- [LinkedIn](https://www.linkedin.com/in/oguzhanbilgin/)
