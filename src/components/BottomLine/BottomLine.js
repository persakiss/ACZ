import React from "react";
import LeftText from "../LeftText/LeftText";
import TextInput from "../TextInput/TextInput";
import BlinkingCaret from "../BlinkingCaret/BlinkingCaret";
import './BottomLine.css';

function BottomLine() {

  return (
    <label id="bottom" htmlFor="console">
      <LeftText />
      <TextInput />
      <BlinkingCaret />
    </label>
  );
}

export default BottomLine;
