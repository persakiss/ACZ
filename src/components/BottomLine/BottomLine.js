import React, { useState} from "react";
import LeftText from "../LeftText/LeftText";
import TextInput from "../TextInput/TextInput";
import BlinkingCaret from "../BlinkingCaret/BlinkingCaret";
import './BottomLine.css';

function BottomLine() {
  const [ line, setLine ] = useState(0);
  const [ enter, setEnter ] = useState(0);

  const enterTriggered = () => {
    setLine(line + 1)
  }


  return (
    <label id="bottom" htmlFor="console">
      {/* {line} */}
      <LeftText />
      <TextInput 
        changeLine={line => enterTriggered()}/>
      <BlinkingCaret />
    </label>
  );
}

export default BottomLine;
