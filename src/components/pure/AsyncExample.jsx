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
    generatePromiseNumber()
    .then((res) => alert(`Response of PromiseNum: ${res}`))
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

  async function saveSessionStorage(key, value) {
    await sessionStorage.setItem(key, value);

    return Promise.resolve(sessionStorage.getItem(key,value))
  }

  function showStorage(){
    saveSessionStorage('name', 'Luciano')
    .then((res) => {
      let value = res;
      alert(`Saved name: ${value}`)
    })
    .catch((error) => {
      alert(`Something went wrong: ${error}`)
    })
    .finally(() => alert('Name saved and retrieved successfully'))
  }

  async function obtainMessage(){
    let promise = new Promise((res, rej) => {
      setTimeout(() => {
        res('Hello world')
      }, 2000);
    })

    // Now we show the result
    let message = await promise;

    alert(`The message is: ${message}`);
  }

  return (
    <div>
      <h1>Async Example</h1>
      <button onClick={obtainNumber}>Obtener numero</button>
      <button onClick={obtainPromiseNumber}>Obtener Promesa</button>
      <button onClick={showStorage}>Save Name</button>
      <button onClick={obtainMessage}>Show message</button>
    </div>
  );
};

export default AsyncExample;
