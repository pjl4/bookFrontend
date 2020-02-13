import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
	render() {
		return (
			<div className="container">
				<nav>
					<Link to="/">
						<h1>Best Reads</h1>
					</Link>
					<Link to="/create">
						<button>create a new book</button>
					</Link>
				</nav>
			</div>
		);
	}
}
export default Nav;
