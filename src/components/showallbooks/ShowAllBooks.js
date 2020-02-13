import React, { Component } from 'react';
import Showbook from '../book/Book';
const axios = require('axios');
const url = 'http://localhost:8080/api/books';

class ShowAllBooks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
	}
	componentDidMount() {
		axios
			.get(url)
			.then((res) => {
				this.setState({ books: res.data });
			})
			.catch((error) => console.log(error));
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
							<th></th>
						</tr>
					</thead>
					{this.state.books.length > 0 &&
						this.state.books.map((book) => (
							<Showbook book={book} key={book._id}></Showbook>
						))}
				</table>
			</div>
		);
	}
}

export default ShowAllBooks;
