import React from "react";

function GuessInput({ handleAddGuess = () => { } }) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddGuess(input);

    setInput('');
  }

  const handleInputChange = (event) => {
    const newValue = event.target.value.toUpperCase();
    setInput(newValue);
  }


  return (
    <>
      <form
          className="guess-input-wrapper"
          onSubmit={handleSubmit}
      >
          <label htlmfor="guess-input">Enter guess:</label>
          <input
              id="guess-input"
              type="text"
              value={input}
              minLength={5}
              maxLength={5}
              pattern="[a-zA-Z]{5}"
              title="5 letter word"
              required={true}
              onChange={handleInputChange}
          />
      </form>
  </>
  );
}

export default GuessInput;
