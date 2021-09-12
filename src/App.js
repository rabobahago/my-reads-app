import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

class App extends Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    searchBooks: [],
    screen: "shelves"
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState((prevState) => {
        return {
          books: [...prevState.books, ...books]
        };
      });
    });
  }
  updateShelves = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((res) => {
        this.setState(() => {
          return {
            books: res,
            searchBooks: res
          };
        });
      });
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <MainPage
                books={this.state.books}
                onUpdateShelves={this.updateShelves}
                onNavigate={() => {
                  this.setState({ screen: "search" });
                }}
                shelves={this.shelves}
              />
            );
          }}
        />
        <Route
          path="/search"
          render={() => {
            return (
              <SearchPage
                books={this.state.books}
                shelves={this.shelves}
                onUpdateShelves={this.updateShelves}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
