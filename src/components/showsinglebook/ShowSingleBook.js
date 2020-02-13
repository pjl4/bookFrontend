import React, { Component } from 'react';
import { Redirect } from 'react-router';

const axios = require('axios');
let url = '';
class ShowSingleBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		url = `http://localhost:8080/api/books/${this.props.match.params.id}`;
		axios
			.get(url)
			.then((res) => {
				this.setState({ book: res.data });
			})
			.catch((error) => console.log(error));
	}
	handleSubmit(evt) {
		evt.preventDefault();
		let book = this.state.book;
		axios
			.put(url, book)
			.then((res) => {})
			.catch((error) => console.log(error));
	}
	handleChange(evt, name) {
		let newBook = this.state.book;
		newBook[name] = evt.target.value;
		this.setState({ book: newBook });
	}
	render() {
		return (
			<div>
				{this.state.book !== null && (
					<form onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="six columns">
								<label htmlFor="title">Title</label>
								<input
									type="text"
									onChange={(evt) =>
										this.handleChange(evt, 'title')
									}
									value={this.state.book.title}
								></input>
							</div>
							<div className="six columns">
								<label htmlFor="author">Author</label>
								<input
									type="text"
									onChange={(evt) =>
										this.handleChange(evt, 'author')
									}
									value={this.state.book.author}
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
										value={this.state.book.genre}
									></input>
								</div>
								<div className="six columns">
									<label htmlFor="rating">Rating(0-5)</label>
									<input
										type="text"
										onChange={(evt) =>
											this.handleChange(evt, 'rating')
										}
										value={this.state.book.rating}
									></input>
								</div>
							</div>
							<input type="submit" value="Submit"></input>
						</div>
					</form>
				)}
			</div>
		);
	}
}

export default ShowSingleBook;
