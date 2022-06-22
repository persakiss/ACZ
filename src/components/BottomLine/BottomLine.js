import React from "react";
import LeftText from "../LeftText/LeftText";
import TextInput from "../TextInput/TextInput";
import './BottomLine.css';

function BottomLine() {

  return (
    <label id="bottom" for="console">
      <LeftText />
      <TextInput />
    </label>
  );
}

export default BottomLine;
