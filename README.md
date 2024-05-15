# Car Rent Application

Welcome to the Car Rental Application, a React application designed for a car rental company in Ukraine. This application provides users with a seamless experience to browse through available cars, add favorites, and view detailed information about each vehicle.

## Overview

- The application is composed of three main pages:

- **Home Page**: Offers a general overview of the company's services.
- **Catalog Page**: Displays a catalog of available cars, with filtering options by brand, hourly rental price, and mileage.
- **Favorites Page**: Lists advertisements that the user has added to their favorites.

## Key Features

- Initial Advertisement Display: The catalog page initially renders 12 advertisements, with an option to load more.
- Favorites Management: Users can add advertisements to their favorites list, with the button's color changing to indicate the status. The favorites list persists across page refreshes.
- Detailed Information Modal: Clicking on the "Learn more" button opens a modal window with detailed car information and rental conditions. The modal closes with the close button, clicking outside the modal, or pressing the Esc key.
- Mileage Formatting: The car's mileage is displayed with commas (e.g., 4,500).
- Contact Option: The "Rental car" button serves as a link for users to contact the company via phone at +380730000000.
- Routing: React Router handles routing with the following routes:
- /: Home page
- /catalog: Catalog page
- /favorites: Favorites page
- Non-existing routes redirect to the home page.

## Filtering Options:

- Filtering by car brand using a dropdown menu populated from makes.json.
- Filtering by hourly rental price using a dropdown menu with $10 increments.
- Filtering by mileage range using input fields.
- Pagination: Implemented with 12 advertisements per page, handled on the backend side.

## Technical Details

- Backend Simulation: Utilizes MockAPI for backend simulation.
- State Management: Redux is employed for state management.
- HTTP Requests: Axios is used for making requests.
- Styling: The project is styled using Material UI.
- Deployment: The project is deployed on GitHub Pages or Netlify.
- Installation and Usage

## To install and run the application locally:

- Clone the repository.
- Install dependencies using npm install.
- Start the development server using npm run dev.
- Access the application in your browser at http://localhost:3000.
- Feel free to explore and enjoy the Car Rental Application!
