import React from 'react';
import './App.css';

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

function App() {

  function teste(){
    console.log(ipcRenderer)
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
