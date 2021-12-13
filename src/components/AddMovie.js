import { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const formRef = useRef();
  const titleRef = useRef('');
  const storylineRef = useRef('');
  const releaseYearRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();
    const movie = {
      title: titleRef.current.value,
      storyline: storylineRef.current.value,
      releaseYear: releaseYearRef.current.value,
    };

    props.onAddMovie(movie);
    formRef.current.reset();
  }

  return (
    <form onSubmit={submitHandler} ref={formRef}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='storyline'>Storyline</label>
        <textarea rows='10' id='storyline' ref={storylineRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='year'>Release Year</label>
        <input type='text' id='year' ref={releaseYearRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
