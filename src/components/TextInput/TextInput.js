import "./TextInput.css";
import React, { useState } from "react";

function TextInput() {
  const [width, setWidth] = useState(0);

  const changeHandler = (evt) => {
    setWidth(evt.target.value.length);
  };

  return (
    <>
      <input
        type="text"
        style={{ width: width + "ch" }}
        autoFocus
        onFocus="this.select()"
        onChange={changeHandler}
        id="console"
        spellcheck="false"
        autoComplete="false"
        name="hidden"
      ></input>
      <span className="blinking">_</span>
    </>
  );
}

export default TextInput;
