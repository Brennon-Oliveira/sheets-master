import React from 'react';
import './App.css';
import "path-browserify";
const { ipcRenderer } = window.require('electron');

ipcRenderer.on("teste", (event:any, arg:any) => {
  console.log("--------------------")
  console.log(arg);
  console.log("--------------------")
});
function App() {

  function teste(){
    console.log()
    console.log("teste");
    ipcRenderer.send('teste', {teste: "aaaa"});
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={teste}>teste</button>
      </header>
    </div>
  );
}

export default App;
