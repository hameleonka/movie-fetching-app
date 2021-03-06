# Movie fetching App
This is a simple movie fetching app that works with Firebase Realtime Database.  
User can view movies from the database and add new movie by filling out the form.  
The loading and error states are handled.  
The demo is available [https://hameleonka.github.io/movie-fetching-app/](https://hameleonka.github.io/movie-fetching-app/).
### `GET` request is used to fetch movies from the database: 
    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch('https://react-http-65cdc-default-rtdb.firebaseio.com/movies.json');

          if (!response.ok) {
            throw new Error('Something went wrong!');
          }

          const data = await response.json();
          const loadedMovies = [];

          for (const key in data) {
            loadedMovies.push({
              id: key,
              title: data[key].title,
              storyline: data[key].storyline,
              releaseYear: data[key].releaseYear
            })
          }
          setMovies(loadedMovies);
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
      }, []);

### `POST` request is used to add new movies to the database:
    const addMovieHandler = async (movie) => {
        try {
          setError(null);
          const response = await fetch('https://react-http-65cdc-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          fetchMoviesHandler();
        } catch (error) {
          setError(error.message);
        }
      };

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
