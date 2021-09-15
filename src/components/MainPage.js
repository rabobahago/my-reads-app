import React from "react";
import { Link } from "react-router-dom";
import SelectedBooks from "./SelectedBooks";

const MainPage = ({ onUpdateShelves, books }) => {
  const shelves = [
    { shelfName: "Currently Reading", id: "currentlyReading" },
    { shelfName: "Want to Read", id: "wantToRead" },
    { shelfName: "Read", id: "read" }
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf) => {
          const filteredBooks = books.filter((book) => book.shelf === shelf.id);
          return (
            <div key={shelf.id}>
              <SelectedBooks
                onFilteredBooks={filteredBooks}
                onUpdateShelves={onUpdateShelves}
                currentShelf={shelf}
                shelfName={shelf.shelfName}
              />
            </div>
          );
        })}
      </div>
      <div className="open-search">
        <Link to="/search" className="open-search">
          search book
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
