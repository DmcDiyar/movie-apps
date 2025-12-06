<<<<<<< HEAD
# React Movie Discovery App with Supabase

A modern movie discovery application built with React, Vite, and Supabase. This app allows users to search for movies using The Movie Database (TMDB) API and tracks popular searches using Supabase as the backend.

## Features

- Search movies using TMDB API
- View trending searches powered by Supabase
- Responsive design with Tailwind CSS
- Real-time search tracking
- Modern UI with React and Vite

## Tech Stack

- **Frontend**: React 18.3.1, Vite 6.0.5
- **Backend**: Supabase (Database, Authentication)
- **Styling**: Tailwind CSS 4.0.0
- **Utilities**: react-use 17.6.0
- **API**: The Movie Database (TMDB) API

## Prerequisites

Before you begin, ensure you have the following:

1. Node.js (version 14 or higher)
2. A Supabase account and project
3. A TMDB API key

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd react-movies-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add your configuration:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Set Up Supabase Database

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL commands from `SUPABASE_TABLES.sql` to create the required table:

```sql
-- Create the search_terms table for tracking popular searches
CREATE TABLE search_terms (
  id SERIAL PRIMARY KEY,
  search_term VARCHAR(255) NOT NULL UNIQUE,
  count INTEGER DEFAULT 1,
  movie_id INTEGER,
  poster_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_search_terms_count ON search_terms(count DESC);
CREATE INDEX idx_search_terms_term ON search_terms(search_term);

-- Enable Row Level Security (RLS) for the table
ALTER TABLE search_terms ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read and write access
CREATE POLICY "Allow public read access" ON search_terms
FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON search_terms
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update" ON search_terms
FOR UPDATE USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON TABLE search_terms TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE search_terms_id_seq TO anon, authenticated;
```

### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).
=======
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
>>>>>>> b6c7eb5bcc9226133a83f588a7c22372bbd0cf57

## Project Structure

```
src/
├── components/
<<<<<<< HEAD
│   ├── MovieCard.jsx     # Displays individual movie information
│   ├── Search.jsx        # Search input component
│   └── Spinner.jsx       # Loading spinner component
├── appwrite.js           # Supabase client implementation (despite the name)
├── App.css               # Main application styles
├── App.jsx               # Main application component
├── index.css             # Global styles
└── main.jsx              # Entry point
```

## How It Works

1. Users can search for movies using the search bar
2. Search results are fetched from TMDB API
3. Popular searches are tracked in Supabase database
4. Trending searches are displayed on the homepage

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the production-ready application
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint on the project

## Deployment

To deploy the application:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your preferred hosting platform (Vercel, Netlify, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the movie API
- [Supabase](https://supabase.io/) for the backend infrastructure
- [React](https://reactjs.org/) for the frontend framework
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
=======
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
>>>>>>> b6c7eb5bcc9226133a83f588a7c22372bbd0cf57
