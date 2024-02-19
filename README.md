# Star Wars Challenge - Next.js Project by Taylor Hayduk

## Overview

This project is a part of a take-home assessment for the Star Wars challenge. It's built using Next.js and adheres to the back-ends for front-ends (BFF) pattern for its architecture. The application features a rudimentary authentication system and provides information on Star Wars starships and manufacturers.

## Features

- **Authentication System**: A simple authentication system is implemented in `auth.ts`, utilizing JWT for session encryption and decryption. It currently allows a single, hard-coded user.

- **Middleware**: In `middlewares.ts`, the application checks for session existence on any backend requests. If a session is not found, it redirects the user to the login page, effectively securing all endpoints except the login page.

- **Pages**:
  - **Login Page**: A basic form that logs the user in.
  - **Starships Page**: Once authenticated, the user is redirected here. This page fetches and displays starships and manufacturers. It dynamically updates the list of starships when a manufacturer is selected.

## Technical Details

- **Backend Architecture**: Follows the Next.js BFF pattern.
- **API Routes**:

  - `/api/manufacturers`: Handles fetching of manufacturers.
  - `/api/starships`: Deals with fetching starships, including parsing through multiple pages from StarWars API to retrieve all available starships. It also allows for filtering by manufacturer.

- **Data Fetching**:
  - **Swapi Namespace**: A set of functions (`fetchStarships`, `fetchManufacturers`) for interacting with the Star Wars API (Swapi), designed for scalability despite currently having only two main functions.

## Improvements

While the application serves its purpose, there are areas for improvement, such as incorporating `getStaticProps` for better data fetching efficiency.

## Getting Started

To run this project locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Navigate to `http://localhost:3000` to view the application.
