import React, { useRef } from "react";
import LeftText from "../LeftText/LeftText";
import TextInput from "../TextInput/TextInput";
import './BottomLine.css';

function BottomLine() {
  const inputRef = useRef();
  setTimeout(() => inputRef.current.focus(), 1000);

  return (
    <label id="bottom" for="console">
      <LeftText />
      <TextInput ref={inputRef} onLayout={setTimeout} />
    </label>
  );
}

export default BottomLine;
