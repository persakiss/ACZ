import React, { useRef } from "react";
import TextInput from "../TextInput/TextInput";

function BottomLine() {
  
  const inputRef = useRef();


  return (
    <TextInput
      ref={inputRef}
      onLayout={() => inputRef.current.focus()}
    ></TextInput>
  );
}

export default BottomLine;
