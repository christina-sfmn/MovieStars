# Moviestar App with React

This is a simple React application that allows you to view and add movie stars. The app displays a list of movie stars with their details and provides a form to add new movie stars to the list.

## Features

- View a list of movie stars with details like first name, last name, age, height, and gender.
- Open a modal with detailed information about each movie star.
- Add new movie stars to the list using a form.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/christina-sfmn/MovieStars.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MovieStars
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5000` (or the appropriate port if different).

## Components

### App.tsx

The main component that renders the application layout. It includes the `MoviestarView` component to display the list of movie stars.

### MoviestarView.tsx

This component manages the list of movie stars and the selected movie star for the modal view. It also includes the `MoviestarInput` component to add new movie stars.

### MoviestarElement.tsx

A component that renders the details of a single movie star and includes a button to view more details in a modal.

### MoviestarModal.tsx

A modal component that displays detailed information about a selected movie star. It includes a close button to close the modal.

### MoviestarInput.tsx

A form component that allows users to add new movie stars to the list. The form includes fields for first name, last name, age, height, and gender.
