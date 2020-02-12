import React, { Component } from 'react';
import Showbook from '../showbook/Showbook';
const axios = require('axios');
const url = 'http://localhost:8080/api/books';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating(0-5)</th>
            </tr>
          </thead>
          {this.state.books.length > 0 &&
            this.state.books.map(book => <Showbook book={book}></Showbook>)}
        </table>
      </div>
    );
  }
}

export default Books;
