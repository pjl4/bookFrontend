import React from 'react';
function Showbook(props) {
  return (
    <tr>
      <td>{props.book.title}</td>
      <td>{props.book.author}</td>
      <td>{props.book.genre}</td>
      <td>{props.book.rating}</td>
    </tr>
  );
}

export default Showbook;
