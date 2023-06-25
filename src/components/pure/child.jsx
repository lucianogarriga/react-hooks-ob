import React, {useRef} from "react";

const Child = ({ name, send, update }) => {

  const msgRef = useRef('')
  const nameRef = useRef('')

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

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value)
  }

  return (
    <div>
      <p
        onMouseOver={() => {
          console.log( `Hello ${name}`);
        }}
      >
        {name}
      </p>
      <button onClick={pressButton}>Button 1</button>
      <button onClick={() => pressButtonParams("Button 2")}>Button 2</button>
      <input
        placeholder = 'Send a text to your father'
        onFocus={inputFocused}
        onChange={(e) => console.log("Input: ", e.target.value)}
        onCopy={() => alert("Text copied")}
        ref={msgRef}
      />
      <button onClick={( ) => send(msgRef.current.value)}>Send msg to father</button>

      <div style={{marginTop:"20px"}}>
        <form onSubmit={submitName}>
          <input ref={nameRef} placeholder="New Name"/>
          <button type="submit">Update Name</button>

        </form>
      </div>
    </div>
  );
};

export default Child;
