import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
