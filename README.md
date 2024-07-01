## Live Link: https://react-moviewatchlist.onrender.com

## Video Explanation Link: https://youtu.be/7O3dojYf4FM

**Note:** The live link takes a few minutes to load up on the first visit. This is because render.com spins down the server when not in use to conserve resources.

## Local Setup

**To run the project locally, follow these steps:**

1. Clone the repository: `https://github.com/alqamah/react-movieWatchlist.git`

2. Navigate to the project directory: `cd movie-watchlist`

3. Install the dependencies: `npm install`

4. Start the development server: `npm start`

5. Open your browser and visit `http://localhost:3000` to view the application.


## Project Overview

The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management will be handled using Redux to ensure efficient and predictable state updates.

## Key Features

1. **Add Movies**
    - Users can add movies to their watchlist by providing details such as the movie title, description, release year, and genre.
    - Each movie should have a unique identifier.
2. **Edit Movies**
    - Users can edit the details of movies already in their watchlist.
3. **Delete Movies**
    - Users can delete movies from their watchlist.
4. **Mark Movies as Watched/Unwatched**
    - Users can toggle the status of a movie between watched and unwatched.
5. **Rate and Review Movies**
    - Users can rate movies on a scale of 1 to 5 stars.
    - Users can provide a text review for each movie.
6. **State Management with Redux**
    - All state changes (adding, editing, deleting movies, marking as watched/unwatched, rating, and reviewing) will be managed using Redux.

## Functional Requirements

### 1. Movie Management

- **Add Movie**
    - Form fields: Title (required), Description, Release Year, Genre.
    - On successful submission, the movie is added to the watchlist.
- **Edit Movie**
    - Users can select a movie from the watchlist to edit its details.
    - Form fields pre-filled with existing movie details.
    - On successful submission, the movie details are updated.
- **Delete Movie**
    - Users can delete a movie from the watchlist.
    - Confirmation prompt before deletion.

### 2. Watch Status Management

- **Mark as Watched/Unwatched**
    - Toggle button or checkbox to mark a movie as watched or unwatched.

### 3. Rating and Reviewing

- **Rate Movie**
    - Star rating component allowing users to rate a movie from 1 to 5 stars.
- **Review Movie**
    - Textarea input for users to write a review.

## Technical Specifications

### 1. Technology Stack

- **Frontend:**
    - React.js for building the user interface.
    - Redux for state management.
    - CSS/SCSS for styling.
- **Backend:**
    - Mock API using JSON server or a similar tool for the initial implementation.
    - Optionally, a Node.js/Express server if a custom backend is needed later.
- **Database:**
    - JSON file for storing movie data in the initial phase.
    - Optionally, a NoSQL database like MongoDB for persistent storage.

## User Interface Design

### 1. Home Page

- Display a list of movies in the watchlist.
- Buttons/links to add a new movie, edit or delete existing movies, and mark movies as watched/unwatched.

### 2. Add/Edit Movie Page

- Form for adding or editing movie details.
- Fields: Title, Description, Release Year, Genre.
- Save and Cancel buttons.

### 3. Movie Details Page

- Display movie details including title, description, release year, genre, watch status, rating, and reviews.
- Options to edit or delete the movie, mark it as watched/unwatched, and add/edit a rating and review.

