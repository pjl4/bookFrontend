import React from 'react';
import './App.css';
import Books from './components/books/Books';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Books}></Route>
      </Router>
    </div>
  );
}

export default App;
