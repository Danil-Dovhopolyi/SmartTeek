import './Result.scss';
import React from 'react';

function Result() {
  let textInput = React.createRef();

  let outputNumbers = (e) => {
    console.log(textInput.current.value);
  };

  return (
    <div className="result">
      <div className="result__expression">
        <input ref={textInput} type="text" />
        <button onClick={outputNumbers} value="7">
          7
        </button>
      </div>
      <div className="result__answer">
        <input type="text" />
      </div>
    </div>
  );
}

export default Result;
