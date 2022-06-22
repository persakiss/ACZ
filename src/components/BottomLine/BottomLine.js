import React, { useRef } from "react";
import TextInput from "../TextInput/TextInput";

function BottomLine() {

  const inputRef = useRef();
  setTimeout(() => inputRef.current.focus(), 100)


  return (
    <TextInput
      ref={inputRef}
      onLayout={() => inputRef.current.focus()}
    ></TextInput>
  );
}

export default BottomLine;
