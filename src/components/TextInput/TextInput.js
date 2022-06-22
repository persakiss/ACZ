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
        onChange={changeHandler}
        id="console"
        spellCheck="false"
        autoComplete="false"
        name="hidden"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            console.log("works");
          }
        }}
      ></input>
    </>
  );
}

export default TextInput;
