# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
# Project Specification Document: Movie Watchlist Application

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

Here are a few sources where you can find UI references for your Movie Watchlist application:

- [Dribbble](https://dribbble.com/) and [Behance](https://www.behance.net/) for design inspiration.
- [UI Movement](https://uimovement.com/) and [Awwwards](https://www.awwwards.com/) for curated UI design examples.

## Hosting and Deployment

- Candidates must host the completed application on a platform such as GitHub Pages, Vercel, Netlify, or any other hosting service of their choice.
- The hosted application should be publicly accessible.

## Deliverables

- **Source Code:**
    - Fully functional Movie Watchlist application source code.
- **Hosted Application:**
    - URL link to the hosted application.
    - Ensure the application is publicly accessible and fully functional.
- **Video Explanation:** Create a video of 2-3 minutes showing and explaining your work.