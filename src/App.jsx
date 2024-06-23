import MovieList from "./Movielist.jsx"
import Filter from "./Filter.jsx"
import React, { useState } from 'react';
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://example.com/poster1.jpg',
      rating: 4.5
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://example.com/poster2.jpg',
      rating: 4.7
    }
  
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState('');

  const handleTitleChange = (value) => {
    setFilterTitle(value);
  };

  const handleRateChange = (value) => {
    setFilterRate(value);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRate === '' || movie.rating >= parseFloat(filterRate))
  );

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter
        filterTitle={filterTitle}
        filterRate={filterRate}
        handleTitleChange={handleTitleChange}
        handleRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        {}
        <form onSubmit={(e) => {
          e.preventDefault();
          const newMovie = {
            title: e.target.title.value,
            description: e.target.description.value,
            posterURL: e.target.posterURL.value,
            rating: parseFloat(e.target.rating.value)
          };
          addMovie(newMovie);
          e.target.reset();
        }}>
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="url" name="posterURL" placeholder="Poster URL" required />
          <input type="number" name="rating" step="0.1" min="0" max="5" placeholder="Rating (0.0 - 5.0)" required />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default App;

