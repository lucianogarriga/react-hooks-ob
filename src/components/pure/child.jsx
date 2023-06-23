import React, {useRef} from "react";

const Child = ({ name, send }) => {

  const msgRef = useRef('')

  function pressButton() {
    const text = msgRef.current.value;
    alert(`Texto: ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  const inputFocused = () => {
    console.log("Input Focused");
  };

  return (
    <div>
      <p
        onMouseOver={() => {
          console.log("OnMouseOver");
        }}
      >
        {name} Component
      </p>
      <button onClick={pressButton}>Button 1</button>
      <button onClick={() => pressButtonParams("Button 2")}>Button 2</button>
      <input
        placeholder="Insert a text"
        onFocus={inputFocused}
        onChange={(e) => console.log("Input: ", e.target.value)}
        onCopy={() => alert("Text copied")}
        ref={msgRef}
      />
      <button onClick={( ) => send('Hello father')}>Send msg to father</button>
    </div>
  );
};

export default Child;
