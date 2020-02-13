import React from 'react';
import './App.css';
import ShowAllBooks from './components/showallbooks/ShowAllBooks';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ShowSingleBook from './components/showsinglebook/ShowSingleBook';
import Nav from './components/nav/Nav';
import CreateBook from './components/createbook/CreateBook';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Route path="/" exact component={ShowAllBooks}></Route>
        <Route path="/create" exact component={CreateBook}></Route>
        <Route
          path="/:id"
          render={({ match }) => <ShowSingleBook match={match} />}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
