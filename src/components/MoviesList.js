import Movie from './Movie';

import classes from './MoviesList.module.css';

function MovieList(props) {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          storyline={movie.storyline}
          releaseYear={movie.releaseYear}
        />
      ))}
    </ul>
  );
};

export default MovieList;