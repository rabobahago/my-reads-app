import React from "react";
import ShelfPicker from "./ShelfPicker";

const Book = ({ book, onUpdateShelves }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 160,
            height: 200,
            backgroundImage: book.imageLinks
              ? `url(${book.imageLinks.thumbnail})`
              : ""
          }}
        ></div>
        <div className="book-shelf-changer">
          <ShelfPicker onUpdateShelves={onUpdateShelves} book={book} />
        </div>
      </div>
      <div className="book-title">
        {book.title ? book.title : "no title provided"}
      </div>
      <div className="book-authors">
        {book.authors ? book.authors.join(",") : "no authors provided"}
      </div>
    </div>
  );
};
export default Book;
