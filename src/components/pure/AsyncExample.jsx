import React from "react";

const AsyncExample = () => {

  async function generateNumber() {
    return 1;
  }

  async function generatePromiseNumber(){
    return Promise.resolve(2)
  }

  function obtainNumber(){
    generateNumber()
        .then((res) => alert(`Response: ${res}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
  }

  function obtainPromiseNumber(){
    generatePromiseNumber().then((res) => alert(`Response of PromiseNum: ${res}`))
  }

  async function saveSessionStorage(key, value) {
    await sessionStorage.setItem(key, value);
  }

  return (
    <div>
      <h1>Async Example</h1>
      <button onClick={obtainNumber}>Obtener numero</button>
      <button onClick={obtainPromiseNumber}>Obtener Promesa</button>
    </div>
  );
};

export default AsyncExample;
