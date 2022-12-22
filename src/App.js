import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieSearch from './components/MovieSearch';

function App() {
  const [movie, setMovie] = useState([]);
  const [movieID, setMovieID] = useState(338953);
  const [searchTerm, setSearchTerm] = useState('');
  const BASE_API = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`;
  const [suggestions, setSuggestions] = useState([]);
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';
  const [allMovies, setAllMovies] = useState([]);

  const getMovie = async () => {
    const url = await fetch(BASE_API);
    const res = await url.json();

    console.log(res);
    setMovie(res);
  };

  const getAllMovies = () => {
    if (searchTerm) {
      fetch(SEARCH_API + searchTerm.toLowerCase())
        .then((res) => res.json())
        .then((data) => {
          setAllMovies(data.results);
        });
    }
  };

  getAllMovies();

  const searchChange = (e) => {
    let matches = [];
    if (searchTerm.length > 0) {
      matches = allMovies
        .filter((title) => {
          const regex = new RegExp(`${searchTerm}`, 'gi');
          return title.title.match(regex);
        })
        .sort((a, b) => {
          return b.popularity - a.popularity;
        });
    }

    setSuggestions(matches);
    setSearchTerm(e.target.value);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      console.log(movie.id);
    }
  };

  const test = (sugg) => {
    setMovieID(sugg);
    setSuggestions([]);
    setSearchTerm('');
  };

  useEffect(() => {
    getMovie();
  }, [movieID]);

  return (
    <div className='app'>
      <MovieSearch
        searchValue={searchTerm}
        searchChange={searchChange}
        handlerOnSubmit={handlerOnSubmit}
        suggestions={suggestions}
        getSuggValue={test}
      />

      <MovieCard movie={movie} />
    </div>
  );
}

export default App;
