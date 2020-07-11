import React from 'react';
import './App.css';
import Header from './Components/Common/Header'
import Meeting from './Components/Meeting'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Meeting Status</h1>
      <Meeting/>
    </div>
  );
}
export default App;
