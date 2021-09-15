import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
class SearchPage extends Component {
  state = {
    query: "",
    searchBook: []
  };
  updateQuery = async (query) => {
    this.setState(() => {
      return {
        query
      };
    });
    if (query === "") {
      this.setState(() => ({ searchBook: [] }));
    } else if (query !== "") {
      const searchBooks = await BooksAPI.search(query);
      try {
        if (searchBooks.length > 0 && searchBooks !== undefined) {
          this.setState({ searchBook: searchBooks });
        } else if (searchBooks.errors || searchBooks === undefined) {
          this.setState(() => {
            return {
              searchBook: []
            };
          });
        } else {
          this.setState({ searchBook: [] });
        }
        return searchBooks;
      } catch (err) {
        console.log(err);
      }
    }
  };
  render() {
    const { searchBook: showBooks, query } = this.state;
    const { onUpdateShelves: updateShelves, books } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showBooks.map((book) => {
              const bookOnShelf = books.find(({ id }) => book.id === id);
              const shelf = bookOnShelf ? bookOnShelf.shelf : "none";
              return (
                <li key={book.id}>
                  <Book
                    book={{ ...book, shelf }}
                    onUpdateShelves={updateShelves}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
