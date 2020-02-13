import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
	render() {
		return (
			<nav>
				<Link to="/">
					<h2>Books</h2>
				</Link>
				<Link to="/create">
					<button>create a new book</button>
				</Link>
			</nav>
		);
	}
}
export default Nav;
