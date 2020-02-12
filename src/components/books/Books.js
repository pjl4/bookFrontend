import React, { Component } from 'react';
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
			.then((res) => {
				this.setState({ books: res.data });
			})
			.catch((error) => console.log(error));
	}
	render() {
		console.log(this.state.books);
		return (
			<div>
				<h1>This is our books component</h1>
			</div>
		);
	}
}

export default Books;
