# Movie Discovery App

A responsive movie discovery application built with React, Vite, and Tailwind CSS that fetches and displays popular movies from The Movie Database (TMDB) API.

![Movie App Screenshot](./public/hero.png)

## Features

- Discover popular movies
- View movie details (title, rating, release year, language)
- Responsive design for all devices
- Loading states and error handling
- Modern UI with Tailwind CSS styling

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- TMDB API

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DmcDiyar/movie-apps.git
   ```

2. Navigate to the project directory:
   ```bash
   cd movie-apps
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your TMDB API key:
   ```
   VITE_TIMDB_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint on the project

## Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx    # Displays individual movie information
│   ├── Search.jsx       # Search input component
│   └── Spinner.jsx      # Loading spinner component
├── App.jsx              # Main application component
├── index.css            # Global styles
└── main.jsx             # Entry point
```

## API Integration

This project uses The Movie Database (TMDB) API to fetch movie data. You'll need to sign up for a free API key at [themoviedb.org](https://www.themoviedb.org/documentation/api).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.