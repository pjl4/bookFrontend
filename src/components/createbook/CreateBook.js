import React, { Component } from 'react';
import { Redirect } from 'react-router';

const axios = require('axios');
const url = 'http://localhost:8080/api/books';
class CreateBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: {
				title: '',
				author: '',
				genre: '',
				rating: 1
			},
			createdBook: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(evt) {
		evt.preventDefault();
		let book = this.state.book;
		axios
			.post(url, book)
			.then((res) => {
				this.setState({ createdBook: true });
			})
			.catch((error) => console.log(error));
	}
	handleChange(evt, name) {
		let newBook = this.state.book;
		newBook[name] = evt.target.value;
		this.setState({ book: newBook });
	}
	render() {
		if (this.state.createdBook) {
			return <Redirect to="/" />;
		}
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="six columns">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							onChange={(evt) => this.handleChange(evt, 'title')}
						></input>
					</div>
					<div className="six columns">
						<label htmlFor="author">Author</label>
						<input
							type="text"
							onChange={(evt) => this.handleChange(evt, 'author')}
						></input>
					</div>
					<div className="row">
						<div className="six columns">
							<label htmlFor="genre">Genre</label>
							<input
								type="text"
								onChange={(evt) =>
									this.handleChange(evt, 'genre')
								}
							></input>
						</div>
						<div className="six columns">
							<label htmlFor="rating">Rating(0-5)</label>
							<input
								type="text"
								onChange={(evt) =>
									this.handleChange(evt, 'rating')
								}
							></input>
						</div>
					</div>
					<input type="submit" value="Submit"></input>
				</div>
			</form>
		);
	}
}
export default CreateBook;
