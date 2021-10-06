import React, { useState } from 'react';
// import getJoke from '../api/data/jokeData';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  // getJoke().then(console.warn);
  console.warn(setBtnText);

  const setButton = (text) => {
    setBtnText(text);
  };

  return (
    <div className="App">
      {btnText === 'Get a Joke' ? (
        <p>Get the Joke man!</p>
      ) : (
        <button
          onClick={() => setButton('Get Punchline')}
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
