import React, { useRef } from "react";
import TextInput from "../TextInput/TextInput";

function BottomLine() {
  const inputRef = useRef();
  setTimeout(() => inputRef.current.focus(), 1000);

  return (
    <label for="console">
      <TextInput ref={inputRef} onLayout={setTimeout} />
    </label>
  );
}

export default BottomLine;
