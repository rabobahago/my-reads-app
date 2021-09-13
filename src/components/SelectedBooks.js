import React, { Component } from "react";
import Book from "./Book";

class Selected extends Component {
  render() {
    const {
      onFilteredBooks: filteredBooks,
      onUpdateShelves,
      shelfName
    } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {filteredBooks.map((book) => (
              <li key={book.id}>
                <Book onUpdateShelves={onUpdateShelves} book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Selected;
