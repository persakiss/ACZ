import React, { useRef } from "react";
import TextInput from "../TextInput/TextInput";

function BottomLine() {

  const inputRef = useRef();
  setTimeout(() => inputRef.current.focus(), 400)


  return (
    <TextInput
      ref={inputRef}
      onLayout={setTimeout}
    ></TextInput>
  );
}

export default BottomLine;
