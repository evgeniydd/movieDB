import React from 'react';

const MovieSearch = (props) => {
  const getSugg = (sugg) => {
    props.getSuggValue(sugg);
  };

  return (
    <div className='search-box'>
      <div className='logo'>
        MOVIE<span>DB</span>
      </div>
      <form onSubmit={props.handlerOnSubmit} className='search-form'>
        <input
          value={props.searchValue}
          onChange={props.searchChange}
          className='searchInput'
          type='text'
          placeholder='Type to search...'
        />
        <div className='search-sugg'>
          {props.suggestions &&
            props.suggestions.map((sug, i) => (
              <div onClick={() => getSugg(sug.id)} className='sugg-item' key={i}>
                {sug.title}
              </div>
            ))}
        </div>
      </form>
    </div>
  );
};

export default MovieSearch;
