import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';

// Use State 3 Things to know
// 1) Pattern
// 2) first item in the array is variable name, the second item in the array is the setter function
// 3) when you pass useState an argument that will be the default value

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke'); // useState provides assigns the first item using the second item thats a function.
  const [joke, setJoke] = useState({});

  console.warn(joke);
  console.warn(setBtnText);

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  return (
    <div className="App">
      <h1>{joke.setup}</h1>
      <h5>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h5>
      {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
        <button onClick={getAJoke} type="button">
          {btnText}
        </button>
      ) : (
        <button
          onClick={() => setButton('Get Another Joke')}
          className="btn btn-success"
          type="button"
        >
          {btnText}
        </button>
      )}
    </div>
  );
}

export default Initialize;
