import React from 'react';
import Board from './components/Board';
import './App.css';

function App() {


  return (
    <div >
      <div className="app-title">
        <h1 >Kanban Board</h1>
      </div>
      
        <Board />
      
    </div>
  );
}

export default App;
