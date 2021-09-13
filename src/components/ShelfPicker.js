import React from "react";

class ShelfPicker extends React.Component {
  state = {
    value: this.props.value
  };
  handleChange = (e) => {
    const { book, onUpdateShelves: updateShelves } = this.props;
    this.setState({ value: e.target.value });
    updateShelves(book, e.target.value);
  };
  render() {
    const { book } = this.props;
    return (
      <select value={book.shelf} onChange={this.handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}
export default ShelfPicker;
