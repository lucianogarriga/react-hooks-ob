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

  const returnError = async() => {
    await Promise.reject(new Error('Ups, An error occurred'))
  }

  const consumeError = () => {
    returnError()
      .then((res) => alert(`Resolve is ok ${res}`))
      .catch((err) => alert(`An error exists: ${err}`))
      .finally(() => alert('The promise was executed'))
  }

  return (
    <div>
      <h1>Async Example</h1>
      <button onClick={obtainNumber}>Obtener numero</button>
      <button onClick={obtainPromiseNumber}>Obtener Promesa</button>
      <button onClick={showStorage}>Save Name</button>
      <button onClick={obtainMessage}>Show message</button>
      <button onClick={consumeError}>Consume Error</button>
    </div>
  );
};

export default AsyncExample;
