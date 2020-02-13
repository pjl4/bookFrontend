import React from 'react';

function Book(props) {
	return (
		<tr>
			<td>{props.book.title}</td>
			<td>{props.book.author}</td>
			<td>{props.book.genre}</td>
			<td>{props.book.rating}</td>
			<td>
				<a href={`/${props.book._id}`}>
					<button>edit</button>
				</a>
				<button
					onClick={() => props.handleDelete(props.book._id)}
					className="button-primary"
				>
					delete
				</button>
			</td>
		</tr>
	);
}

export default Book;
