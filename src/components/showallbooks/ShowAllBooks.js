import React from 'react';
function ShowAllBooks(props) {
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
      </td>
    </tr>
  );
}

export default ShowAllBooks;
