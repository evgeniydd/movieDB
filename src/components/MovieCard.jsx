import React, { useEffect } from 'react';

const MovieCard = ({ movie }) => {
  let totalRevenue = movie.revenue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let posterImg = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
  let backdropImg = 'https://image.tmdb.org/t/p/original' + movie.backdrop_path;

  if (movie.poster_path == null) {
    posterImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
  }

  document.body.style.backgroundImage = 'url(' + backdropImg + ')';

  return (
    <div className='card'>
      <div className='card-wrap'>
        <img className='card-poster' src={posterImg} alt='' />
        <div className='card-wrap-right'>
          <h1 className='card-title'>{movie.title}</h1>
          <p className='tagline'>{movie.tagline}</p>
          <p className='overview'>{movie.overview}</p>
          <div className='genre'>
            {movie.genres?.map((genre) => (
              <span key={genre.id}>
                {genre.name}
                <span className='comma'>, </span>
              </span>
            ))}
          </div>
          <p className='production'>
            {movie.production_companies?.map((prod) => (
              <span key={prod.id}>
                {prod.name}
                <span className='comma'>, </span>
              </span>
            ))}
          </p>
          <div className='release-details'>
            <div>
              Original Release: <span>{movie.release_date}</span>
            </div>
            <div>
              Running Time: <span>{movie.runtime} mins</span>
            </div>
            <div>
              Box Office: <span>${totalRevenue}</span>
            </div>
            <div>
              Vote Average: <span>{movie.vote_average?.toFixed(1)} / 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
