import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";
class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Route
          path="/main"
          render={() => {
            <MainPage showSearchPage={this.state.showSearchPage} />;
          }}
        />
        <Route
          path="/search"
          render={() => {
            <MainPage showSearchPage={this.state.showSearchPage} />;
          }}
        />
      </div>
    );
  }
}

export default BooksApp;
