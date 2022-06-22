import "./TextInput.css";
import React, { useState } from "react";

function TextInput(props) {

  // changing input field width
  const [width, setWidth] = useState(0);

  // internal useState to know how much to add to
  const [count, setCount] = useState(0);

  const changeHandler = (evt) => {
    setWidth(evt.target.value.length);
  };

  return (
    <div className={"s"+count}>
      <input
        type="text"
        style={{ width: width + "ch" }}
        autoFocus
        onChange={changeHandler}
        id="console"
        spellCheck="false"
        autoComplete="false"
        name="hidden"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setCount(count+1);
            props.changeLine(count);
          }
        }}
      />
    </div>
  );
}

export default TextInput;
